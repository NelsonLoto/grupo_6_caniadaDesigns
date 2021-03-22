module.exports = (sequelize, DataTypes) => {
  const cols = {
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
const config = {
    timestamps : false,
    tableName: "talles",
    comment: "",
    indexes: []
  };
  const Talle = sequelize.define("Talle", cols, config);
  Talle.associate = function(models){
    Talle.belongsToMany(models.Producto, {
      as: 'productos',
      through : 'talles_productos',
      foreignKey : 'talle_id_talle',
      otherKey : 'producto_id_producto',
      timestamps : false
    })
  }
  
  return Talle;
};