const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
        model: "provincias_model"
      }
    }
  };
  const options = {
    tableName: "ciudades",
    comment: "",
    indexes: [{
      name: "fk_ciudades_provincias1_idx",
      unique: false,
      type: "BTREE",
      fields: ["provincias_id_provincia"]
    }]
  };
  const CiudadesModel = sequelize.define("ciudades_model", attributes, options);
  return CiudadesModel;
};