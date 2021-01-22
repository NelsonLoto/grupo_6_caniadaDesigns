const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_permiso: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_permiso"
    },
    nombre_permiso: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_permiso"
    }
  };
  const options = {
    tableName: "permisos",
    comment: "",
    indexes: []
  };
  const PermisosModel = sequelize.define("permisos_model", attributes, options);
  return PermisosModel;
};