module.exports = (sequelize, DataTypes) => {
  const cols = {
    id_producto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_producto"
    },
    sku: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "sku"
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
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "precio"
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
    imagen_1: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imagen_1"
    },
    imagen_2: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imagen_2"
    },
    imagen_3: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imagen_3"
    },
    imagen_4: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imagen_4"
    },
    id_color: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_color",
      references: {
        key: "id_color",
        model: "Color"
      }
    },
    id_genero: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_genero",
      references: {
        key: "id_genero",
        model: "Genero"
      }
    },
    id_categoria: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_categoria",
      references: {
        key: "id_categoria",
        model: "Categoria"
      }
    },
    id_talle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_talle",
      references: {
        key: "id_talle",
        model: "Talle"
      }
    }
  };
const config = {
    timestamps : false,
    tableName: "productos",
    comment: "",
    indexes: [{
      name: "fk_productos_colores_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_color"]
    }, {
      name: "fk_productos_generos1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_genero"]
    }, {
      name: "fk_productos_categorias1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_categoria"]
    }, {
      name: "fk_productos_talles1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_talle"]
    }],
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    deletedAt : 'deleted_at',
    underscored : true,
    timestamps:true,
    paranoid : true
  };
  const Producto = sequelize.define("Producto", cols, config);
  Producto.associate = function(models){
    Producto.belongsTo(models.Color, {
      foreignKey : 'id_color',
      as : 'color'
    }),
    Producto.belongsTo(models.Genero, {
      foreignKey : 'id_genero',
      as : 'genero'
    }),
    Producto.belongsTo(models.Categoria, {
      foreignKey : 'id_categoria',
      as : 'categoria'
    }),
    Producto.belongsTo(models.Talle, {
      foreignKey : 'id_talle',
      as : 'talle'
    }),
    Producto.hasMany(models.DetalleVenta, {
      foreignKey : 'id_producto',
      as : 'detallesVentasPorId'
    }),
    Producto.hasMany(models.DetalleVenta,{
      foreignKey : 'sku',
      as : 'detallesVentasPorSku'
    })
  }
  return Producto;
};