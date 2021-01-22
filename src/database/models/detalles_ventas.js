module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_detalle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_detalle"
    },
    id_venta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_venta",
      references: {
        key: "id_venta",
        model: "ventas_model"
      }
    },
    id_producto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_producto",
      references: {
        key: "id_producto",
        model: "productos_model"
      }
    },
    sku: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sku",
      references: {
        key: "sku",
        model: "productos_model"
      }
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cantidad"
    },
    monto_parcial: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "monto_parcial"
    }
  };
  const config = {
    tableName: "detalles_ventas",
    comment: "",
    indexes: [{
      name: "fk_detalles_ventas_productos1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_producto", "sku"]
    }, {
      name: "fk_detalles_ventas_ventas1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_venta"]
    }]
  };
  const DetallesVentasModel = sequelize.define("detalles_ventas_model", cols, config);
  return DetallesVentasModel;
};