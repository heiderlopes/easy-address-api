const express = require("express");
const {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
} = require("../controllers/address.controller");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - nomeUsuario
 *         - cep
 *         - logradouro
 *         - bairro
 *         - cidade
 *         - uf
 *         - tipo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do endereço gerado automaticamente
 *         nomeUsuario:
 *           type: string
 *           description: Nome do usuário dono do endereço
 *         cep:
 *           type: string
 *           description: CEP do endereço
 *         logradouro:
 *           type: string
 *           description: Rua ou avenida
 *         bairro:
 *           type: string
 *           description: Bairro
 *         cidade:
 *           type: string
 *           description: Cidade
 *         uf:
 *           type: string
 *           description: "Unidade federativa (ex: SP, RJ)"
 *         tipo:
 *           type: string
 *           description: Tipo do endereço (residencial, comercial, etc)
 *       example:
 *         id: 1
 *         nomeUsuario: "João Silva"
 *         cep: "01001-000"
 *         logradouro: "Praça da Sé"
 *         bairro: "Sé"
 *         cidade: "São Paulo"
 *         uf: "SP"
 *         tipo: "residencial"
 */

/**
 * @swagger
 * /addresses:
 *   get:
 *     summary: Retorna todos os endereços
 *     tags: [Addresses]
 *     responses:
 *       200:
 *         description: Lista de endereços
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 */
router.get("/", getAllAddresses);

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     summary: Retorna um endereço pelo ID
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do endereço
 *     responses:
 *       200:
 *         description: Endereço encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Endereço não encontrado
 */
router.get("/:id", getAddressById);

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 */
router.post("/", createAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   put:
 *     summary: Atualiza um endereço
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do endereço a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Endereço não encontrado
 */
router.put("/:id", updateAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Remove um endereço
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do endereço a ser removido
 *     responses:
 *       200:
 *         description: Endereço removido com sucesso
 *       404:
 *         description: Endereço não encontrado
 */
router.delete("/:id", deleteAddress);

module.exports = router;
