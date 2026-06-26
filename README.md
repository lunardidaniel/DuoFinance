# Duo Finance 💰

**O "Duolingo das finanças".** Aprenda o **inglês do mundo financeiro** — mercados, M&A, venture capital, bonds, EBITDA, valuation — com **prática de voz** (ouvir e falar), e estude para as **certificações FINRA** (SIE, Series 7, 63, 65, 66).

- ✅ **100% grátis** — sem API paga, sem mensalidade, sem conta
- ✅ **Funciona offline** depois de abrir uma vez
- ✅ **Instala no celular** como um app (PWA)
- ✅ **Voz nativa do navegador** — ouvir (text-to-speech) e falar (reconhecimento de fala)
- ✅ **16 unidades · 44 lições · 289 cards**

---

## 📚 O que tem dentro

**Trilha "Market English" (9 unidades)** — Money Basics, Markets & Stocks, Bonds & Rates, Accounting & Valuation, M&A/PE/VC, Wealth & Client Relations, Derivatives & Options, FX & Global Macro, IPOs & Capital Markets.

**Trilha "FINRA Prep" (7 unidades)** — vocabulário **e** revisão de conteúdo para:
- **SIE** — Securities Industry Essentials (a base)
- **Series 7** — General Securities Representative
- **Series 63** — Uniform Securities Agent State Law
- **Series 65** — Investment Adviser Law
- **Series 66** — Combined (63 + 65)

> ⚠️ **Aviso:** a trilha FINRA é um material de estudo educacional. Não é afiliada nem endossada pela FINRA ou NASAA. Detalhes das provas mudam — confirme sempre em finra.org e nasaa.org.

---

## ▶️ Como rodar AGORA (no seu computador)

A forma mais rápida de testar, **com voz funcionando**:

```bash
cd duo-finance
python3 -m http.server 8000
```

Abra **http://localhost:8000** no Chrome. Pronto. (O microfone funciona em `localhost` e em `https://`, mas **não** funciona abrindo o arquivo direto com `file://`.)

Sem Python? Com Node:
```bash
npx serve duo-finance
```

---

## 📱 Como instalar no celular

Primeiro coloque online (veja abaixo o GitHub Pages — leva 2 minutos). Depois:

- **Android (Chrome):** abra o link → menu **⋮** → **Instalar app** / **Adicionar à tela inicial**
- **iPhone (Safari):** abra o link → botão **Compartilhar** → **Adicionar à Tela de Início**

A prática de **falar** funciona melhor no **Chrome (Android)** e **Safari (iOS 14.5+)**. No Firefox o áudio funciona, mas o reconhecimento de fala entra em modo "auto-avaliação".

---

## 🚀 Publicar no GitHub Pages (grátis) — o jeito mais simples

> Eu não consigo subir na sua conta do GitHub por você (isso exigiria sua senha). Mas é rápido. Escolha **UMA** das opções:

### Opção A — Pelo site, sem terminal (mais simples)
1. Crie uma conta em **github.com** (se ainda não tem).
2. Clique em **New repository** → nome `duo-finance` → **Public** → **Create**.
3. Na página do repositório vazio, clique em **uploading an existing file**.
4. **Arraste todos os arquivos da pasta `duo-finance`** (incluindo a pasta `icons`) para a janela. Clique em **Commit changes**.
5. Vá em **Settings** → **Pages** → em "Build and deployment", **Source: Deploy from a branch** → **Branch: `main`** / **`/ (root)`** → **Save**.
6. Espere ~1 minuto e atualize. O seu app estará em:
   `https://SEU-USUARIO.github.io/duo-finance/`

### Opção B — Pelo terminal (um comando)
Já existe um script pronto. Crie o repositório vazio no GitHub (passo 2 acima), depois:

```bash
cd duo-finance
bash publish.sh https://github.com/SEU-USUARIO/duo-finance.git
```

Depois ative o Pages como no **passo 5** acima.

---

## 🛠️ Como adicionar mais conteúdo

Todo o conteúdo está em **`data.js`** — um único arquivo, fácil de editar. Cada unidade tem `lessons`, e cada lição tem `cards`. Tipos de card disponíveis:

| Tipo | Para quê |
|------|----------|
| `teach` | Ensina um termo (lê em voz alta) |
| `listen` | Toca áudio, aluno escolhe o que ouviu |
| `speak` | Aluno fala a frase (reconhecimento de voz) |
| `choice` | Múltipla escolha (gíria/compreensão) |
| `build` | Montar a frase na ordem certa |
| `fill` | Completar a lacuna |
| `concept` | Conceito de prova FINRA (lê em voz alta) |
| `quiz` | Questão de revisão com explicação (`why`) |

Copie um card existente, troque o texto, salve, recarregue. Sem build, sem compilação.

---

## 🧩 Estrutura

```
duo-finance/
├── index.html      # estrutura da página
├── style.css       # visual ("terminal de private banking")
├── data.js         # TODO o conteúdo das lições  ← edite aqui
├── app.js          # lógica + voz (Web Speech API)
├── manifest.json   # configuração de instalação (PWA)
├── sw.js           # service worker (offline)
├── icons/          # ícones do app
└── publish.sh      # script de publicação no GitHub
```

Feito com HTML, CSS e JavaScript puro. Sem frameworks, sem dependências, sem chaves de API.
