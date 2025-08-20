const { Address, addresses } = require("../models/address.model");

function createAddress(req, res) {
  const { nomeUsuario, cep, logradouro, bairro, cidade, uf, tipo } = req.body;
  const address = new Address({
    nomeUsuario,
    cep,
    logradouro,
    bairro,
    cidade,
    uf,
    tipo,
  });
  addresses.push(address);
  res.status(201).json(address);
}

function getAllAddresses(req, res) {
  res.json(addresses);
}

function getAddressById(req, res) {
  const { id } = req.params;
  const address = addresses.find((a) => a.id == id);
  if (!address)
    return res.status(404).json({ error: "Endereço não encontrado" });
  res.json(address);
}

function updateAddress(req, res) {
  const { id } = req.params;
  const index = addresses.findIndex((a) => a.id == id);
  if (index === -1)
    return res.status(404).json({ error: "Endereço não encontrado" });

  addresses[index] = { ...addresses[index], ...req.body };
  res.json(addresses[index]);
}

function deleteAddress(req, res) {
  const { id } = req.params;
  const index = addresses.findIndex((a) => a.id == id);
  if (index === -1)
    return res.status(404).json({ error: "Endereço não encontrado" });

  addresses.splice(index, 1);
  res.json({ message: "Endereço removido com sucesso" });
}

module.exports = {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
};
