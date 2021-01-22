module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_descuento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_descuento"
    },
    nombre_descuento: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_descuento"
    },
    porcentaje_descuento: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "porcentaje_descuento"
    }
  };
  const config = {
    tableName: "Descuentos",
    comment: "",
    indexes: []
  };
  const Descuento = sequelize.define("Descuento", cols, config);
  return Descuento;
};