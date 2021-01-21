const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_pais: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_pais"
    },
    nombre_pais: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_pais"
    }
  };
  const options = {
    tableName: "paises",
    comment: "",
    indexes: []
  };
  const PaisesModel = sequelize.define("paises_model", attributes, options);
  return PaisesModel;
};