const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_color: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_color"
    },
    nombre_color: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_color"
    }
  };
  const options = {
    tableName: "colores",
    comment: "",
    indexes: []
  };
  const ColoresModel = sequelize.define("colores_model", attributes, options);
  return ColoresModel;
};