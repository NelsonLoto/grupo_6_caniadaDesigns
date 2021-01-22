module.exports = (sequelize, DataTypes) => {
  const cols = {
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
  const config = {
    tableName: "colores",
    comment: "",
    indexes: []
  };
  const Color = sequelize.define("Color", cols, config);
  Color.associate = function(models){
    Color.hasMany(models.Producto, {
      foreignKey : 'id_color',
      as : 'productos'
    })
  }
  return Color;
};