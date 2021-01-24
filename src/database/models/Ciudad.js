module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_ciudad: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_ciudad"
    },
    nombre_ciudad: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_ciudad"
    },
    provincias_id_provincia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "provincias_id_provincia",
      references: {
        key: "id_provincia",
        model: "Provincia"
      }
    }
  };
const config = {
    timestamps : false,
    tableName: "ciudades",
    comment: "",
    indexes: [{
      name: "fk_ciudades_provincias1_idx",
      unique: false,
      type: "BTREE",
      fields: ["provincias_id_provincia"]
    }]
  };
  const Ciudad = sequelize.define("Ciudad", cols, config);
  Ciudad.associate = function(models){
    Ciudad.hasMany(models.Venta,{
      foreignKey : 'id_ciudad',
      as : 'ventas'
    }),
    Ciudad.belongsTo(models.Provincia, {
      foreignKey : 'provincias_id_provincia',
      as : 'provincia'
    })
  }
  return Ciudad;
};