module.exports = (sequelize, DataTypes) => {
  const cols = {
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
const config = {
    timestamps : false,
    tableName: "formas_de_pago",
    comment: "",
    indexes: []
  };
  const FormaDePago = sequelize.define("FormaDePago", cols, config);
  FormaDePago.associate = function(models){
    FormaDePago.hasMany(models.Venta, {
      foreignKey : 'id_forma_pago',
      as : 'ventas'
    })
  }
  return FormaDePago;
};