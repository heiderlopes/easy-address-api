let addresses = [];
let idCounter = 1;

class Address {
  constructor({ userName, cep, logradouro, bairro, localidade, uf, tipo }) {
    this.id = idCounter++;
    this.userName = userName;
    this.cep = cep;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
    this.tipo = tipo; // Ex: residencial, comercial
  }
}

module.exports = { Address, addresses };
