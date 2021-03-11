module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_venta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_venta"
    },
    id_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_usuario",
      references: {
        key: "id_usuario",
        model: "Usuario"
      }
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fecha_venta"
    },
    monto_parcial: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "monto_parcial"
    },
    monto_total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "monto_total"
    },
    calle_envio: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "calle_envio"
    },
    numero_calle_envio: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numero_calle_envio"
    },
    codigo_postal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "codigo_postal"
    },
    id_ciudad: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_ciudad",
      references: {
        key: "id_ciudad",
        model: "Ciudad"
      }
    },
    id_forma_pago: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_forma_pago",
      references: {
        key: "id_forma",
        model: "FormaDePago"
      }
    },
    id_descuento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_descuento",
      references: {
        key: "id_descuento",
        model: "Descuento"
      }
    }
  };
  const options = {
    tableName: "ventas",
    timestamps:false,
    paranoid : true,
    comment: "",
    indexes: [{
      name: "fk_ventas_ciudades1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_ciudad"]
    }, {
      name: "fk_ventas_formas_de_pago1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_forma_pago"]
    }, {
      name: "fk_ventas_usuarios1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_usuario"]
    }, {
      name: "fk_ventas_Descuentos1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_descuento"]
    }]
  };
  const Venta = sequelize.define("Venta", cols, options);
  Venta.associate = function(models){
    Venta.hasMany(models.DetalleVenta,{
      foreignKey : 'id_venta',
      as : 'detallesVentas'
    }),
    Venta.belongsTo(models.Usuario, {
      foreignKey : 'id_usuario',
      as : 'usuario'
    }),
    Venta.belongsTo(models.FormaDePago, {
      foreignKey : 'id_forma_pago',
      as : 'formaDePago'
    }),
    Venta.belongsTo(models.Ciudad,{
      foreignKey : 'id_ciudad',
      as : 'ciudad'
    })
  }
  return Venta;
};