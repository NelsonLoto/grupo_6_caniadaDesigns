CREATE DATABASE  IF NOT EXISTS `caniadagrupo6_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `caniadagrupo6_db`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: caniadagrupo6_db
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Descuentos`
--

DROP TABLE IF EXISTS `Descuentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Descuentos` (
  `id_descuento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_descuento` varchar(45) DEFAULT NULL,
  `porcentaje_descuento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_descuento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `caniadagrupo6_db`.`Descuentos` (`id_descuento`, `nombre_descuento`, `porcentaje_descuento`) VALUES ('1', 'PrecioLista', '0');
INSERT INTO `caniadagrupo6_db`.`Descuentos` (`id_descuento`, `nombre_descuento`, `porcentaje_descuento`) VALUES ('2', 'Promocion', '20');

--
-- Dumping data for table `Descuentos`
--

LOCK TABLES `Descuentos` WRITE;
/*!40000 ALTER TABLE `Descuentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Descuentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(45) DEFAULT NULL,
  `estado` varchar(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Remeras','1',NULL,NULL,NULL),(2,'Pantalones','1',NULL,NULL,NULL),(3,'Jeans','1',NULL,NULL,NULL),(4,'Camperas','1',NULL,NULL,NULL),(5,'Buzos','1',NULL,NULL,NULL),(6,'Shorts','1',NULL,NULL,NULL),(7,'Vestidos','1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `id_ciudad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ciudad` varchar(45) DEFAULT NULL,
  `provincias_id_provincia` int(11) NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  KEY `fk_ciudades_provincias1_idx` (`provincias_id_provincia`),
  CONSTRAINT `fk_ciudades_provincias1` FOREIGN KEY (`provincias_id_provincia`) REFERENCES `provincias` (`id_provincia`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,'Cordoba',1),(2,'Bariloche',3),(3,'Resistencia',2),(4,'Moron',4),(5,'Santo Tome',5);
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colores` (
  `id_color` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_color`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'Negro'),(2,'Rojo'),(3,'Azul'),(4,'Verde'),(5,'Amarillo'),(6,'Rosa'),(7,'Morado'),(8,'Naranja'),(9,'Marron'),(10,'Blanco'),(11,'Gris');
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_ventas`
--

DROP TABLE IF EXISTS `detalles_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_ventas` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `id_venta` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `monto_parcial` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id_detalle`,`id_venta`),
  KEY `fk_detalles_ventas_ventas1_idx` (`id_venta`),
  KEY `fk_detalles_ventas_productos1_idx` (`id_producto`),
  CONSTRAINT `fk_detalles_ventas_productos1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalles_ventas_ventas1` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_ventas`
--

LOCK TABLES `detalles_ventas` WRITE;
/*!40000 ALTER TABLE `detalles_ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formas_de_pago`
--

DROP TABLE IF EXISTS `formas_de_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formas_de_pago` (
  `id_forma` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_forma` varchar(45) DEFAULT NULL,
  `cuota` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_forma`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formas_de_pago`
--

