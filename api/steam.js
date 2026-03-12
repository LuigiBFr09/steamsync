const https = require('https');

const ALLOWED_ENDPOINTS = [
  'ISteamUser/GetPlayerSummaries/v2',
  'ISteamUser/ResolveVanityURL/v1',
  'IPlayerService/GetOwnedGames/v1',
  'ISteamUser/GetFriendList/v1',
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { endpoint, ...params } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: 'Parâmetro "endpoint" obrigatório.' });
  }

  if (!ALLOWED_ENDPOINTS.includes(endpoint)) {
    return res.status(403).json({ error: 'Endpoint não permitido.' });
  }

  // Usa a chave da variável de ambiente do Vercel se não vier do cliente
  const key = params.key || process.env.STEAM_API_KEY;
  if (!key) {
    return res.status(400).json({ error: 'Chave de API não fornecida.' });
  }

  const qs = new URLSearchParams({ ...params, key, format: 'json' }).toString();
  const url = `https://api.steampowered.com/${endpoint}?${qs}`;

  try {
    const data = await new Promise((resolve, reject) => {
      https.get(url, (steamRes) => {
        let body = '';
        steamRes.on('data', chunk => body += chunk);
        steamRes.on('end', () => {
          try { resolve({ status: steamRes.statusCode, body }); }
          catch (e) { reject(e); }
        });
      }).on('error', reject);
    });

    res.status(data.status)
      .setHeader('Content-Type', 'application/json')
      .send(data.body);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao contactar API Steam: ' + err.message });
  }
};
