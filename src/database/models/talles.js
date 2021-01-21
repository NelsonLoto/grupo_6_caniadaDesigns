const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_talle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_talle"
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre"
    }
  };
  const options = {
    tableName: "talles",
    comment: "",
    indexes: []
  };
  const TallesModel = sequelize.define("talles_model", attributes, options);
  return TallesModel;
};