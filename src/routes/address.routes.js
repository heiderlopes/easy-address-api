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
 * /addresses:
 *   get:
 *     summary: Retorna todos os endereços
 */
router.get("/", getAllAddresses);

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     summary: Retorna um endereço pelo ID
 */
router.get("/:id", getAddressById);

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Cria um novo endereço
 */
router.post("/", createAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   put:
 *     summary: Atualiza um endereço
 */
router.put("/:id", updateAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Remove um endereço
 */
router.delete("/:id", deleteAddress);

module.exports = router;
