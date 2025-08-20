const express = require("express");
const { getCep } = require("../controllers/cep.controller");
const router = express.Router();

/**
 * @swagger
 * /cep/{cep}:
 *   get:
 *     summary: Consulta informações de um CEP na API ViaCEP
 *     parameters:
 *       - in: path
 *         name: cep
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do CEP
 */
router.get("/:cep", getCep);

module.exports = router;
