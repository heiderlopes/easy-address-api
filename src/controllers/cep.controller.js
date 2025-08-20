const axios = require("axios");
const { Address } = require("../models/address.model"); // se quiser criar instâncias

async function getCep(req, res) {
  const { cep } = req.params;

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return res.status(404).json({ error: "CEP não encontrado" });
    }

    // Mapeando para o formato Address
    const addressData = {
      cep: response.data.cep || "",
      logradouro: response.data.logradouro || "",
      bairro: response.data.bairro || "",
      cidade: response.data.localidade || "", // map localidade para cidade
      uf: response.data.uf || "",
    };

    // Opcional: criar uma instância do Address (se quiser gerar id)
    // const address = new Address(addressData);

    return res.json(addressData);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao consultar CEP" });
  }
}

module.exports = { getCep };
