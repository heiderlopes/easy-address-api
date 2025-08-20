let addresses = [];
let idCounter = 1;

class Address {
  constructor({ nomeUsuario, cep, logradouro, bairro, cidade, uf, tipo }) {
    this.id = idCounter++;
    this.nomeUsuario = nomeUsuario;
    this.cep = cep;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade; // mudado de localidade
    this.uf = uf;
    this.tipo = tipo;
  }
}

module.exports = { Address, addresses };
