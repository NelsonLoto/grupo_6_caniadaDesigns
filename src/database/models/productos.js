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
    nombre_producto: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre_producto"
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
    precio_unitario: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "precio_unitario"
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
        model: "colores_model"
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
        model: "generos_model"
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
        model: "Categorias"
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
        model: "talles_model"
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
    }]
  };
  const ProductosModel = sequelize.define("productos_model", cols, config);
  ProductosModel.associate = function(models){
    ProductosModel.belongsTo(models.colores_model)
  }
  return ProductosModel;
};