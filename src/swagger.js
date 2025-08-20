const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Endereços com CEP",
      version: "1.0.0",
      description:
        "API que consulta CEP na ViaCEP e gerencia endereços de usuários",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
