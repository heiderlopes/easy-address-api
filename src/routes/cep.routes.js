const express = require("express");
const { getCep } = require("../controllers/cep.controller");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CepAddress:
 *       type: object
 *       properties:
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
 *       example:
 *         cep: "01001-000"
 *         logradouro: "Praça da Sé"
 *         bairro: "Sé"
 *         cidade: "São Paulo"
 *         uf: "SP"
 */

/**
 * @swagger
 * /cep/{cep}:
 *   get:
 *     summary: Consulta informações de um CEP
 *     tags: [CEP]
 *     parameters:
 *       - in: path
 *         name: cep
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: CEP encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CepAddress'
 *       404:
 *         description: CEP não encontrado
 */
router.get("/:cep", getCep);

module.exports = router;
