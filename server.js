# 🎮 SteamSync — Comparador de Bibliotecas Steam

Compare jogos em comum com seus amigos e receba sugestões de compra.

## ⚡ Como rodar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org) instalado (versão 16 ou superior)

### Passos

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor:**
   ```bash
   npm start
   ```

3. **Abra no navegador:**
   ```
   http://localhost:3000
   ```

4. **Configure:**
   - Obtenha sua chave de API gratuita em: https://steamcommunity.com/dev/apikey
   - Cole a chave no campo do site
   - Adicione os Steam IDs dos jogadores

---

## 🌐 Como hospedar online (Railway — gratuito)

1. Crie uma conta em [railway.app](https://railway.app)
2. Clique em **"New Project" → "Deploy from GitHub"**
3. Suba este projeto no GitHub e conecte
4. O Railway detecta o `package.json` e faz o deploy automaticamente
5. Acesse a URL gerada (ex: `steamsync.up.railway.app`)

### Alternativa: Render.com
1. Crie conta em [render.com](https://render.com)
2. **New → Web Service → conecte o repositório GitHub**
3. Build command: `npm install`
4. Start command: `npm start`
5. Deploy!

---

## 📁 Estrutura do projeto

```
steamsync/
├── server.js        ← Backend Node.js (proxy para API Steam)
├── package.json     ← Dependências
├── public/
│   └── index.html   ← Frontend completo
└── README.md
```

## ⚠️ Observações

- Os perfis Steam precisam estar **públicos**: Steam → Perfil → Editar Perfil → **Privacidade → Detalhes do jogo → Público**
- A chave de API é enviada do navegador para o seu próprio servidor — não fica exposta a terceiros
