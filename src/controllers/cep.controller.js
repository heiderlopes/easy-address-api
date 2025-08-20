const axios = require("axios");

async function getCep(req, res) {
  const { cep } = req.params;
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      return res.status(404).json({ error: "CEP não encontrado" });
    }
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao consultar CEP" });
  }
}

module.exports = { getCep };
