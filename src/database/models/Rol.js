module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_rol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_rol"
    },
    nombre_rol: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_rol"
    }
  };
  const config = {
    tableName: "roles",
    comment: "",
    indexes: []
  };
  const Rol = sequelize.define("Rol", cols, config);
  Rol.associate = function(models){
    Rol.hasMany(models.Usuario,{
      foreignKey : 'id_rol',
      as : 'usuarios'
    }),
    Rol.belongsToMany(models.Permiso,{
      as : 'permisos',
      through : 'permisos_x_rol',
      foreignKey : 'id_rol',
      otherKey : 'id_permiso',
      timestamps : false
    })
  }
  return Rol;
};