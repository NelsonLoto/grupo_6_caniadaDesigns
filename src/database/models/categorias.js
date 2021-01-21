const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_categoria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_categoria"
    },
    nombre_categoria: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_categoria"
    }
  };
  const options = {
    tableName: "categorias",
    comment: "",
    indexes: []
  };
  const CategoriasModel = sequelize.define("categorias_model", attributes, options);
  return CategoriasModel;
};