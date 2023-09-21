
CREATE database gamestarapp;
USE gamestarapp;

DROP TABLE IF EXISTS `Categorias`;
CREATE TABLE `Categorias` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nombre` varchar(100) NOT NULL,
    `descripcion` text,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
   `id` int NOT NULL AUTO_INCREMENT,
   `nombre` varchar(200) NOT NULL,
   `descripcion` varchar(200) NOT NULL,
   `imagen` varchar(200) NOT NULL,
   `precio` int NOT NULL,
   `idCategoria` int NOT NULL,
   PRIMARY KEY (`id`),
   KEY `fk_reactivos_categorias1_idx` (`idCategoria`),
   CONSTRAINT `fk_reactivos_categorias1` FOREIGN KEY (`idCategoria`)
   REFERENCES `Categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Usuarios`;

CREATE TABLE `Usuarios` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `nombre` varchar(200) NOT NULL,
   `email` varchar(100) NOT NULL,
   `username` varchar(45) NOT NULL,
   `password` varchar(100) NOT NULL,
   `estatus` int(11) NOT NULL DEFAULT '1',
   `fechaRegistro` date DEFAULT NULL ,
   PRIMARY KEY (`id`),
   unique KEY `username_unique` (`username`),
   unique KEY `email_unique` (`email`) 
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;