LOCK TABLES `formas_de_pago` WRITE;
/*!40000 ALTER TABLE `formas_de_pago` DISABLE KEYS */;
INSERT INTO `formas_de_pago` VALUES (1,'Debito',1),(2,'Credito',3),(3,'Mercado Pago',3),(4,'Efectivo',1);
/*!40000 ALTER TABLE `formas_de_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id_genero` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_genero` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Femenino'),(2,'Masculino'),(3,'Unisex');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paises`
--

DROP TABLE IF EXISTS `paises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paises` (
  `id_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_pais` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paises`
--

LOCK TABLES `paises` WRITE;
/*!40000 ALTER TABLE `paises` DISABLE KEYS */;
INSERT INTO `paises` VALUES (1,'Argentina'),(2,'Brasil'),(3,'Paraguay'),(4,'Uruguay'),(5,'Chile');
/*!40000 ALTER TABLE `paises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id_permiso` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_permiso` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_permiso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;





--
-- Table structure for table `permisos_x_rol`
--

DROP TABLE IF EXISTS `permisos_x_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos_x_rol` (
  `id_permiso` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  PRIMARY KEY (`id_permiso`,`id_rol`),
  KEY `fk_permisos_x_rol_roles1_idx` (`id_rol`),
  CONSTRAINT `fk_permisos_x_rol_permisos1` FOREIGN KEY (`id_permiso`) REFERENCES `permisos` (`id_permiso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_permisos_x_rol_roles1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos_x_rol`
--

LOCK TABLES `permisos_x_rol` WRITE;
/*!40000 ALTER TABLE `permisos_x_rol` DISABLE KEYS */;
/*!40000 ALTER TABLE `permisos_x_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `sku` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` text,
  `precio` decimal(5,2) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `imagen_1` varchar(45) DEFAULT NULL,
  `imagen_2` varchar(45) DEFAULT NULL,
  `imagen_3` varchar(45) DEFAULT NULL,
  `imagen_4` varchar(45) DEFAULT NULL,
  `id_color` int(11) NOT NULL,
  `id_genero` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_talle` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `fk_productos_colores_idx` (`id_color`),
  KEY `fk_productos_generos1_idx` (`id_genero`),
  KEY `fk_productos_categorias1_idx` (`id_categoria`),
  KEY `fk_productos_talles1_idx` (`id_talle`),
  CONSTRAINT `fk_productos_categorias1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_colores` FOREIGN KEY (`id_color`) REFERENCES `colores` (`id_color`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_generos1` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_talles1` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id_talle`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,4,'Remera Rolling Stones','Remera',500.00,1,'RemeraStones-1606343443221.png',NULL,NULL,NULL,1,2,1,3,NULL,NULL,NULL),(2,6,'Remera The Beatles','Remera',500.00,1,'RemeraBeatlesHelp-1606398453283.jpg',NULL,NULL,NULL,10,2,1,4,NULL,NULL,NULL),(3,7,'Remera John Coltrane','Remera',500.00,1,'RemeraColtrane-1689543443337.png',NULL,NULL,NULL,10,2,1,5,NULL,NULL,NULL),(4,7,'Remera Ricardo Mollo','Remera',500.00,1,'RemeraRicardoMollo-1606367127780.png',NULL,NULL,NULL,1,3,1,4,NULL,NULL,NULL),(5,9,'Remera Blur','Remera',500.00,1,'RemeraBlur-1606367826404.jpg',NULL,NULL,NULL,10,2,1,4,NULL,NULL,NULL),(6,1,'Remera Talking Heads','Remera',500.00,1,'RemeraTalkingHeads-1606451586891.png',NULL,NULL,NULL,1,1,1,1,NULL,NULL,NULL),(7,2,'Remera Miles Davis','Remera',500.00,1,'RemeraMiles-1606343443221.png',NULL,NULL,NULL,2,1,1,6,NULL,NULL,NULL),(8,12,'Remera The Strokes','Remera',500.00,1,'RemeraTheStrokes-1606463255187.png',NULL,NULL,NULL,10,2,1,3,NULL,NULL,NULL),(9,13,'Remera Charly García','Remera',500.00,1,'RemeraCharlyGarcía-1606465701527.png',NULL,NULL,NULL,10,3,1,5,NULL,NULL,NULL),(10,15,'John Lennon','Remera',500.00,1,'JohnLennon-1607827762873.png',NULL,NULL,NULL,10,3,1,5,NULL,NULL,NULL),(11,16,'Remera Jefferson Airplane','Remera',500.00,1,'RemeraJeffersonAirplane-1607944679213.png',NULL,NULL,NULL,10,3,1,5,NULL,NULL,NULL),(12,10,'Remera Rolling Stones','Remera',500.00,1,'RemeraStones-1606343443220.jpg',NULL,NULL,NULL,11,3,1,2,NULL,NULL,NULL),(13,5,'Remera Led Zeppelin','Remera',500.00,1,'RemeraLedZep-1606543443720.jpg',NULL,NULL,NULL,1,3,1,6,NULL,NULL,NULL),(14,11,'Remera The Strokes','Remera',500.00,1,'RemeraTheStrokes-1606368168600.png',NULL,NULL,NULL,2,2,1,3,NULL,NULL,NULL),(15,3,'Remera Pink Floyd','Remera',500.00,1,'RemeraPinkFloyd-1606343443223.png',NULL,NULL,NULL,1,2,1,3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provincias` (
  `id_provincia` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_provincia` varchar(45) DEFAULT NULL,
  `paises_id_pais` int(11) NOT NULL,
  PRIMARY KEY (`id_provincia`),
  KEY `fk_provincias_paises1_idx` (`paises_id_pais`),
  CONSTRAINT `fk_provincias_paises1` FOREIGN KEY (`paises_id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
INSERT INTO `provincias` VALUES (1,'Cordoba',1),(2,'Chaco',1),(3,'Rio Negro',1),(4,'Buenos Aires',1),(5,'Corrientes',1);
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Usuario'),(3,'Propietario'),(5,'Editor'),(7,'Development'),(9,'Admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles` (
  `id_talle` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'XXL');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles_productos`
--

DROP TABLE IF EXISTS `talles_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles_productos` (
  `id_talles_productos` int(11) NOT NULL,
  `talle_id_talle` int(11) NOT NULL,
  `producto_id_producto` int(11) NOT NULL,
  PRIMARY KEY (`id_talles_productos`),
  KEY `talles_id_talle_idx` (`talle_id_talle`),
  KEY `productos_id_producto_idx` (`producto_id_producto`),
  CONSTRAINT `fk_productos_id_producto` FOREIGN KEY (`producto_id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_talles_id_talle` FOREIGN KEY (`talle_id_talle`) REFERENCES `talles` (`id_talle`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles_productos`
--

LOCK TABLES `talles_productos` WRITE;
/*!40000 ALTER TABLE `talles_productos` DISABLE KEYS */;
INSERT INTO `talles_productos` VALUES (1,3,1),(2,2,1),(3,3,2),(4,2,2),(5,1,2),(6,4,3),(7,2,3),(8,1,4),(9,4,5),(10,1,5),(11,2,5),(12,1,6),(13,3,6),(14,2,6),(15,5,6),(16,4,7),(17,2,7),(18,3,7),(19,1,7);
/*!40000 ALTER TABLE `talles_productos` ENABLE KEYS */;


