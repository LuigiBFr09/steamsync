# 🎮 SteamSync — Vercel Edition

## ⚡ Deploy no Vercel (5 minutos)

### 1. Suba para o GitHub
- Crie um repositório no [github.com](https://github.com)
- Faça upload de todos os arquivos desta pasta

### 2. Conecte ao Vercel
- Acesse [vercel.com](https://vercel.com) e faça login com GitHub
- Clique em **"Add New Project"**
- Selecione o repositório do SteamSync
- Clique em **Deploy** — sem configuração extra!

### 3. (Opcional) Variável de ambiente
Se quiser que a chave de API fique no servidor (mais seguro):
- No painel do Vercel: **Settings → Environment Variables**
- Adicione: `STEAM_API_KEY` = `sua_chave_aqui`
- Faça um novo deploy

Com a variável configurada, a chave some do frontend completamente.

---

## 🖥️ Rodar localmente

```bash
npm install -g vercel
vercel dev
```
Acesse: `http://localhost:3000`

---

## 📁 Estrutura

```
steamsync/
├── api/
│   └── steam.js       ← Serverless function (proxy Steam API)
├── public/
│   └── index.html     ← Frontend
├── vercel.json        ← Configuração de rotas
├── package.json
└── README.md
```

## ⚠️ Perfil Steam deve ser público
Steam → Perfil → Editar Perfil → Privacidade → **Detalhes do jogo → Público**
