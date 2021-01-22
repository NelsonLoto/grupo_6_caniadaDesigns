INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('1', 'Negro');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('2', 'Rojo');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('3', 'Azul');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('4', 'Verde');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('5', 'Amarillo');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('6', 'Rosa');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('7', 'Morado');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('8', 'Naranja');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('9', 'Marron');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('10', 'Blanco');
INSERT INTO `caniada`.`COLORES` (`id_color`, `nombre_color`) VALUES ('11', 'Gris');

INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('1', 'XS');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('2', 'S');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('3', 'M');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('4', 'L');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('5', 'XL');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('6', 'XXL');

INSERT INTO `caniada`.`generos` (`id_genero`, `nombre_genero`) VALUES ('1', 'Femenino');
INSERT INTO `caniada`.`generos` (`id_genero`, `nombre_genero`) VALUES ('2', 'Masculino');
INSERT INTO `caniada`.`generos` (`id_genero`, `nombre_genero`) VALUES ('3', 'Unisex');

INSERT INTO `caniada`.`paises` (`id_pais`, `nombre_pais`) VALUES ('1', 'Argentina');
INSERT INTO `caniada`.`paises` (`id_pais`, `nombre_pais`) VALUES ('2', 'Brasil');
INSERT INTO `caniada`.`paises` (`id_pais`, `nombre_pais`) VALUES ('3', 'Paraguay');
INSERT INTO `caniada`.`paises` (`id_pais`, `nombre_pais`) VALUES ('4', 'Uruguay');
INSERT INTO `caniada`.`paises` (`id_pais`, `nombre_pais`) VALUES ('5', 'Chile');

INSERT INTO `caniada`.`provincias` (`id_provincia`, `nombre_provincia`, `paises_id_pais`) VALUES ('1', 'Cordoba', '1');
INSERT INTO `caniada`.`provincias` (`id_provincia`, `nombre_provincia`, `paises_id_pais`) VALUES ('2', 'Chaco', '1');
INSERT INTO `caniada`.`provincias` (`id_provincia`, `nombre_provincia`, `paises_id_pais`) VALUES ('3', 'Rio Negro', '1');
INSERT INTO `caniada`.`provincias` (`id_provincia`, `nombre_provincia`, `paises_id_pais`) VALUES ('4', 'Buenos Aires', '1');
INSERT INTO `caniada`.`provincias` (`id_provincia`, `nombre_provincia`, `paises_id_pais`) VALUES ('5', 'Corrientes', '1');

INSERT INTO `caniada`.`ciudades` (`id_ciudad`, `nombre_ciudad`, `provincias_id_provincia`) VALUES ('1', 'Cordoba', '1');
INSERT INTO `caniada`.`ciudades` (`id_ciudad`, `nombre_ciudad`, `provincias_id_provincia`) VALUES ('2', 'Bariloche', '3');
INSERT INTO `caniada`.`ciudades` (`id_ciudad`, `nombre_ciudad`, `provincias_id_provincia`) VALUES ('3', 'Resistencia', '2');
INSERT INTO `caniada`.`ciudades` (`id_ciudad`, `nombre_ciudad`, `provincias_id_provincia`) VALUES ('4', 'Moron', '4');
INSERT INTO `caniada`.`ciudades` (`id_ciudad`, `nombre_ciudad`, `provincias_id_provincia`) VALUES ('5', 'Santo Tome', '5');

INSERT INTO `caniada`.`formas_de_pago` (`id_forma`, `nombre_forma`, `cuota`) VALUES ('1', 'Debito', '1');
INSERT INTO `caniada`.`formas_de_pago` (`id_forma`, `nombre_forma`, `cuota`) VALUES ('2', 'Credito', '3');
INSERT INTO `caniada`.`formas_de_pago` (`id_forma`, `nombre_forma`, `cuota`) VALUES ('3', 'Mercado Pago', '3');
INSERT INTO `caniada`.`formas_de_pago` (`id_forma`, `nombre_forma`, `cuota`) VALUES ('4', 'Efectivo', '1');

INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('1', 'Remeras');
INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('2', 'Pantalones');
INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('3', 'Jeans');
INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('4', 'Camperas');
INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('5', 'Buzos');
INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('6', 'Shorts');
INSERT INTO `caniada`.`categorias` (`id_categoria`, `nombre_categoria`) VALUES ('7', 'Vestidos');

INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('1', '4', 'Remera Rolling Stones', 'Remera', '500', '1', 'RemeraStones-1606343443221.png', '1', '2', '1', '3', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('2', '6', 'Remera The Beatles', 'Remera', '500', '1', 'RemeraBeatlesHelp-1606398453283.jpg', '10', '2', '1', '4', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('3', '7', 'Remera John Coltrane', 'Remera', '500', '1', 'RemeraColtrane-1689543443337.png', '10', '2', '1', '5', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('4', '7', 'Remera Ricardo Mollo', 'Remera', '500', '1', 'RemeraRicardoMollo-1606367127780.png', '1', '3', '1', '4', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('5', '9', 'Remera Blur', 'Remera', '500', '1', 'RemeraBlur-1606367826404.jpg', '10', '2', '1', '4', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('6', '1', 'Remera Talking Heads', 'Remera', '500', '1', 'RemeraTalkingHeads-1606451586891.png', '1', '1', '1', '1', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('7', '2', 'Remera The Strokes', 'Remera', '500', '1', 'RemeraMiles-1606343443221.png', '2', '1', '1', '6', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('8', '12', 'Remera The Strokes', 'Remera', '500', '1', 'RemeraTheStrokes-1606463255187.png', '10', '2', '1', '3', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('9', '13', 'Remera Charly García', 'Remera', '500', '1', 'RemeraCharlyGarcía-1606465701527.png', '10', '3', '1', '5', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('10', '15', 'John Lennon', 'Remera', '500', '1', 'JohnLennon-1607827762873.png', '10', '3', '1', '5', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('11', '16', 'Remera Jefferson Airplane', 'Remera', '500', '1', 'RemeraJeffersonAirplane-1607944679213.png', '10', '3', '1', '5', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('12', '10', 'Remera Rolling Stones', 'Remera', '500', '1', 'RemeraStones-1606343443220.jpg', '11', '3', '1', '2', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('13', '5', 'Remera Led Zeppelin', 'Remera', '500', '1', 'RemeraLedZep-1606543443720.jpg', '1', '3', '1', '6', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('14', '11', 'Remera The Strokes', 'Remera', '500', '1', 'RemeraTheStrokes-1606368168600.png', '2', '2', '1', '3', '1');
INSERT INTO `caniada`.`productos` (`id_producto`, `sku`, `nombre_producto`, `descripcion`, `precio_unitario`, `cantidad`, `imagen_1`, `id_color`, `id_genero`, `id_categoria`, `id_talle`, `estado`) VALUES ('15', '3', 'Remera Pink Floyd', 'Remera', '500', '1', 'RemeraPinkFloyd-1606343443223.png', '1', '2', '1', '3', '1');