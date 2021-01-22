module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_genero: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_genero"
    },
    nombre_genero: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_genero"
    }
  };
  const config = {
    tableName: "generos",
    comment: "",
    indexes: []
  };
  const GenerosModel = sequelize.define("generos_model", cols, config);
  return GenerosModel;
};