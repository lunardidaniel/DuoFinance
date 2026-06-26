/* ============================================================
   Duo Finance — Curriculum
   Tracks: "market" (English of finance) and "finra" (exam prep)
   Card types:
     teach   : term + meaning + example (auto read aloud)
     listen  : play audio, pick what you heard
     speak   : say the phrase aloud (speech recognition)
     choice  : multiple choice comprehension / slang
     build   : reorder words into the correct sentence
     fill    : fill the gap (type)
     concept : exam concept — title + explanation (read aloud), no answer
     quiz    : exam review question (4 options, with rationale)
   ============================================================ */

const CURRICULUM = [
  /* ============================================================
     ===============   TRACK 1 — MARKET ENGLISH   ===============
     ============================================================ */

  /* ========================= U1 — BASICS ========================= */
  {
    id: "u1", track: "market", title: "Money Basics", level: "Beginner",
    blurb: "Core words you hear every single day on a desk.",
    lessons: [
      { id: "u1l1", title: "Cash & Capital", cards: [
        { type: "teach", term: "Cash", meaning: "Money that's immediately available — bills, coins, or bank balances ready to spend.", example: "We're sitting on a lot of cash right now." },
        { type: "teach", term: "Capital", meaning: "Money or assets used to run a business or make investments.", example: "They raised capital to grow the company." },
        { type: "listen", audio: "We need to free up some cash.", options: ["We need to free up some cash.", "We need to lock up some cash.", "We need to free up some cars."], answer: 0 },
        { type: "choice", q: "If a company is 'sitting on a lot of cash', it means they...", options: ["have plenty of money available", "are losing money fast", "owe money to a bank"], answer: 0 },
        { type: "speak", phrase: "We raised capital to grow the business.", hint: "Say it clearly and naturally." },
        { type: "build", target: "We need to free up some cash.", words: ["some", "We", "free", "cash", "need", "up", "to"] },
      ]},
      { id: "u1l2", title: "Revenue vs. Profit", cards: [
        { type: "teach", term: "Revenue", meaning: "The total money a business brings in from sales, before any costs.", example: "Top-line revenue grew 20% this quarter." },
        { type: "teach", term: "Profit", meaning: "What's left after you subtract all costs from revenue. Also called the bottom line.", example: "Revenue was up, but profit was flat." },
        { type: "teach", term: "Top line / Bottom line", meaning: "Slang: 'top line' = revenue (top of the statement). 'Bottom line' = net profit (the last line).", example: "The bottom line is what shareholders care about." },
        { type: "listen", audio: "Revenue was up, but profit was flat.", options: ["Revenue was up, but profit was flat.", "Revenue was up, but profit was fat.", "Revenue was down, but profit was flat."], answer: 0 },
        { type: "fill", sentence: "The ___ line is the total sales before costs.", answer: "top", accept: ["top"] },
        { type: "speak", phrase: "Revenue was up, but the bottom line was flat.", hint: "Stress 'bottom line'." },
        { type: "choice", q: "'The numbers don't add up' usually means...", options: ["something looks wrong or inconsistent", "the total is very high", "the deal is closed"], answer: 0 },
      ]},
      { id: "u1l3", title: "Everyday Desk Slang", cards: [
        { type: "teach", term: "To run the numbers", meaning: "To do the calculations / analysis on a deal or idea.", example: "Let me run the numbers and get back to you." },
        { type: "teach", term: "To circle back", meaning: "To return to a topic later.", example: "Let's circle back on pricing tomorrow." },
        { type: "teach", term: "To loop someone in", meaning: "To include someone in an email or conversation.", example: "I'll loop in legal on this." },
        { type: "speak", phrase: "Let me run the numbers and circle back.", hint: "Two phrasal verbs in one sentence." },
        { type: "listen", audio: "I'll loop in legal on this one.", options: ["I'll loop in legal on this one.", "I'll loop in legal on this loan.", "I'll look in legal on this one."], answer: 0 },
        { type: "build", target: "Let me run the numbers first.", words: ["the", "Let", "run", "numbers", "me", "first"] },
      ]},
    ],
  },

  /* ===================== U2 — MARKETS & STOCKS ===================== */
  {
    id: "u2", track: "market", title: "Markets & Stocks", level: "Beginner+",
    blurb: "Equities, tickers, and the language of the trading floor.",
    lessons: [
      { id: "u2l1", title: "Stocks & Shares", cards: [
        { type: "teach", term: "Stock / Share / Equity", meaning: "A unit of ownership in a company. 'Equity' is the broad term; 'shares' are the countable units.", example: "She owns shares in three tech companies." },
        { type: "teach", term: "Ticker", meaning: "The short symbol that identifies a stock (e.g., AAPL for Apple).", example: "What's the ticker for that company?" },
        { type: "teach", term: "To go long / short", meaning: "Go long = bet a price will rise. Go short = bet it will fall.", example: "We went long on energy this week." },
        { type: "choice", q: "If a trader 'goes short' on a stock, they expect it to...", options: ["fall in price", "rise in price", "stay flat"], answer: 0 },
        { type: "listen", audio: "We went long on energy this week.", options: ["We went long on energy this week.", "We went wrong on energy this week.", "We went long on entry this week."], answer: 0 },
        { type: "speak", phrase: "We're going long on tech this quarter.", hint: "Confident tone." },
      ]},
      { id: "u2l2", title: "Bulls, Bears & Moves", cards: [
        { type: "teach", term: "Bull market / Bear market", meaning: "Bull = prices rising and optimism. Bear = prices falling and pessimism.", example: "We've been in a bull market for two years." },
        { type: "teach", term: "Rally / Sell-off", meaning: "Rally = a strong rise in prices. Sell-off = a sharp fall as people dump assets.", example: "Stocks rallied after the earnings beat." },
        { type: "teach", term: "To beat / miss (earnings)", meaning: "Beat = results better than expected. Miss = worse than expected.", example: "They beat on revenue but missed on profit." },
        { type: "fill", sentence: "A market with rising prices and optimism is a ___ market.", answer: "bull", accept: ["bull"] },
        { type: "listen", audio: "Stocks rallied after the earnings beat.", options: ["Stocks rallied after the earnings beat.", "Stocks rallied after the earnings beet.", "Stocks fell after the earnings beat."], answer: 0 },
        { type: "speak", phrase: "They beat on revenue but missed on profit.", hint: "Contrast 'beat' and 'missed'." },
        { type: "build", target: "The market rallied after the news.", words: ["after", "The", "rallied", "news", "market", "the"] },
      ]},
      { id: "u2l3", title: "Volatility Talk", cards: [
        { type: "teach", term: "Volatility", meaning: "How much and how fast prices move. High volatility = big swings.", example: "Volatility spiked after the announcement." },
        { type: "teach", term: "Choppy / Whipsaw", meaning: "Choppy = erratic, hard-to-read moves. Whipsaw = sharp reversals that catch traders out.", example: "It's been a choppy session." },
        { type: "teach", term: "To take a hit", meaning: "To suffer a loss.", example: "Our portfolio took a hit today." },
        { type: "choice", q: "A 'choppy session' means the market is...", options: ["moving erratically", "perfectly calm", "closed for the day"], answer: 0 },
        { type: "speak", phrase: "Volatility spiked and our book took a hit.", hint: "'Book' = a trader's positions." },
        { type: "listen", audio: "It's been a choppy session today.", options: ["It's been a choppy session today.", "It's been a chopping session today.", "It's been a choppy mission today."], answer: 0 },
      ]},
    ],
  },

  /* ================= U3 — FIXED INCOME & RATES ================= */
  {
    id: "u3", track: "market", title: "Bonds, Rates & Fixed Income", level: "Intermediate",
    blurb: "Yields, the curve, and central-bank speak.",
    lessons: [
      { id: "u3l1", title: "Bonds 101", cards: [
        { type: "teach", term: "Bond", meaning: "A loan you give to a company or government; they pay you interest and return the principal later.", example: "He moved into bonds for safety." },
        { type: "teach", term: "Fixed income", meaning: "Investments that pay a set, predictable return — mostly bonds.", example: "She runs the fixed income desk." },
        { type: "teach", term: "Coupon", meaning: "The interest payment a bond makes, usually expressed as a yearly rate.", example: "This bond pays a 5% coupon." },
        { type: "listen", audio: "This bond pays a five percent coupon.", options: ["This bond pays a five percent coupon.", "This bond pays a five percent cooper.", "This bomb pays a five percent coupon."], answer: 0 },
        { type: "speak", phrase: "She runs the fixed income desk.", hint: "Clear and steady." },
        { type: "choice", q: "A 'coupon' on a bond is the...", options: ["interest payment", "purchase discount", "maturity date"], answer: 0 },
      ]},
      { id: "u3l2", title: "Yields & The Curve", cards: [
        { type: "teach", term: "Yield", meaning: "The return you earn on a bond. When bond prices rise, yields fall, and vice versa.", example: "Yields backed up after the data." },
        { type: "teach", term: "Yield curve", meaning: "A graph of yields across maturities. 'Inverted' = short rates higher than long — often a recession signal.", example: "The curve inverted last month." },
        { type: "teach", term: "Basis point (bp)", meaning: "One hundredth of a percent. 25 bps = 0.25%.", example: "They hiked by 25 basis points." },
        { type: "fill", sentence: "Twenty-five basis points equals ___ percent.", answer: "0.25", accept: ["0.25", ".25", "0,25"] },
        { type: "listen", audio: "They hiked by twenty-five basis points.", options: ["They hiked by twenty-five basis points.", "They hiked by twenty-five basic points.", "They liked by twenty-five basis points."], answer: 0 },
        { type: "speak", phrase: "The yield curve inverted last month.", hint: "Stress 'inverted'." },
        { type: "choice", q: "When bond prices go up, yields...", options: ["go down", "go up", "stay the same"], answer: 0 },
      ]},
      { id: "u3l3", title: "Central Bank Speak", cards: [
        { type: "teach", term: "To hike / cut / hold", meaning: "What a central bank does to interest rates: raise, lower, or keep them.", example: "The Fed held rates steady." },
        { type: "teach", term: "Hawkish / Dovish", meaning: "Hawkish = leaning toward higher rates to fight inflation. Dovish = leaning toward lower rates to support growth.", example: "The tone was surprisingly hawkish." },
        { type: "teach", term: "Tightening / Easing", meaning: "Tightening = making money more expensive. Easing = making it cheaper.", example: "We're in a tightening cycle." },
        { type: "choice", q: "A 'hawkish' central banker tends to favor...", options: ["higher interest rates", "lower interest rates", "no change ever"], answer: 0 },
        { type: "speak", phrase: "The tone was surprisingly hawkish today.", hint: "'Hawkish' — two syllables, sharp." },
        { type: "listen", audio: "We're in a tightening cycle now.", options: ["We're in a tightening cycle now.", "We're in a tightening circle now.", "We're in a frightening cycle now."], answer: 0 },
        { type: "build", target: "The Fed held rates steady today.", words: ["rates", "The", "held", "steady", "Fed", "today"] },
      ]},
    ],
  },

  /* ============== U4 — ACCOUNTING & VALUATION ============== */
  {
    id: "u4", track: "market", title: "Accounting & Valuation", level: "Intermediate+",
    blurb: "EBITDA, multiples, and the metrics analysts live by.",
    lessons: [
      { id: "u4l1", title: "The Statements", cards: [
        { type: "teach", term: "Balance sheet", meaning: "A snapshot of what a company owns (assets) and owes (liabilities) at one point in time.", example: "Their balance sheet is rock solid." },
        { type: "teach", term: "Income statement (P&L)", meaning: "Shows revenue, costs, and profit over a period. Also called the P&L.", example: "Walk me through the P&L." },
        { type: "teach", term: "Cash flow", meaning: "The actual money moving in and out. 'Cash is king' because profit on paper isn't the same as cash.", example: "Free cash flow turned positive." },
        { type: "listen", audio: "Walk me through the P and L.", options: ["Walk me through the P and L.", "Work me through the P and L.", "Walk me through the P and O."], answer: 0 },
        { type: "speak", phrase: "Their balance sheet is rock solid.", hint: "Idiom: 'rock solid' = very strong." },
        { type: "choice", q: "A balance sheet shows a company's assets and...", options: ["liabilities", "revenue only", "share price"], answer: 0 },
      ]},
      { id: "u4l2", title: "EBITDA & Margins", cards: [
        { type: "teach", term: "EBITDA", meaning: "Earnings Before Interest, Taxes, Depreciation & Amortization — a proxy for core operating profit. Say it 'ee-bit-dah'.", example: "What's their EBITDA margin?" },
        { type: "teach", term: "Margin", meaning: "Profit as a percentage of revenue. Higher margin = more profit per dollar of sales.", example: "Margins are getting squeezed." },
        { type: "teach", term: "To be squeezed", meaning: "When rising costs or falling prices shrink your profit.", example: "Their margins got squeezed by inflation." },
        { type: "fill", sentence: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation and ___.", answer: "amortization", accept: ["amortization", "amortisation"] },
        { type: "speak", phrase: "Their EBITDA margin is getting squeezed.", hint: "Say EBITDA as 'ee-bit-dah'." },
        { type: "listen", audio: "What's their EBITDA margin?", options: ["What's their EBITDA margin?", "What's their EBITDA bargain?", "What's their EBITDA margins?"], answer: 0 },
      ]},
      { id: "u4l3", title: "Valuation & Multiples", cards: [
        { type: "teach", term: "Valuation", meaning: "An estimate of what a company or asset is worth.", example: "The valuation looks rich to me." },
        { type: "teach", term: "Multiple", meaning: "A ratio used to value a company, like EV/EBITDA or P/E. 'Trading at 10x' = ten times earnings.", example: "It's trading at 12 times earnings." },
        { type: "teach", term: "Rich / Cheap", meaning: "Slang: 'rich' = expensive relative to fundamentals; 'cheap' = a bargain.", example: "That multiple looks rich." },
        { type: "teach", term: "DCF", meaning: "Discounted Cash Flow — valuing a company by projecting future cash and discounting it to today.", example: "Run a DCF to sanity-check the price." },
        { type: "choice", q: "A stock 'trading at 12x earnings' means its price is...", options: ["12 times its earnings", "earning 12% a year", "worth 12 dollars"], answer: 0 },
        { type: "speak", phrase: "The valuation looks rich at twelve times earnings.", hint: "'12x' = 'twelve times'." },
        { type: "listen", audio: "Run a DCF to sanity-check the price.", options: ["Run a DCF to sanity-check the price.", "Run a DCF to sanity-check the prize.", "Run a DCF to vanity-check the price."], answer: 0 },
        { type: "build", target: "That multiple looks rich to me.", words: ["looks", "That", "rich", "multiple", "me", "to"] },
      ]},
    ],
  },

  /* ============== U5 — M&A, PE & VENTURE CAPITAL ============== */
  {
    id: "u5", track: "market", title: "M&A, PE & Venture Capital", level: "Advanced",
    blurb: "Deal language, term sheets, and the art of the close.",
    lessons: [
      { id: "u5l1", title: "The Deal Floor", cards: [
        { type: "teach", term: "M&A", meaning: "Mergers & Acquisitions — companies combining or one buying another.", example: "She works in M&A advisory." },
        { type: "teach", term: "Due diligence (DD)", meaning: "The deep investigation of a target before a deal closes.", example: "We're knee-deep in due diligence." },
        { type: "teach", term: "To close a deal", meaning: "To finalize and sign a transaction.", example: "We're hoping to close by quarter-end." },
        { type: "teach", term: "Synergies", meaning: "The extra value created by combining two companies — cost savings or new revenue.", example: "The deal is all about synergies." },
        { type: "listen", audio: "We're knee-deep in due diligence.", options: ["We're knee-deep in due diligence.", "We're knee-deep in due diligent.", "We're need-deep in due diligence."], answer: 0 },
        { type: "speak", phrase: "We're hoping to close the deal by quarter-end.", hint: "'Quarter-end' = end of the quarter." },
        { type: "choice", q: "'Due diligence' is the process of...", options: ["investigating a target before buying", "paying dividends on time", "diluting shares"], answer: 0 },
      ]},
      { id: "u5l2", title: "Venture Capital", cards: [
        { type: "teach", term: "Venture capital (VC)", meaning: "Money invested in early-stage, high-growth startups in exchange for equity.", example: "They raised a Series A from a VC fund." },
        { type: "teach", term: "Term sheet", meaning: "A non-binding outline of the key terms of an investment.", example: "We just signed the term sheet." },
        { type: "teach", term: "Runway", meaning: "How many months of cash a startup has before it runs out.", example: "We've got 18 months of runway." },
        { type: "teach", term: "To burn / burn rate", meaning: "How fast a startup spends cash each month.", example: "Our burn rate is too high." },
        { type: "fill", sentence: "The months of cash a startup has left is called its ___.", answer: "runway", accept: ["runway"] },
        { type: "speak", phrase: "We've got eighteen months of runway left.", hint: "Steady, like a status update." },
        { type: "listen", audio: "Our burn rate is too high.", options: ["Our burn rate is too high.", "Our burn rate is too hard.", "Our bird rate is too high."], answer: 0 },
      ]},
      { id: "u5l3", title: "Closing the Round", cards: [
        { type: "teach", term: "Pre- & post-money", meaning: "Pre-money = company value before new investment; post-money = after.", example: "What's the pre-money on this round?" },
        { type: "teach", term: "Dilution", meaning: "When new shares reduce existing owners' percentage stake.", example: "Founders worry about dilution." },
        { type: "teach", term: "To lead a round", meaning: "When one investor sets the terms and takes the biggest chunk.", example: "Sequoia led the round." },
        { type: "teach", term: "Exit", meaning: "How investors get their money out — an IPO or acquisition.", example: "They're looking for an exit." },
        { type: "choice", q: "'Dilution' happens when...", options: ["new shares shrink your ownership percentage", "the stock splits in two", "dividends are paid"], answer: 0 },
        { type: "speak", phrase: "Founders always worry about dilution.", hint: "'Dilution' — four syllables." },
        { type: "build", target: "They are looking for an exit.", words: ["looking", "They", "an", "for", "are", "exit"] },
        { type: "listen", audio: "What's the pre-money on this round?", options: ["What's the pre-money on this round?", "What's the prep money on this round?", "What's the pre-money on this rant?"], answer: 0 },
      ]},
    ],
  },

  /* ============== U6 — WEALTH & CLIENT RELATIONS ============== */
  {
    id: "u6", track: "market", title: "Wealth & Client Relations", level: "Advanced+",
    blurb: "Advisory, relationship management, and the soft-skill scripts.",
    lessons: [
      { id: "u6l1", title: "Wealth Management", cards: [
        { type: "teach", term: "Wealth management", meaning: "Advising wealthy clients on investing, taxes, and planning their assets.", example: "He moved into wealth management." },
        { type: "teach", term: "Portfolio / Allocation", meaning: "Portfolio = all your investments. Allocation = how you split them across asset types.", example: "Let's rebalance the portfolio." },
        { type: "teach", term: "Risk appetite / tolerance", meaning: "How much risk a client is willing and able to take.", example: "What's your risk appetite?" },
        { type: "teach", term: "Diversification", meaning: "Spreading money across assets so one loss won't sink you. 'Don't put all your eggs in one basket.'", example: "Diversification smooths returns." },
        { type: "listen", audio: "Let's rebalance the portfolio this quarter.", options: ["Let's rebalance the portfolio this quarter.", "Let's rebalance the portfolio this quota.", "Let's rebound the portfolio this quarter."], answer: 0 },
        { type: "speak", phrase: "What's your risk appetite for this allocation?", hint: "Warm, advisory tone." },
        { type: "choice", q: "'Don't put all your eggs in one basket' is about...", options: ["diversification", "leverage", "tax avoidance"], answer: 0 },
      ]},
      { id: "u6l2", title: "The Relationship Manager", cards: [
        { type: "teach", term: "To touch base", meaning: "To make brief contact to check in.", example: "I wanted to touch base on your portfolio." },
        { type: "teach", term: "To walk someone through", meaning: "To explain something step by step.", example: "Let me walk you through the options." },
        { type: "teach", term: "To manage expectations", meaning: "To set a realistic view so no one is disappointed.", example: "I want to manage your expectations here." },
        { type: "teach", term: "On the same page", meaning: "In agreement / sharing the same understanding.", example: "Let's make sure we're on the same page." },
        { type: "speak", phrase: "I just wanted to touch base on your portfolio.", hint: "Friendly, like a phone call opener." },
        { type: "listen", audio: "Let me walk you through the options.", options: ["Let me walk you through the options.", "Let me work you through the options.", "Let me walk you through the optics."], answer: 0 },
        { type: "build", target: "Let's make sure we are on the same page.", words: ["sure", "Let's", "we", "make", "on", "are", "the", "same", "page"] },
      ]},
      { id: "u6l3", title: "Tough Conversations", cards: [
        { type: "teach", term: "To break the news", meaning: "To deliver difficult information.", example: "I had to break the news about the loss." },
        { type: "teach", term: "To take a long-term view", meaning: "To focus on the future rather than short-term noise.", example: "Let's take a long-term view here." },
        { type: "teach", term: "To ride it out", meaning: "To stay invested through a downturn rather than panic-selling.", example: "My advice is to ride it out." },
        { type: "teach", term: "Headwind / Tailwind", meaning: "Headwind = a force working against you. Tailwind = a force helping you.", example: "Rates are a headwind for growth stocks." },
        { type: "choice", q: "A 'tailwind' is something that...", options: ["helps your performance", "hurts your performance", "has no effect"], answer: 0 },
        { type: "speak", phrase: "My advice is to take a long-term view and ride it out.", hint: "Calm, reassuring." },
        { type: "listen", audio: "Rates are a headwind for growth stocks.", options: ["Rates are a headwind for growth stocks.", "Rates are a head wind for growth stocks.", "Rates are a headwind for growth stops."], answer: 0 },
        { type: "fill", sentence: "A force that helps your performance is a ___.", answer: "tailwind", accept: ["tailwind"] },
      ]},
    ],
  },

  /* ===================== U7 — DERIVATIVES & OPTIONS ===================== */
  {
    id: "u7", track: "market", title: "Derivatives & Options", level: "Advanced",
    blurb: "Calls, puts, hedging, and the Greeks — in plain trader English.",
    lessons: [
      { id: "u7l1", title: "Calls & Puts", cards: [
        { type: "teach", term: "Option", meaning: "A contract giving the right (not the obligation) to buy or sell an asset at a set price.", example: "She bought options on the index." },
        { type: "teach", term: "Call / Put", meaning: "Call = right to buy. Put = right to sell. Buy calls if you're bullish, puts if you're bearish.", example: "I picked up some calls before earnings." },
        { type: "teach", term: "Strike price", meaning: "The fixed price at which the option can be exercised.", example: "The strike is fifty dollars." },
        { type: "teach", term: "In / out of the money", meaning: "In the money = the option has value if exercised now. Out of the money = it doesn't.", example: "Those calls are deep in the money." },
        { type: "choice", q: "You buy a 'put' when you expect the price to...", options: ["fall", "rise", "stay flat"], answer: 0 },
        { type: "listen", audio: "I picked up some calls before earnings.", options: ["I picked up some calls before earnings.", "I picked up some calls before earring.", "I picked up some called before earnings."], answer: 0 },
        { type: "speak", phrase: "Those calls are deep in the money.", hint: "'Deep in the money' as one idea." },
      ]},
      { id: "u7l2", title: "Hedging & Leverage", cards: [
        { type: "teach", term: "To hedge", meaning: "To open a position that offsets risk in another — like insurance for your portfolio.", example: "We hedged our exposure with puts." },
        { type: "teach", term: "Leverage / Gearing", meaning: "Using borrowed money to amplify returns — and losses.", example: "That fund runs a lot of leverage." },
        { type: "teach", term: "Margin call", meaning: "A demand to add cash when a leveraged position moves against you.", example: "He got a margin call overnight." },
        { type: "teach", term: "To blow up", meaning: "Slang: to suffer catastrophic losses, often from too much leverage.", example: "The fund blew up in a week." },
        { type: "fill", sentence: "Using borrowed money to amplify returns is called ___.", answer: "leverage", accept: ["leverage", "gearing"] },
        { type: "speak", phrase: "We hedged our exposure with puts.", hint: "'Hedged' — past tense." },
        { type: "listen", audio: "He got a margin call overnight.", options: ["He got a margin call overnight.", "He got a margin call over night.", "He got a margin called overnight."], answer: 0 },
        { type: "build", target: "The fund blew up in a week.", words: ["up", "The", "blew", "fund", "a", "in", "week"] },
      ]},
      { id: "u7l3", title: "The Greeks & Expiry", cards: [
        { type: "teach", term: "The Greeks", meaning: "Risk measures for options — Delta, Gamma, Theta, Vega. They describe how the price reacts.", example: "Watch your Greeks into expiry." },
        { type: "teach", term: "Theta / time decay", meaning: "Options lose value as expiry approaches — that erosion is theta.", example: "Theta is eating these options alive." },
        { type: "teach", term: "Expiry / expiration", meaning: "The date the option contract ends.", example: "Everything expires on Friday." },
        { type: "teach", term: "To roll a position", meaning: "To close an expiring option and open a similar one further out.", example: "Let's roll the calls to next month." },
        { type: "choice", q: "'Time decay' (theta) means an option...", options: ["loses value as expiry nears", "gains value over time", "never changes price"], answer: 0 },
        { type: "speak", phrase: "Theta is eating these options alive.", hint: "Say 'theta' as 'thay-ta'." },
        { type: "listen", audio: "Let's roll the calls to next month.", options: ["Let's roll the calls to next month.", "Let's roll the calls to next month's.", "Let's role the calls to next month."], answer: 0 },
      ]},
    ],
  },

  /* ===================== U8 — FX & GLOBAL MACRO ===================== */
  {
    id: "u8", track: "market", title: "FX & Global Macro", level: "Advanced",
    blurb: "Currencies, pairs, and the big-picture talk.",
    lessons: [
      { id: "u8l1", title: "Currency Pairs", cards: [
        { type: "teach", term: "FX / forex", meaning: "The foreign exchange market — trading one currency for another.", example: "She trades on the FX desk." },
        { type: "teach", term: "Pair", meaning: "Currencies are quoted in pairs, like EUR/USD ('euro-dollar').", example: "Euro-dollar is on the move." },
        { type: "teach", term: "To strengthen / weaken", meaning: "A currency strengthens when it buys more of another; weakens when it buys less.", example: "The dollar strengthened on the data." },
        { type: "teach", term: "Pip", meaning: "The smallest standard price move in a currency pair.", example: "It moved fifty pips in minutes." },
        { type: "choice", q: "If 'the dollar strengthened', one dollar now buys...", options: ["more of other currencies", "less of other currencies", "the same amount"], answer: 0 },
        { type: "listen", audio: "The dollar strengthened on the data.", options: ["The dollar strengthened on the data.", "The dollar strengthened on the dato.", "The dollar lengthened on the data."], answer: 0 },
        { type: "speak", phrase: "Euro-dollar is on the move today.", hint: "'Euro-dollar' = EUR/USD." },
      ]},
      { id: "u8l2", title: "Macro Talk", cards: [
        { type: "teach", term: "Macro", meaning: "The big economic picture — growth, inflation, rates, and policy.", example: "The macro backdrop is shaky." },
        { type: "teach", term: "Risk-on / Risk-off", meaning: "Risk-on = investors chase returns. Risk-off = they flee to safety.", example: "It's a risk-off day." },
        { type: "teach", term: "Safe haven", meaning: "An asset investors buy in turmoil — like gold, the dollar, or Treasuries.", example: "Gold caught a safe-haven bid." },
        { type: "teach", term: "To pile into", meaning: "When many investors rush into the same asset.", example: "Everyone piled into Treasuries." },
        { type: "fill", sentence: "A day when investors flee to safety is a ___-off day.", answer: "risk", accept: ["risk"] },
        { type: "speak", phrase: "Gold caught a safe-haven bid today.", hint: "'Caught a bid' = attracted buyers." },
        { type: "listen", audio: "The macro backdrop is shaky.", options: ["The macro backdrop is shaky.", "The macro backdrop is shaking.", "The micro backdrop is shaky."], answer: 0 },
        { type: "build", target: "Everyone piled into Treasuries today.", words: ["into", "Everyone", "Treasuries", "piled", "today"] },
      ]},
    ],
  },

  /* ===================== U9 — IPOs & CAPITAL MARKETS ===================== */
  {
    id: "u9", track: "market", title: "IPOs & Capital Markets", level: "Advanced+",
    blurb: "Going public, roadshows, and the syndicate desk.",
    lessons: [
      { id: "u9l1", title: "Going Public", cards: [
        { type: "teach", term: "IPO", meaning: "Initial Public Offering — the first time a company sells shares to the public.", example: "The IPO priced above the range." },
        { type: "teach", term: "To go public / list", meaning: "To become a publicly traded company on an exchange.", example: "They're going public next month." },
        { type: "teach", term: "Roadshow", meaning: "A tour where management pitches the company to big investors before the IPO.", example: "The roadshow kicks off Monday." },
        { type: "teach", term: "Bookbuilding", meaning: "Collecting investor orders to set the final price and allocation.", example: "The book is multiple times covered." },
        { type: "choice", q: "A 'roadshow' is when management...", options: ["pitches investors before an IPO", "audits the books", "pays a dividend"], answer: 0 },
        { type: "listen", audio: "The IPO priced above the range.", options: ["The IPO priced above the range.", "The IPO priced above the rage.", "The IPO priced above the orange."], answer: 0 },
        { type: "speak", phrase: "The roadshow kicks off Monday.", hint: "'Kicks off' = begins." },
      ]},
      { id: "u9l2", title: "Pricing the Deal", cards: [
        { type: "teach", term: "Underwriter", meaning: "The bank that manages the offering and helps sell the shares.", example: "Goldman is the lead underwriter." },
        { type: "teach", term: "Oversubscribed", meaning: "When demand for shares exceeds the amount available.", example: "The deal was heavily oversubscribed." },
        { type: "teach", term: "To pop / to price", meaning: "Pop = a big first-day jump. Price = set the final offer price.", example: "The stock popped 40% on day one." },
        { type: "teach", term: "Lock-up period", meaning: "Time after an IPO when insiders can't sell their shares.", example: "The lock-up expires in 180 days." },
        { type: "fill", sentence: "When demand exceeds supply, a deal is ___.", answer: "oversubscribed", accept: ["oversubscribed"] },
        { type: "speak", phrase: "The stock popped forty percent on day one.", hint: "Excited tone — 'popped'." },
        { type: "listen", audio: "The deal was heavily oversubscribed.", options: ["The deal was heavily oversubscribed.", "The deal was heavily over described.", "The deal was heavy oversubscribed."], answer: 0 },
        { type: "build", target: "The lock-up expires in six months.", words: ["expires", "The", "in", "lock-up", "months", "six"] },
      ]},
    ],
  },

  /* ============================================================
     ===============   TRACK 2 — FINRA EXAM PREP   ==============
     Vocabulary + content review. Educational study aid only —
     not affiliated with or endorsed by FINRA or NASAA.
     ============================================================ */

  /* ===================== F1 — SIE: FOUNDATIONS ===================== */
  {
    id: "f1", track: "finra", title: "SIE · Foundations", level: "SIE",
    blurb: "Securities Industry Essentials — the base exam for every license.",
    lessons: [
      { id: "f1l1", title: "What the SIE Is", cards: [
        { type: "concept", title: "The SIE exam", body: "The Securities Industry Essentials exam is the introductory FINRA exam. It tests basic knowledge: product types and their risks, market structure, regulators and their functions, and prohibited practices. Anyone 18 or older can take it — no employer sponsorship needed." },
        { type: "concept", title: "How it's scored", body: "The SIE has 75 scored questions plus 10 unscored pretest questions, for 85 total. You get 1 hour and 45 minutes, and you need 70% to pass. It's the base — you pair it with a 'top-off' exam like the Series 7 to register." },
        { type: "quiz", q: "What minimum score do you need to pass the SIE?", options: ["70%", "60%", "73%", "85%"], answer: 0, why: "The SIE passing score is 70% of the 75 scored questions." },
        { type: "quiz", q: "Who is eligible to sit for the SIE?", options: ["Anyone 18 or older, no sponsorship needed", "Only sponsored employees of a firm", "Only U.S. citizens", "Only college graduates"], answer: 0, why: "Unlike the qualification exams, the SIE has no sponsorship requirement and is open to anyone 18+." },
      ]},
      { id: "f1l2", title: "Exam Vocabulary", cards: [
        { type: "teach", term: "Sponsorship", meaning: "When a FINRA member firm formally backs your registration. Required for Series 7, not for the SIE.", example: "You need firm sponsorship for the top-off exam." },
        { type: "teach", term: "Corequisite", meaning: "An exam you must pass alongside another to qualify — SIE + Series 7 together.", example: "The SIE is a corequisite to the Series 7." },
        { type: "teach", term: "Prohibited practice", meaning: "Conduct the rules forbid — like insider trading or churning a client's account.", example: "Churning is a prohibited practice." },
        { type: "listen", audio: "The SIE is a corequisite to the Series 7.", options: ["The SIE is a corequisite to the Series 7.", "The SIE is a prerequisite to the Series 7.", "The SIE is a co-requisite to the Series 11."], answer: 0 },
        { type: "speak", phrase: "You need firm sponsorship for the top-off exam.", hint: "Stress 'sponsorship'." },
        { type: "fill", sentence: "An exam you must pass alongside another is a ___.", answer: "corequisite", accept: ["corequisite", "co-requisite"] },
      ]},
      { id: "f1l3", title: "Regulators", cards: [
        { type: "concept", title: "SEC vs. FINRA", body: "The SEC (Securities and Exchange Commission) is the federal government regulator — it writes and enforces securities law. FINRA is a self-regulatory organization (SRO) that oversees broker-dealers and writes industry rules under SEC supervision. The SEC sits above FINRA." },
        { type: "concept", title: "SROs and others", body: "Self-regulatory organizations include FINRA and the exchanges. The MSRB writes rules for municipal securities but does not enforce them — FINRA and the SEC handle enforcement. The SIPC protects customers if a brokerage fails, up to limits." },
        { type: "teach", term: "SRO", meaning: "Self-Regulatory Organization — an industry body, like FINRA, that polices its own members under SEC oversight.", example: "FINRA is the main SRO for broker-dealers." },
        { type: "quiz", q: "Which body is the federal government regulator that oversees FINRA?", options: ["The SEC", "The MSRB", "The SIPC", "The Federal Reserve"], answer: 0, why: "The SEC is the federal regulator; FINRA operates as an SRO under SEC oversight." },
        { type: "quiz", q: "What does SIPC do?", options: ["Protects customers if a brokerage firm fails", "Writes municipal bond rules", "Sets interest rates", "Insures bank deposits"], answer: 0, why: "SIPC protects customer assets up to limits if a member brokerage becomes insolvent. (Bank deposits are FDIC.)" },
        { type: "speak", phrase: "FINRA is a self-regulatory organization.", hint: "Say each word clearly." },
      ]},
    ],
  },

  /* ===================== F2 — SIE: PRODUCTS & RISK ===================== */
  {
    id: "f2", track: "finra", title: "SIE · Products & Risk", level: "SIE",
    blurb: "Equity, debt, packaged products, and the risks the exam loves.",
    lessons: [
      { id: "f2l1", title: "Equity vs. Debt", cards: [
        { type: "concept", title: "Equity = ownership", body: "Common stock is ownership in a company. Shareholders get voting rights and may receive dividends, but they're last in line if the company is liquidated. Preferred stock pays a fixed dividend and ranks ahead of common stock for dividends and in liquidation, but usually has no vote." },
        { type: "concept", title: "Debt = lending", body: "A bond is a loan to the issuer. Bondholders are creditors, not owners. They get fixed interest and rank ahead of all stockholders in liquidation. Priority in bankruptcy, top to bottom: secured creditors, unsecured creditors (including bondholders), then preferred stock, then common stock." },
        { type: "teach", term: "Preferred stock", meaning: "Equity that pays a fixed dividend and has priority over common stock, but typically no voting rights.", example: "Preferred ranks ahead of common in a liquidation." },
        { type: "quiz", q: "In a liquidation, who gets paid first?", options: ["Secured creditors", "Common stockholders", "Preferred stockholders", "The CEO"], answer: 0, why: "Order: secured creditors, then unsecured creditors (bondholders), then preferred stock, then common stock." },
        { type: "quiz", q: "Which security normally carries voting rights?", options: ["Common stock", "Preferred stock", "Corporate bonds", "Treasury bills"], answer: 0, why: "Common stockholders generally vote; preferred holders and creditors usually do not." },
        { type: "speak", phrase: "Preferred ranks ahead of common in a liquidation.", hint: "Stress 'ahead of'." },
      ]},
      { id: "f2l2", title: "Types of Risk", cards: [
        { type: "concept", title: "Systematic risk", body: "Systematic (market) risk affects the whole market and can't be diversified away — think recessions, war, or rate shocks. Subtypes include market risk, interest-rate risk, and inflation (purchasing-power) risk. Inflation risk especially hurts fixed-income investors." },
        { type: "concept", title: "Unsystematic risk", body: "Unsystematic (non-systematic) risk is specific to one company or sector — a product recall, a fraud, a strike. You CAN reduce it through diversification. Business risk and credit (default) risk are examples." },
        { type: "teach", term: "Interest-rate risk", meaning: "The risk that rising rates push down the price of existing bonds. Longer maturities are more sensitive.", example: "Long bonds carry the most interest-rate risk." },
        { type: "quiz", q: "Which risk can be reduced by diversification?", options: ["Unsystematic risk", "Systematic risk", "Market risk", "Inflation risk"], answer: 0, why: "Diversification reduces company-specific (unsystematic) risk, not market-wide systematic risk." },
        { type: "quiz", q: "Inflation risk is most damaging to...", options: ["Long-term fixed-income investors", "Short-term stock traders", "Gold holders", "Commodity producers"], answer: 0, why: "Fixed coupons lose purchasing power as inflation rises, hitting long-term bondholders hardest." },
        { type: "fill", sentence: "Risk that affects the whole market and can't be diversified away is called ___ risk.", answer: "systematic", accept: ["systematic", "market"] },
        { type: "listen", audio: "Long bonds carry the most interest-rate risk.", options: ["Long bonds carry the most interest-rate risk.", "Long bonds carry the most interest-free risk.", "Long bonds carry the most interest-rate list."], answer: 0 },
      ]},
      { id: "f2l3", title: "Packaged Products", cards: [
        { type: "concept", title: "Mutual funds & ETFs", body: "A mutual fund pools money and is priced once a day at NAV (net asset value). An ETF trades all day on an exchange like a stock. Open-end funds issue unlimited shares redeemed at NAV; closed-end funds issue a fixed number that trade at a market price, which can differ from NAV." },
        { type: "teach", term: "NAV", meaning: "Net Asset Value — a fund's assets minus liabilities, divided by shares outstanding.", example: "Mutual funds are priced at NAV once daily." },
        { type: "teach", term: "Open-end / Closed-end", meaning: "Open-end funds redeem at NAV with unlimited shares; closed-end funds have fixed shares trading at market price.", example: "A closed-end fund can trade at a discount to NAV." },
        { type: "quiz", q: "How often is an open-end mutual fund priced?", options: ["Once per day at NAV", "Continuously during the day", "Once per week", "Only at year-end"], answer: 0, why: "Open-end mutual funds are forward-priced once daily at NAV; ETFs trade continuously." },
        { type: "quiz", q: "Which can trade at a price different from its NAV?", options: ["A closed-end fund", "An open-end mutual fund", "A money-market fund at purchase", "A Treasury bill"], answer: 0, why: "Closed-end fund shares trade on supply and demand, so they can sit at a premium or discount to NAV." },
        { type: "speak", phrase: "Mutual funds are priced at NAV once daily.", hint: "Say 'NAV' as letters: N-A-V." },
      ]},
    ],
  },

  /* ===================== F3 — SERIES 7: GENERAL SECURITIES ===================== */
  {
    id: "f3", track: "finra", title: "Series 7 · General Securities", level: "Series 7",
    blurb: "The big top-off exam: products, options, and customer accounts.",
    lessons: [
      { id: "f3l1", title: "Series 7 Overview", cards: [
        { type: "concept", title: "What the Series 7 covers", body: "The Series 7 — the General Securities Representative exam — lets you solicit, purchase, and sell a broad range of securities: stocks, bonds, options, municipal securities, direct participation programs, investment company products, and variable contracts. You must pass the SIE first or alongside it." },
        { type: "concept", title: "Format", body: "The Series 7 has 125 scored questions, with 3 hours and 45 minutes to complete it. The passing score is 72%. It's heavier and more applied than the SIE, with many customer-recommendation and options questions." },
        { type: "quiz", q: "What's the passing score for the Series 7?", options: ["72%", "70%", "65%", "73%"], answer: 0, why: "The Series 7 requires 72% on 125 scored questions." },
        { type: "quiz", q: "The Series 7 lets a rep sell all of these EXCEPT...", options: ["Commodity futures", "Corporate bonds", "Options", "Mutual funds"], answer: 0, why: "Commodity futures are outside Series 7 scope; futures require separate registration (e.g., Series 3)." },
        { type: "speak", phrase: "You must pass the SIE before registering.", hint: "Clear and steady." },
      ]},
      { id: "f3l2", title: "Customer Accounts", cards: [
        { type: "concept", title: "Account types", body: "A cash account requires full payment for purchases. A margin account lets a customer borrow from the firm to buy securities. Discretionary accounts let the rep trade without asking each time — but only with prior written authorization. Joint accounts (JTWROS, tenants in common) share ownership." },
        { type: "teach", term: "Discretionary authority", meaning: "Written permission for a rep to choose the asset, amount, and action without the client's prior okay each trade.", example: "No discretionary trades without written authorization." },
        { type: "teach", term: "Churning", meaning: "Excessive trading in a client's account just to generate commissions. It's prohibited.", example: "Churning violates FINRA rules." },
        { type: "quiz", q: "What must a rep have before exercising discretion in an account?", options: ["Prior written authorization", "A verbal okay", "A margin agreement", "Nothing — discretion is automatic"], answer: 0, why: "Discretionary trading requires prior written authorization from the customer." },
        { type: "quiz", q: "Excessive trading to generate commissions is called...", options: ["Churning", "Hedging", "Rebalancing", "Front-running"], answer: 0, why: "Churning is excessive activity that serves the rep's commissions, not the client — strictly prohibited." },
        { type: "listen", audio: "Churning violates FINRA rules.", options: ["Churning violates FINRA rules.", "Churning violets FINRA rules.", "Turning violates FINRA rules."], answer: 0 },
        { type: "speak", phrase: "No discretionary trades without written authorization.", hint: "Firm, professional tone." },
      ]},
      { id: "f3l3", title: "Options on the 7", cards: [
        { type: "concept", title: "Options basics for the exam", body: "A call gives the holder the right to buy at the strike; a put the right to sell. The buyer pays a premium and has limited loss; the seller (writer) collects the premium and takes on the obligation. Long call = bullish; long put = bearish; covered call = own the stock and sell a call for income." },
        { type: "teach", term: "Writer", meaning: "The seller of an option, who receives the premium and takes on the obligation to deliver.", example: "The writer keeps the premium if the option expires worthless." },
        { type: "teach", term: "Covered call", meaning: "Selling a call against stock you already own — income now, capped upside.", example: "She sells covered calls for extra yield." },
        { type: "quiz", q: "The maximum loss for the BUYER of a call option is...", options: ["The premium paid", "Unlimited", "The strike price", "Zero"], answer: 0, why: "An option buyer can only lose the premium; the seller of a naked call faces unlimited risk." },
        { type: "quiz", q: "A 'covered call' writer...", options: ["owns the underlying stock", "is fully bearish", "has unlimited risk", "must buy a put too"], answer: 0, why: "Covered means the writer holds the stock, so the call obligation is covered if exercised." },
        { type: "fill", sentence: "The seller of an option is called the ___.", answer: "writer", accept: ["writer"] },
        { type: "speak", phrase: "The writer keeps the premium if it expires worthless.", hint: "'Expires worthless' as one idea." },
      ]},
    ],
  },

  /* ===================== F4 — SERIES 7: MUNIS & SUITABILITY ===================== */
  {
    id: "f4", track: "finra", title: "Series 7 · Munis & Suitability", level: "Series 7",
    blurb: "Municipal bonds, taxation, and the suitability rules examiners test.",
    lessons: [
      { id: "f4l1", title: "Municipal Bonds", cards: [
        { type: "concept", title: "GO vs. revenue bonds", body: "General Obligation (GO) bonds are backed by the issuer's taxing power and often need voter approval. Revenue bonds are backed only by income from a specific project (a toll road, a stadium). GO bonds are usually considered safer because of the broad tax backing." },
        { type: "concept", title: "Municipal tax treatment", body: "Interest from municipal bonds is generally exempt from federal income tax — and from state tax too if you live in the issuing state ('triple tax-free' if also local-exempt). This makes the tax-equivalent yield attractive to high-bracket investors." },
        { type: "teach", term: "Tax-equivalent yield", meaning: "The yield a taxable bond would need to match a muni's tax-free yield for a given investor.", example: "For high earners, the tax-equivalent yield is compelling." },
        { type: "quiz", q: "A General Obligation bond is backed by...", options: ["The issuer's taxing power", "A single project's revenue", "Corporate profits", "The federal government"], answer: 0, why: "GO bonds rely on the municipality's full faith, credit, and taxing power." },
        { type: "quiz", q: "Municipal bond interest is generally exempt from...", options: ["Federal income tax", "All taxes always", "Capital gains on resale", "Estate tax"], answer: 0, why: "Muni interest is typically federally tax-exempt; capital gains on a sale are still taxable." },
        { type: "speak", phrase: "Municipal interest is generally federally tax-exempt.", hint: "Stress 'tax-exempt'." },
      ]},
      { id: "f4l2", title: "Suitability & Reg BI", cards: [
        { type: "concept", title: "Know Your Customer", body: "FINRA Rule 2111 (suitability) and the SEC's Regulation Best Interest (Reg BI) require recommendations to fit the customer's profile: financial situation, objectives, risk tolerance, time horizon, and needs. Reg BI raised the standard — reps must act in the customer's best interest, not just make 'suitable' trades." },
        { type: "teach", term: "Reg BI", meaning: "Regulation Best Interest — reps must put the customer's interest ahead of their own when recommending.", example: "Reg BI raised the bar above plain suitability." },
        { type: "teach", term: "Investment profile", meaning: "The full picture of a customer used to judge suitability: goals, risk tolerance, horizon, income, and net worth.", example: "Update the investment profile before recommending." },
        { type: "quiz", q: "Regulation Best Interest requires a rep to...", options: ["Act in the customer's best interest", "Maximize firm commissions", "Recommend only proprietary funds", "Avoid all risk"], answer: 0, why: "Reg BI obliges reps to place the retail customer's interest ahead of their own financial interest." },
        { type: "quiz", q: "Which is NOT part of a customer's investment profile?", options: ["The rep's commission target", "Risk tolerance", "Time horizon", "Financial objectives"], answer: 0, why: "The profile is about the customer — goals, risk, horizon, finances — not the rep's compensation." },
        { type: "listen", audio: "Reg BI raised the bar above plain suitability.", options: ["Reg BI raised the bar above plain suitability.", "Reg BI raised the bar above plane suitability.", "Reg B raised the bar above plain suitability."], answer: 0 },
        { type: "build", target: "Always act in the customer's best interest.", words: ["in", "Always", "the", "act", "best", "customer's", "interest"] },
      ]},
    ],
  },

  /* ===================== F5 — SERIES 63: STATE LAW ===================== */
  {
    id: "f5", track: "finra", title: "Series 63 · State Law", level: "Series 63",
    blurb: "The NASAA Uniform Securities Act exam — agents and state registration.",
    lessons: [
      { id: "f5l1", title: "Series 63 Overview", cards: [
        { type: "concept", title: "What the 63 is", body: "The Series 63 — the Uniform Securities Agent State Law Exam — is a NASAA exam administered by FINRA. It covers state-level rules under the Uniform Securities Act: registration of agents and securities, and ethical practices. It's required to do business as an agent within a state." },
        { type: "concept", title: "Format", body: "The Series 63 has 60 scored questions plus 5 unscored, 65 total, with 75 minutes. You need 43 of 60 correct — about 72% — to pass. It's closed-book and focuses heavily on ethics and anti-fraud provisions." },
        { type: "quiz", q: "How many scored questions must you answer correctly to pass the Series 63?", options: ["43 of 60", "30 of 60", "50 of 65", "60 of 65"], answer: 0, why: "You need 43 of the 60 scored questions correct (about 72%)." },
        { type: "quiz", q: "The Series 63 is based on which body of law?", options: ["The Uniform Securities Act", "The Securities Act of 1933", "The Sarbanes-Oxley Act", "The Dodd-Frank Act"], answer: 0, why: "The 63 tests NASAA's Uniform Securities Act — state ('blue-sky') law." },
        { type: "speak", phrase: "The Series 63 covers state securities law.", hint: "Steady and clear." },
      ]},
      { id: "f5l2", title: "Registration & Definitions", cards: [
        { type: "concept", title: "Who must register", body: "Under the Act, an 'agent' is an individual who represents a broker-dealer or issuer in selling securities, and generally must register in each state where they do business. The 'Administrator' is the state securities regulator with authority to register, investigate, and discipline." },
        { type: "teach", term: "Administrator", meaning: "The state official or agency that enforces the Uniform Securities Act in that state.", example: "The Administrator can revoke a registration." },
        { type: "teach", term: "Agent", meaning: "An individual representing a broker-dealer or issuer in securities transactions; must usually register by state.", example: "An agent registers in every state they solicit in." },
        { type: "teach", term: "Blue-sky laws", meaning: "Nickname for state securities laws, aimed at protecting investors from fraud.", example: "Blue-sky laws vary state by state." },
        { type: "quiz", q: "Under the Uniform Securities Act, the 'Administrator' is...", options: ["The state securities regulator", "The SEC chairman", "A FINRA examiner", "The issuer's CEO"], answer: 0, why: "The Administrator is the state-level regulator empowered to register and discipline." },
        { type: "fill", sentence: "State securities laws are nicknamed ___-sky laws.", answer: "blue", accept: ["blue"] },
        { type: "listen", audio: "The Administrator can revoke a registration.", options: ["The Administrator can revoke a registration.", "The Administrator can revoke a registry.", "The Administrator can invoke a registration."], answer: 0 },
      ]},
      { id: "f5l3", title: "Ethics & Prohibited Acts", cards: [
        { type: "concept", title: "Anti-fraud core", body: "The Act broadly prohibits fraud, deceit, and manipulation in connection with securities. Common prohibited acts: making untrue statements or omitting material facts, guaranteeing against loss, commingling customer funds with the firm's, and unauthorized trading in a customer account." },
        { type: "teach", term: "Commingling", meaning: "Improperly mixing customer funds or securities with the firm's own — prohibited.", example: "Commingling client and firm assets is a violation." },
        { type: "teach", term: "Material fact", meaning: "Information a reasonable investor would consider important in making a decision.", example: "Omitting a material fact is fraud." },
        { type: "quiz", q: "Which is a prohibited practice under the Act?", options: ["Guaranteeing a customer against loss", "Disclosing all material facts", "Registering in each state", "Recommending suitable investments"], answer: 0, why: "Guaranteeing against loss is prohibited — returns can't be promised." },
        { type: "quiz", q: "'Commingling' refers to...", options: ["Mixing customer and firm funds improperly", "Combining two mutual funds", "Merging two firms", "Pooling diversified assets"], answer: 0, why: "Commingling improperly blends client assets with the firm's own and is forbidden." },
        { type: "speak", phrase: "Omitting a material fact is fraud.", hint: "Stress 'material'." },
        { type: "build", target: "You cannot guarantee a customer against loss.", words: ["guarantee", "You", "a", "cannot", "against", "customer", "loss"] },
      ]},
    ],
  },

  /* ===================== F6 — SERIES 65: INVESTMENT ADVISER ===================== */
  {
    id: "f6", track: "finra", title: "Series 65 · Investment Adviser", level: "Series 65",
    blurb: "The NASAA IAR exam — advice, fiduciary duty, and analysis.",
    lessons: [
      { id: "f6l1", title: "Series 65 Overview", cards: [
        { type: "concept", title: "What the 65 is", body: "The Series 65 — the Uniform Investment Adviser Law Exam — qualifies you as an Investment Adviser Representative (IAR). Unlike the 63, you don't need the Series 7 first; the 65 stands alone. It covers economics, investment vehicles, recommendations, and laws and regulations around advice." },
        { type: "concept", title: "Format", body: "The Series 65 has 130 scored questions plus 10 pretest, 140 total, with about 3 hours. You need 94 of 130 correct — roughly 72% — to pass. It leans into analysis, ethics, and the fiduciary standard." },
        { type: "quiz", q: "Passing the Series 65 qualifies you as a(n)...", options: ["Investment Adviser Representative", "General Securities Rep", "Municipal Principal", "Futures broker"], answer: 0, why: "The 65 qualifies an IAR — someone who gives investment advice for compensation." },
        { type: "quiz", q: "Does the Series 65 require passing the Series 7 first?", options: ["No, it stands alone", "Yes, always", "Only in some states", "Yes, plus the 63"], answer: 0, why: "The 65 is standalone; the 66 is the one that requires the Series 7 as a corequisite." },
        { type: "speak", phrase: "The Series 65 qualifies an investment adviser representative.", hint: "Long phrase — pace yourself." },
      ]},
      { id: "f6l2", title: "Fiduciary Duty", cards: [
        { type: "concept", title: "The fiduciary standard", body: "An investment adviser owes a fiduciary duty — the highest legal standard of care. It has two parts: a duty of loyalty (put the client first, disclose conflicts) and a duty of care (give advice that's in the client's best interest based on their objectives). This is stricter than the broker's Reg BI standard." },
        { type: "teach", term: "Fiduciary", meaning: "Someone legally bound to act in another's best interest, with loyalty and care.", example: "An adviser acts as a fiduciary." },
        { type: "teach", term: "Conflict of interest", meaning: "A situation where the adviser's interest could clash with the client's. It must be disclosed.", example: "Disclose every conflict of interest." },
        { type: "quiz", q: "The fiduciary duty includes a duty of loyalty and a duty of...", options: ["Care", "Secrecy", "Profit", "Speed"], answer: 0, why: "Fiduciary duty = loyalty (client first, disclose conflicts) + care (suitable, best-interest advice)." },
        { type: "quiz", q: "An adviser with a conflict of interest must...", options: ["Disclose it to the client", "Hide it", "Resign immediately", "Charge a higher fee"], answer: 0, why: "Conflicts don't always bar action, but they must be fully and fairly disclosed." },
        { type: "fill", sentence: "An adviser owes the client a ___ duty — the highest standard of care.", answer: "fiduciary", accept: ["fiduciary"] },
        { type: "listen", audio: "An adviser acts as a fiduciary.", options: ["An adviser acts as a fiduciary.", "An advisor asks as a fiduciary.", "An adviser acts as a beneficiary."], answer: 0 },
      ]},
      { id: "f6l3", title: "Advice Vocabulary", cards: [
        { type: "teach", term: "Discretion (advisory)", meaning: "Authority to manage a client's account and make trades within the agreed mandate.", example: "She manages the account on a discretionary basis." },
        { type: "teach", term: "AUM", meaning: "Assets Under Management — the total client money an adviser manages. Often sets the fee.", example: "The firm charges 1% of AUM." },
        { type: "teach", term: "Wrap fee", meaning: "A single bundled fee covering advice, trading, and management instead of separate commissions.", example: "It's a wrap-fee account." },
        { type: "speak", phrase: "The firm charges one percent of AUM.", hint: "Say 'AUM' as letters." },
        { type: "listen", audio: "She manages the account on a discretionary basis.", options: ["She manages the account on a discretionary basis.", "She manages the account on a discretion basis.", "She manages the account on a discretionary base."], answer: 0 },
        { type: "choice", q: "'AUM' stands for...", options: ["Assets Under Management", "Average Unit Margin", "Annual Updated Mandate", "Adviser Universal Metric"], answer: 0 },
      ]},
    ],
  },

  /* ===================== F7 — SERIES 66: COMBINED ===================== */
  {
    id: "f7", track: "finra", title: "Series 66 · Combined Law", level: "Series 66",
    blurb: "The 63 + 65 combined — pairs with the Series 7.",
    lessons: [
      { id: "f7l1", title: "Series 66 Overview", cards: [
        { type: "concept", title: "What the 66 is", body: "The Series 66 combines the Series 63 and 65 into one exam — covering both state agent law and investment adviser law. It's designed for people who already hold (or will hold) the Series 7. The 7 is a corequisite: you take both, in either order, before registering with a state." },
        { type: "concept", title: "Format", body: "The Series 66 has 100 scored questions plus 10 pretest, 110 total, with 2.5 hours. You need 73 of 100 correct to pass. Because it assumes Series 7 knowledge, it spends less time on product mechanics and more on law, ethics, and adviser duties." },
        { type: "quiz", q: "The Series 66 has which corequisite?", options: ["The Series 7", "The Series 63", "The Series 65", "None"], answer: 0, why: "The Series 7 must be completed alongside the 66 before state registration." },
        { type: "quiz", q: "How many correct answers pass the Series 66?", options: ["73 of 100", "43 of 60", "94 of 130", "90 of 100"], answer: 0, why: "You need 73 of 100 scored questions correct to pass the 66." },
        { type: "speak", phrase: "The Series 66 combines the sixty-three and sixty-five.", hint: "Numbers clearly: 'sixty-three', 'sixty-five'." },
      ]},
      { id: "f7l2", title: "Which Exam Do I Need?", cards: [
        { type: "concept", title: "Putting it together", body: "Quick map: SIE is the base. Add the Series 7 to sell broad securities as a registered rep. To work as an agent in a state, add the 63. To act as an investment adviser rep, take the 65 (standalone) or the 66 (with the Series 7). The 66 equals 63 plus 65 in one sitting, for Series 7 holders." },
        { type: "quiz", q: "Someone with a Series 7 who wants both agent and adviser registration would most efficiently take the...", options: ["Series 66", "Series 63 only", "Series 65 only", "SIE again"], answer: 0, why: "The 66 covers both the 63 and 65 material in one exam for Series 7 holders." },
        { type: "quiz", q: "Which exam does NOT require a corequisite?", options: ["Series 65", "Series 66", "Series 7 top-off", "Series 63"], answer: 0, why: "The Series 65 stands alone — no Series 7 needed — making it common for standalone advisers." },
        { type: "teach", term: "Corequisite (recap)", meaning: "An exam taken alongside another to qualify — the 7 with the 66, the SIE with the 7.", example: "The 7 is a corequisite for the 66." },
        { type: "build", target: "The Series 66 pairs with the Series 7.", words: ["with", "The", "Series", "66", "pairs", "the", "Series", "7"] },
        { type: "speak", phrase: "The sixty-five stands alone with no corequisite.", hint: "Confident summary tone." },
      ]},
    ],
  },
];
