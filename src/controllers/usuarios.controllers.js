const { Cliente } = require("../db");

const obtenerUsuarios = async (req, res) => {
  const { status } = req.params;
  try {
    if (status !== undefined) {
      let clientes = await Cliente.findAll({ where: { estado: status } });
      res.json(clientes);
    } else {
      let clientes = await Cliente.findAll();
      res.json(clientes);
    }
  } catch (err) {
    console.error(err);
  }
};

const crearUsuario = async (req, res) => {
  const {
    documentoIdentidad,
    nombre,
    apellido,
    direccion,
    fechaDeNacimiento,
    correoElectronico,
    telefonosCelulares,
    empresa,
    nit,
  } = req.body;

  try {
    let nuevoCliente = await Cliente.create({
      documentoIdentidad,
      nombre,
      apellido,
      direccion,
      fechaDeNacimiento,
      correoElectronico,
      telefonosCelulares,
      empresa,
      nit,
    });
    res.json(nuevoCliente);
  } catch (err) {
    console.error(err);
  }
};

const editarUsuario = async (req, res) => {
  const {
    documentoIdentidad,
    nombre,
    apellido,
    direccion,
    fechaDeNacimiento,
    correoElectronico,
    telefonosCelulares,
    empresa,
    nit,
  } = req.body;

  const { id } = req.params;

  try {
    await Cliente.update(
      {
        documentoIdentidad,
        nombre,
        apellido,
        direccion,
        fechaDeNacimiento,
        correoElectronico,
        telefonosCelulares,
        empresa,
        nit
      },
      { where: { id: id } }
    );
    res.json("update");
  } catch (err) {
    console.error(err);
  }
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const { estado } = await Cliente.findOne({ where: { id: id } });
    if (estado) {
      await Cliente.update({ estado: false }, { where: { id: id } });
      return res.json("cambio el estado a falso");
    } else {
      await Cliente.update({ estado: true }, { where: { id: id } });
      return res.json("cambio el estado a verdadero");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
