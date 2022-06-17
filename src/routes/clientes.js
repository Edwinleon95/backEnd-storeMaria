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
router.get("/:status", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/:id", editarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;
