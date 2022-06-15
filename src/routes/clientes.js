const { Router } = require("express");
const router = Router();

//controllers usuario
const {
  obtenerUsuarios,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios.controllers");

//rutas cliente
router.get("/", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/", editarUsuario);
router.delete("/", eliminarUsuario);

module.exports = router;
