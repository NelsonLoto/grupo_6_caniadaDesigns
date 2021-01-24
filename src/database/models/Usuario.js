module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_usuario"
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre"
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "apellido"
    },
    mail: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mail"
    },
    contraseña: {
      type: DataTypes.STRING(99),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "contraseña"
    },
    avatar: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "avatar"
    },
    id_rol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_rol",
      references: {
        key: "id_rol",
        model: "Rol"
      }
    }
  };
const config = {
    tableName: "usuarios",
    comment: "",
    indexes: [{
      name: "fk_usuarios_roles1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_rol"]
    }],
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    deletedAt : 'deleted_at',
    timestamps:true,
    underscored : true,
    paranoid : true
  };
  const Usuario = sequelize.define("Usuario", cols, config);
  Usuario.associate = function (models){
    Usuario.hasMany(models.Venta,{
      foreignKey : 'id_usuario',
      as : 'ventas'
    }),
    Usuario.belongsTo(models.Rol,{
      foreignKey : 'id_rol',
      as : 'rol'
    })
  }
  return Usuario;
};