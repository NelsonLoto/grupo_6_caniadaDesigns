module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_permiso: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_permiso"
    },
    nombre_permiso: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_permiso"
    }
  };
  const config = {
    tableName: "permisos",
    comment: "",
    indexes: []
  };
  const Permiso = sequelize.define("Permiso", cols, config);
  Permiso.associate = function(models){
    Permiso.belongsToMany(models.Rol, {
      as : 'roles',
      through : 'permisos_x_rol',
      foreignKey : 'id_permiso',
      otherKey : 'id_rol',
      timestamps : false
    })
  }
  return Permiso;
};