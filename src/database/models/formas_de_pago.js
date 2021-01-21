const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_forma: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_forma"
    },
    nombre_forma: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_forma"
    },
    cuota: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cuota"
    }
  };
  const options = {
    tableName: "formas_de_pago",
    comment: "",
    indexes: []
  };
  const FormasDePagoModel = sequelize.define("formas_de_pago_model", attributes, options);
  return FormasDePagoModel;
};