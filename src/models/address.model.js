let addresses = [];
let idCounter = 1;

class Address {
  constructor({ nomeUsuario, cep, logradouro, bairro, localidade, uf, tipo }) {
    this.id = idCounter++;
    this.nomeUsuario = nomeUsuario;
    this.cep = cep;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.tipo = tipo; // Ex: residencial, comercial
  }
}

module.exports = { Address, addresses };
