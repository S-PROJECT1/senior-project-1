-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema home
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema home
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `home` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `home` ;

-- -----------------------------------------------------
-- Table `home`.`handmade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home`.`handmade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(1000) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(700) NOT NULL,
  `video` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `home`.`handwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home`.`handwork` (
  `id_Work` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(1000) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(700) NOT NULL,
  `videos` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id_Work`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `home`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(450) NOT NULL,
  `email` VARCHAR(450) NOT NULL,
  `password` VARCHAR(405) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
