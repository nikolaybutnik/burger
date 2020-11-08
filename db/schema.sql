DROP DATABASE IF EXISTS `burgers_db`;

CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE burgers (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `burger_name` VARCHAR(100),
    `devoured` BOOLEAN
);

UPDATE burgers SET devoured = 0 WHERE id > 0;

DELETE FROM burgers WHERE id > 3;

SELECT * FROM burgers;