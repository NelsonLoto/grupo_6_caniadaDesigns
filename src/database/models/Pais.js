module.exports = (sequelize, DataTypes) => {
  const cols = {
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
  const config = {
    tableName: "paises",
    comment: "",
    indexes: []
  };
  const Pais = sequelize.define("Pais", cols, config);
  Pais.associate = function(models){
    Pais.hasMany(models.Provincia, {
      foreignKey : 'paises_id_pais',
      as : 'provincias'
    })
  }
  return Pais;
};