module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_permiso: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_permiso",
      references: {
        key: "id_permiso",
        model: "permisos_model"
      }
    },
    id_rol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_rol",
      references: {
        key: "id_rol",
        model: "roles_model"
      }
    }
  };
  const config = {
    tableName: "permisos_x_rol",
    comment: "",
    indexes: [{
      name: "fk_permisos_x_rol_roles1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_rol"]
    }]
  };
  const PermisosXRolModel = sequelize.define("permisos_x_rol_model", cols, config);
  return PermisosXRolModel;
};