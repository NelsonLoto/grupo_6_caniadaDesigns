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
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "contraseña"
    },
    telefono: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "telefono"
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
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "estado"
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
    }]
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