UNLOCK TABLES;

INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('20', '4', '8');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('21', '5', '8');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('22', '1', '9');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('23', '2', '9');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('24', '3', '9');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('25', '4', '10');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('26', '5', '10');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('27', '3', '11');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('28', '5', '11');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('29', '2', '12');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('30', '4', '12');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('31', '1', '13');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('32', '2', '14');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('33', '3', '15');
 INSERT INTO `caniadagrupo6_db`.`talles_productos` (`id_talles_productos`, `talle_id_talle`, `producto_id_producto`) VALUES ('34', '4', '15');

-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(99) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `fk_usuarios_roles1_idx` (`id_rol`),
  CONSTRAINT `fk_usuarios_roles1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Admin','Caniada','admin@caniada.com','$2a$10$7SJzEfeMJDCZlldTFcJKwO8Ng870vHYUfBBlq2I3yr2vAxnFF40pm','admin@caniada.com.svg',1,NULL,NULL,NULL),(2,'Propietario','Caniada','propietario@caniada.com','$2a$10$gYuar7L5/T9K503m7l1ftul9mkl5o6N/hVh7cp6v8.mdznXUyB/9C','admin@caniada.com.svg',3,NULL,NULL,NULL),(3,'Editor','Caniada','editor@caniada.com','$2a$10$syND9.2wZG.MSskBPb0rou5CRGxJby0p4Z.XMZtcJBQdwgMPuZc3m','default@caniada.com.svg',5,NULL,NULL,NULL),(4,'Juanpi','Jepik','juanpi@caniada.com','$2a$10$iW2berZdGIx1LgpXsRkpFuly49dh/UQ4yJV0RAeTX0A54Gqz7SGfq','juanpi@caniada.com.webp',7,NULL,NULL,NULL),(5,'Nelson','Loto','nelson@caniada.com','$2a$10$iW2berZdGIx1LgpXsRkpFuly49dh/UQ4yJV0RAeTX0A54Gqz7SGfq','nelson@caniada.com.webp',7,NULL,NULL,NULL),(6,'Guido','Shaggy','shaggy@caniada.com','$2a$10$iW2berZdGIx1LgpXsRkpFuly49dh/UQ4yJV0RAeTX0A54Gqz7SGfq','shaggy@caniada.com.webp',7,NULL,NULL,NULL),(7,'Facundo','Garcia','flete@caniada.com','$2a$10$9l6uYNHxYqZq1P/GumOSkONUmvaRxlgUX4F3OQJ3/nwYGvaWtt5F6','flete@caniada.com.png',7,NULL,NULL,NULL),(8,'Usuario','Default','user@caniada.com','$2a$10$zux14WSXwv54OdkuAuC0LO.2IYHeiBa/SRgRAa.dVm2b6TGG0BOYu','user@caniada.com.jpg',9,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `fecha_venta` datetime DEFAULT NULL,
  `monto_parcial` decimal(5,2) DEFAULT NULL,
  `monto_total` decimal(5,2) DEFAULT NULL,
  `calle_envio` varchar(45) DEFAULT NULL,
  `numero_calle_envio` int(11) DEFAULT NULL,
  `codigo_postal` int(11) DEFAULT NULL,
  `id_ciudad` int(11) NOT NULL,
  `id_forma_pago` int(11) NOT NULL,
  `id_descuento` int(11) NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `fk_ventas_ciudades1_idx` (`id_ciudad`),
  KEY `fk_ventas_formas_de_pago1_idx` (`id_forma_pago`),
  KEY `fk_ventas_usuarios1_idx` (`id_usuario`),
  KEY `fk_ventas_Descuentos1_idx` (`id_descuento`),
  CONSTRAINT `fk_ventas_Descuentos1` FOREIGN KEY (`id_descuento`) REFERENCES `Descuentos` (`id_descuento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_ciudades1` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudades` (`id_ciudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_formas_de_pago1` FOREIGN KEY (`id_forma_pago`) REFERENCES `formas_de_pago` (`id_forma`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


ALTER TABLE `caniadagrupo6_db`.`ventas` 
CHANGE COLUMN `fecha_venta` `fecha_venta` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;


ALTER TABLE `caniadagrupo6_db`.`ventas` 
CHANGE COLUMN `monto_parcial` `monto_parcial` DECIMAL(7,2) NULL DEFAULT NULL ,
CHANGE COLUMN `monto_total` `monto_total` DECIMAL(7,2) NULL DEFAULT NULL ;


ALTER TABLE `caniadagrupo6_db`.`detalles_ventas` 
CHANGE COLUMN `monto_parcial` `monto_parcial` DECIMAL(7,2) NULL DEFAULT NULL ;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-22 18:53:09