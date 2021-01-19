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

INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('1', 'S');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('2', 'M');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('3', 'L');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('4', 'XL');
INSERT INTO `caniada`.`TALLES` (`id_talle`, `nombre`) VALUES ('5', 'XXL');

INSERT INTO `caniada`.`generos` (`id_genero`, `nombre_genero`) VALUES ('1', 'Femenino');
INSERT INTO `caniada`.`generos` (`id_genero`, `nombre_genero`) VALUES ('2', 'Masculino');

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