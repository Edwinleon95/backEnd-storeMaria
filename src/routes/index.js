const { Router } = require("express");
const clientesRouter = require("./clientes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/clientes", clientesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
