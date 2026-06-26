/* =========================================================
   Duo Finance — app logic
   Vanilla JS. No build step, no dependencies, no API keys.
   Voice via the browser-native Web Speech API (free).
   ========================================================= */

(() => {
  "use strict";

  /* ---------- tiny helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, txt) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  };
  const norm = s => s.toLowerCase().replace(/[^a-z0-9% ]+/g, "").replace(/\s+/g, " ").trim();

  /* ---------- persistence ---------- */
  const KEY = "duofinance.v1";
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const loadState = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  };
  let state = Object.assign(
    { xp: 0, doneLessons: {}, terms: {}, streak: 0, lastDay: null, track: "market" },
    loadState()
  );
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} };

  function bumpStreak() {
    const t = todayStr();
    if (state.lastDay === t) return;
    const yest = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streak = state.lastDay === yest ? (state.streak || 0) + 1 : 1;
    state.lastDay = t;
    save();
  }

  /* ---------- screens ---------- */
  const screens = {
    home: $("#screen-home"),
    lesson: $("#screen-lesson"),
    done: $("#screen-done"),
  };
  function show(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo(0, 0);
  }

  function toast(msg, ms = 2600) {
    const t = el("div", "toast", msg);
    document.body.appendChild(t);
    setTimeout(() => t.remove(), ms);
  }

  /* =========================================================
     VOICE — Web Speech API
     ========================================================= */
  const TTS = window.speechSynthesis || null;
  let voicePick = null;
  function pickVoice() {
    if (!TTS) return;
    const vs = TTS.getVoices();
    voicePick =
      vs.find(v => /en[-_]US/i.test(v.lang) && /google|samantha|natural|aria|jenny/i.test(v.name)) ||
      vs.find(v => /en[-_]US/i.test(v.lang)) ||
      vs.find(v => /^en/i.test(v.lang)) || null;
  }
  if (TTS) { pickVoice(); TTS.onvoiceschanged = pickVoice; }

  function speak(text, rate = 0.95) {
    if (!TTS) return;
    try {
      TTS.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US"; u.rate = rate; u.pitch = 1;
      if (voicePick) u.voice = voicePick;
      TTS.speak(u);
    } catch {}
  }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const HAS_SR = !!SR;

  /* simple word-overlap score 0..1 between spoken & target */
  function scoreSpeech(said, target) {
    const a = norm(said).split(" ").filter(Boolean);
    const b = norm(target).split(" ").filter(Boolean);
    if (!a.length || !b.length) return 0;
    const bag = {};
    b.forEach(w => bag[w] = (bag[w] || 0) + 1);
    let hit = 0;
    a.forEach(w => { if (bag[w]) { hit++; bag[w]--; } });
    return hit / b.length;
  }

  /* =========================================================
     HOME — tabs + unit map
     ========================================================= */
  const SVG_PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  const SVG_SPK = '<svg viewBox="0 0 24 24"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>';
  const SVG_MIC = '<svg viewBox="0 0 24 24"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2z"/></svg>';

  function refreshStats() {
    $("#xpTotal").textContent = state.xp || 0;
    $("#lessonsDone").textContent = Object.keys(state.doneLessons).length;
    $("#termsLearned").textContent = Object.keys(state.terms).length;
    $("#streakCount").textContent = state.streak || 0;
  }

  function unitsFor(track) { return CURRICULUM.filter(u => u.track === track); }

  function renderHome() {
    refreshStats();
    const host = $("#unitList");
    host.innerHTML = "";
    const isFinra = state.track === "finra";

    unitsFor(state.track).forEach(unit => {
      const uWrap = el("div", "unit");
      const head = el("div", "unit-head");
      const lvl = el("span", "unit-level" + (isFinra ? " finra" : ""), unit.level);
      const ttl = el("span", "unit-title", unit.title);
      head.append(lvl, ttl);
      uWrap.append(head);
      if (unit.blurb) uWrap.append(el("p", "unit-blurb", unit.blurb));

      const rows = el("div", "lesson-row");
      unit.lessons.forEach((lesson, i) => {
        const done = !!state.doneLessons[lesson.id];
        const row = el("div", "lesson" + (done ? " done" : ""));
        const node = el("div", "node", done ? "✓" : String(i + 1));
        const meta = el("div", "lesson-meta");
        meta.append(el("div", "lesson-name", lesson.title));
        meta.append(el("div", "lesson-sub", lesson.cards.length + " cards"));
        const go = el("div", "lesson-go", "›");
        row.append(node, meta, go);
        row.addEventListener("click", () => startLesson(unit, lesson));
        rows.append(row);
      });
      uWrap.append(rows);
      host.append(uWrap);
    });

    if (isFinra) {
      const disc = el("p", "micro",
        "Educational study aid only — not affiliated with or endorsed by FINRA or NASAA. Exam facts can change; always confirm on finra.org / nasaa.org.");
      disc.style.marginTop = "8px";
      host.append(disc);
    }
  }

  function setTrack(track) {
    state.track = track; save();
    document.querySelectorAll(".tab").forEach(t =>
      t.classList.toggle("active", t.dataset.track === track));
    renderHome();
  }
  document.querySelectorAll(".tab").forEach(tab =>
    tab.addEventListener("click", () => setTrack(tab.dataset.track)));

  /* =========================================================
     LESSON ENGINE
     ========================================================= */
  let session = null;

  function startLesson(unit, lesson) {
    session = {
      unit, lesson,
      cards: lesson.cards,
      idx: 0,
      hearts: 3,
      correct: 0,
      firstTime: !state.doneLessons[lesson.id],
      answered: false,
      ok: false,
      checkFn: null,
    };
    show("lesson");
    renderHearts();
    renderCard();
  }

  function renderHearts() {
    const h = $("#hearts");
    h.innerHTML = "";
    for (let i = 0; i < 3; i++) h.append(el("span", null, i < session.hearts ? "♥" : "♡"));
  }

  function setProgress() {
    const pct = (session.idx / session.cards.length) * 100;
    $("#progressFill").style.width = pct + "%";
  }

  const primaryBtn = $("#primaryBtn");
  const feedback = $("#feedback");

  function resetFooter(label = "Check") {
    session.answered = false; session.ok = false; session.checkFn = null;
    feedback.className = "feedback"; feedback.textContent = "";
    primaryBtn.className = "primary-btn";
    primaryBtn.textContent = label;
    primaryBtn.disabled = true;
  }
  function enablePrimary() { primaryBtn.disabled = false; }

  function renderCard() {
    setProgress();
    const card = session.cards[session.idx];
    const host = $("#cardHost");
    host.innerHTML = "";
    resetFooter();
    const isFinra = session.unit.track === "finra";

    const kick = (label) => {
      const k = el("div", "q-kicker" + (isFinra ? " finra" : ""), label);
      host.append(k);
    };

    switch (card.type) {
      case "teach":      renderTeach(host, card, kick); break;
      case "concept":    renderConcept(host, card); break;
      case "listen":     renderListen(host, card, kick); break;
      case "choice":     renderChoice(host, card, kick, "Choose"); break;
      case "quiz":       renderChoice(host, card, kick, "Exam review", true); break;
      case "speak":      renderSpeak(host, card, kick); break;
      case "build":      renderBuild(host, card, kick); break;
      case "fill":       renderFill(host, card, kick); break;
      default:           renderTeach(host, card, kick);
    }
  }

  /* ---- TEACH ---- */
  function renderTeach(host, card, kick) {
    kick("New term");
    const c = el("div", "teach-card");
    c.append(el("div", "teach-term", card.term));
    c.append(el("p", "teach-mean", card.meaning));
    if (card.example) c.append(el("div", "teach-ex", "“" + card.example + "”"));

    const line = el("div", "play-line");
    const pb = el("button", "play-btn"); pb.innerHTML = SVG_SPK;
    pb.addEventListener("click", () => speak(card.example || card.term));
    line.append(pb, el("span", "play-label", "Hear it"));
    c.append(line);
    host.append(c);

    speak(card.example || card.term);
    primaryBtn.textContent = "Got it";
    enablePrimary();
    session.answered = true; session.ok = true;
  }

  /* ---- CONCEPT (FINRA content review) ---- */
  function renderConcept(host, card) {
    const k = el("div", "q-kicker finra", "Exam concept");
    host.append(k);
    const c = el("div", "concept-card");
    c.append(el("div", "ct", card.title));
    c.append(el("p", "cb", card.body));
    const line = el("div", "play-line");
    const pb = el("button", "play-btn"); pb.innerHTML = SVG_SPK;
    pb.addEventListener("click", () => speak(card.body));
    line.append(pb, el("span", "play-label", "Read aloud"));
    c.append(line);
    host.append(c);

    speak(card.body);
    primaryBtn.textContent = "Got it";
    enablePrimary();
    session.answered = true; session.ok = true;
  }

  /* ---- LISTEN ---- */
  function renderListen(host, card, kick) {
    kick("Listen");
    host.append(Object.assign(el("p", "q-sub"),
      { textContent: "Tap to play, then pick what you heard." }));

    const blob = el("div", "audio-blob");
    blob.innerHTML = SVG_PLAY;
    const play = () => {
      blob.classList.add("playing");
      speak(card.audio, 0.9);
      setTimeout(() => blob.classList.remove("playing"), 1600);
    };
    blob.addEventListener("click", play);
    host.append(blob);
    setTimeout(play, 250);

    let chosen = -1;
    const opts = el("div", "opts");
    card.options.forEach((text, i) => {
      const o = el("button", "opt", text);
      o.addEventListener("click", () => {
        if (session.answered) return;
        chosen = i;
        opts.querySelectorAll(".opt").forEach(x => x.classList.remove("sel"));
        o.classList.add("sel");
        enablePrimary();
      });
      opts.append(o);
    });
    host.append(opts);

    session.checkFn = () => {
      const nodes = [...opts.children];
      const ok = chosen === card.answer;
      nodes.forEach((n, i) => {
        if (i === card.answer) n.classList.add("correct");
        if (i === chosen && !ok) n.classList.add("wrong");
        n.style.pointerEvents = "none";
      });
      return ok;
    };
  }

  /* ---- CHOICE / QUIZ ---- */
  function renderChoice(host, card, kick, label, isQuiz = false) {
    kick(label);
    host.append(el("div", "q-title", card.q));

    let chosen = -1;
    const opts = el("div", "opts");
    card.options.forEach((text, i) => {
      const o = el("button", "opt", text);
      o.addEventListener("click", () => {
        if (session.answered) return;
        chosen = i;
        opts.querySelectorAll(".opt").forEach(x => x.classList.remove("sel"));
        o.classList.add("sel");
        enablePrimary();
      });
      opts.append(o);
    });
    host.append(opts);

    let whyBox = null;
    if (isQuiz && card.why) {
      whyBox = el("div", "why-box");
      whyBox.append(el("span", "wl", "Why"));
      whyBox.append(document.createTextNode(card.why));
      host.append(whyBox);
    }

    session.checkFn = () => {
      const nodes = [...opts.children];
      const ok = chosen === card.answer;
      nodes.forEach((n, i) => {
        if (i === card.answer) n.classList.add("correct");
        if (i === chosen && !ok) n.classList.add("wrong");
        n.style.pointerEvents = "none";
      });
      if (whyBox) whyBox.classList.add("show");
      return ok;
    };
  }

  /* ---- SPEAK ---- */
  function renderSpeak(host, card, kick) {
    kick("Speak");
    host.append(el("div", "speak-target", "“" + card.phrase + "”"));
    if (card.hint) host.append(el("p", "speak-hint", card.hint));

    const replay = el("button", "replay", "🔊 Hear it first");
    replay.addEventListener("click", () => speak(card.phrase));
    host.append(replay);

    const mic = el("button", "mic-btn");
    mic.innerHTML = SVG_MIC;
    host.append(mic);
    const status = el("div", "mic-status");
    const heard = el("div", "heard");
    host.append(status, heard);

    if (!HAS_SR) {
      status.textContent = "Speech recognition isn't supported here — listen, say it aloud, then mark yourself.";
      mic.style.opacity = ".5";
      const selfBtns = el("div", "play-line");
      selfBtns.style.justifyContent = "center";
      const yep = el("button", "ghost-btn", "I said it ✓");
      yep.addEventListener("click", () => { enablePrimary(); session._selfOk = true; status.textContent = "Nice — tap Check."; });
      selfBtns.append(yep);
      host.append(selfBtns);
      session.checkFn = () => session._selfOk === true;
      mic.addEventListener("click", () => speak(card.phrase));
      return;
    }

    let lastScore = 0, lastSaid = "";
    const rec = new SR();
    rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 1;

    mic.addEventListener("click", () => {
      try {
        if (TTS) TTS.cancel();
        status.textContent = "Listening… speak now";
        mic.classList.add("listening");
        rec.start();
      } catch {}
    });
    rec.onresult = (e) => {
      lastSaid = e.results[0][0].transcript;
      lastScore = scoreSpeech(lastSaid, card.phrase);
      heard.textContent = "“" + lastSaid + "”";
      const pct = Math.round(lastScore * 100);
      heard.style.color = lastScore >= 0.7 ? "var(--green)" : "var(--red)";
      status.textContent = pct + "% match" + (lastScore >= 0.7 ? " — sounds good!" : " — try again or tap Check");
      enablePrimary();
    };
    rec.onerror = () => { status.textContent = "Didn't catch that — tap the mic to retry."; mic.classList.remove("listening"); enablePrimary(); };
    rec.onend = () => mic.classList.remove("listening");

    session.checkFn = () => lastScore >= 0.7;
  }

  /* ---- BUILD ---- */
  function renderBuild(host, card, kick) {
    kick("Build the sentence");
    host.append(el("p", "q-sub", "Tap the words in the right order."));
    const answer = el("div", "build-answer");
    const bank = el("div", "bank");
    host.append(answer, bank);

    const picked = [];
    const order = card.words.map((w, i) => ({ w, i })).sort(() => Math.random() - 0.5);

    function sync() {
      answer.innerHTML = "";
      picked.forEach((p, pos) => {
        const c = el("span", "chip in-answer", p.w);
        c.addEventListener("click", () => {
          picked.splice(pos, 1);
          bank.querySelector('[data-i="' + p.i + '"]').classList.remove("used");
          sync();
        });
        answer.append(c);
      });
      primaryBtn.disabled = picked.length === 0;
    }
    order.forEach(({ w, i }) => {
      const c = el("span", "chip", w);
      c.dataset.i = i;
      c.addEventListener("click", () => {
        if (c.classList.contains("used") || session.answered) return;
        c.classList.add("used");
        picked.push({ w, i });
        sync();
      });
      bank.append(c);
    });

    session.checkFn = () => norm(picked.map(p => p.w).join(" ")) === norm(card.target);
  }

  /* ---- FILL ---- */
  function renderFill(host, card, kick) {
    kick("Fill the gap");
    host.append(el("div", "q-title", card.sentence.replace("___", "______")));
    const input = el("input", "fill-input");
    input.type = "text"; input.autocapitalize = "none"; input.autocomplete = "off";
    input.placeholder = "Type your answer";
    input.addEventListener("input", () => { primaryBtn.disabled = input.value.trim() === ""; });
    input.addEventListener("keydown", e => { if (e.key === "Enter" && !primaryBtn.disabled) primaryBtn.click(); });
    host.append(input);
    setTimeout(() => input.focus(), 100);

    const accepts = (card.accept || [card.answer]).map(norm);
    session.checkFn = () => accepts.includes(norm(input.value));
  }

  /* =========================================================
     CHECK / CONTINUE
     ========================================================= */
  primaryBtn.addEventListener("click", () => {
    const card = session.cards[session.idx];
    const passive = card.type === "teach" || card.type === "concept";

    if (!session.answered) {
      const ok = passive ? true : (session.checkFn ? session.checkFn() : false);
      session.answered = true; session.ok = ok;

      if (passive) {
        if (card.type === "teach" && card.term) state.terms[card.term] = 1;
        nextCard(); return;
      }

      if (ok) {
        session.correct++;
        feedback.className = "feedback ok";
        feedback.textContent = pickPraise();
        if (card.type === "teach" && card.term) state.terms[card.term] = 1;
      } else {
        session.hearts--;
        renderHearts();
        feedback.className = "feedback no";
        feedback.textContent = answerText(card);
      }
      save();
      primaryBtn.className = "primary-btn go-green";
      primaryBtn.textContent = session.idx + 1 >= session.cards.length ? "Finish" : "Continue";

      if (session.hearts <= 0) { primaryBtn.textContent = "Out of hearts — finish"; }
      return;
    }
    // second tap = continue
    if (session.hearts <= 0) { finishLesson(); return; }
    nextCard();
  });

  function nextCard() {
    session.idx++;
    if (session.idx >= session.cards.length) { finishLesson(); return; }
    renderCard();
  }

  function answerText(card) {
    if (card.type === "listen") return "Answer: " + card.options[card.answer];
    if (card.type === "choice" || card.type === "quiz") return "Answer: " + card.options[card.answer];
    if (card.type === "build") return "Answer: " + card.target;
    if (card.type === "fill") return "Answer: " + card.answer;
    if (card.type === "speak") return "Keep practicing — tap Continue.";
    return "Not quite.";
  }

  const PRAISE = ["Nice!", "Correct!", "Sharp.", "On the money.", "Exactly.", "Clean."];
  function pickPraise() { return PRAISE[Math.floor(Math.random() * PRAISE.length)]; }

  function finishLesson() {
    setProgress();
    const passed = session.hearts > 0;
    let gained = session.correct * 10;
    if (passed && session.firstTime) {
      gained += 20;
      state.doneLessons[session.lesson.id] = 1;
    } else if (passed) {
      state.doneLessons[session.lesson.id] = 1;
    }
    state.xp = (state.xp || 0) + gained;
    bumpStreak();
    save();

    $("#progressFill").style.width = "100%";
    $("#doneSummary").textContent = passed
      ? `+${gained} XP · ${session.correct}/${session.cards.length} correct`
      : `Ran out of hearts. You still earned +${gained} XP — give it another go!`;
    $("#screen-done .done-badge").textContent = passed ? "✓" : "↺";
    show("done");
    if (TTS) TTS.cancel();
  }

  /* ---------- nav buttons ---------- */
  $("#quitLesson").addEventListener("click", () => {
    if (TTS) TTS.cancel();
    show("home"); renderHome();
  });
  $("#backHome").addEventListener("click", () => { show("home"); renderHome(); });

  $("#voiceCheckBtn").addEventListener("click", () => {
    const bits = [];
    bits.push(TTS ? "✓ Audio (listening) works." : "✗ No speech synthesis in this browser.");
    bits.push(HAS_SR ? "✓ Microphone (speaking) is supported." : "✗ Speaking practice needs Chrome or Safari — you can still self-check.");
    if (TTS) speak("Welcome to Duo Finance. Let's talk the money talk.");
    toast(bits.join("  "), 4200);
  });

  /* ---------- service worker ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }

  /* ---------- boot ---------- */
  setTrack(state.track || "market");
  renderHome();
})();
