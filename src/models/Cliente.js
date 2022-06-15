const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "cliente",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      documentoIdentidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
      },
      direccion: {
        type: DataTypes.STRING,
      },
      fechaDeNacimiento: {
        type: DataTypes.DATE,
      },
      correoElectronico: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      telefonosCelulares: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
