module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_provincia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_provincia"
    },
    nombre_provincia: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_provincia"
    },
    paises_id_pais: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "paises_id_pais",
      references: {
        key: "id_pais",
        model: "paises_model"
      }
    }
  };
  const config = {
    tableName: "provincias",
    comment: "",
    indexes: [{
      name: "fk_provincias_paises1_idx",
      unique: false,
      type: "BTREE",
      fields: ["paises_id_pais"]
    }]
  };
  const ProvinciasModel = sequelize.define("provincias_model", cols, config);
  return ProvinciasModel;
};