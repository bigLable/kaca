-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mysqljob
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mysqljob
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mysqljob` DEFAULT CHARACTER SET utf8 ;
USE `mysqljob` ;

-- -----------------------------------------------------
-- Table `mysqljob`.`types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`types` (
  `tID` INT NOT NULL AUTO_INCREMENT,
  `tName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tID`),
  UNIQUE INDEX `tName_UNIQUE` (`tName` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`buinesses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`buinesses` (
  `bId` INT NOT NULL AUTO_INCREMENT,
  `bName` VARCHAR(45) NOT NULL,
  `bAddress` VARCHAR(45) NOT NULL,
  `bPhoneNum` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`bId`),
  UNIQUE INDEX `bName_UNIQUE` (`bName` ASC) VISIBLE,
  UNIQUE INDEX `bPhoneNum_UNIQUE` (`bPhoneNum` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`admins` (
  `adminId` INT NOT NULL AUTO_INCREMENT,
  `adminName` VARCHAR(45) NOT NULL,
  `adminsPwd` VARCHAR(45) NOT NULL,
  `adminsPic` VARCHAR(45) NOT NULL,
  `adminsEmail` VARCHAR(45) NOT NULL,
  `adminsPhoneNum` INT NOT NULL,
  PRIMARY KEY (`adminId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`cgq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`cgq` (
  `cgqId` INT NOT NULL,
  `cgqType` VARCHAR(45) NOT NULL,
  `cgqSize` VARCHAR(45) NOT NULL,
  `cgqMax` VARCHAR(45) NOT NULL,
  `cgqD` VARCHAR(45) NOT NULL,
  `cgqJ` VARCHAR(45) NOT NULL,
  `cgqTime` DATE NOT NULL,
  PRIMARY KEY (`cgqId`),
  UNIQUE INDEX `cgqId_UNIQUE` (`cgqId` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`shop`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`shop` (
  `shopId` INT NOT NULL AUTO_INCREMENT,
  `shopName` VARCHAR(45) NOT NULL,
  `shopInfo` VARCHAR(45) NOT NULL,
  `shopImg` VARCHAR(45) NOT NULL,
  `shopAction` VARCHAR(45) NOT NULL,
  `shopPrice` INT NOT NULL,
  `shopPara` INT NOT NULL,
  `tId` INT NOT NULL,
  `bId` INT NOT NULL,
  `admins_adminId` INT NOT NULL,
  `cgqId` INT NOT NULL,
  PRIMARY KEY (`shopId`),
  UNIQUE INDEX `pName_UNIQUE` (`shopName` ASC) VISIBLE,
  UNIQUE INDEX `pPic_UNIQUE` (`shopAction` ASC) VISIBLE,
  INDEX `tId_idx` (`tId` ASC) VISIBLE,
  UNIQUE INDEX `tId_UNIQUE` (`tId` ASC) VISIBLE,
  INDEX `fk_shop_buinesses1_idx` (`bId` ASC) VISIBLE,
  UNIQUE INDEX `shopId_UNIQUE` (`shopId` ASC) VISIBLE,
  INDEX `fk_shop_admins1_idx` (`admins_adminId` ASC) VISIBLE,
  INDEX `fk_shop_cgq1_idx` (`cgqId` ASC) VISIBLE,
  CONSTRAINT `tId`
    FOREIGN KEY (`tId`)
    REFERENCES `mysqljob`.`types` (`tID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shop_buinesses1`
    FOREIGN KEY (`bId`)
    REFERENCES `mysqljob`.`buinesses` (`bId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shop_admins1`
    FOREIGN KEY (`admins_adminId`)
    REFERENCES `mysqljob`.`admins` (`adminId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shop_cgq1`
    FOREIGN KEY (`cgqId`)
    REFERENCES `mysqljob`.`cgq` (`cgqId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`customers` (
  `cId` INT NOT NULL AUTO_INCREMENT,
  `cName` VARCHAR(45) NOT NULL,
  `cPwd` VARCHAR(45) NOT NULL,
  `cEmail` VARCHAR(45) NOT NULL,
  `cPhoneNum` INT NOT NULL,
  `cPic` VARCHAR(45) NOT NULL,
  `cJob` VARCHAR(45) NOT NULL,
  `cRegisterDate` DATE NOT NULL,
  PRIMARY KEY (`cId`),
  UNIQUE INDEX `cName_UNIQUE` (`cName` ASC) VISIBLE,
  UNIQUE INDEX `cPwd_UNIQUE` (`cPwd` ASC) VISIBLE,
  UNIQUE INDEX `cEmail_UNIQUE` (`cEmail` ASC) VISIBLE,
  UNIQUE INDEX `cPhoneNum_UNIQUE` (`cPhoneNum` ASC) VISIBLE,
  UNIQUE INDEX `cJob_UNIQUE` (`cJob` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`addresses` (
  `aId` INT NOT NULL AUTO_INCREMENT,
  `aName` VARCHAR(45) NOT NULL,
  `cId` INT NOT NULL,
  PRIMARY KEY (`aId`),
  INDEX `fk_addresses_customers1_idx` (`cId` ASC) VISIBLE,
  CONSTRAINT `fk_addresses_customers1`
    FOREIGN KEY (`cId`)
    REFERENCES `mysqljob`.`customers` (`cId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`order details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`order details` (
  `detailId` INT NOT NULL AUTO_INCREMENT,
  `detailQuantily` INT NOT NULL,
  `detailSendDate` DATE NOT NULL,
  `detailPayWay` VARCHAR(45) NOT NULL,
  `detailPostage` INT NOT NULL,
  `aId` INT NOT NULL,
  `cId` INT NOT NULL,
  `shopId` INT NOT NULL,
  PRIMARY KEY (`detailId`),
  UNIQUE INDEX `dId_UNIQUE` (`detailId` ASC) VISIBLE,
  UNIQUE INDEX `aId_UNIQUE` (`aId` ASC) VISIBLE,
  UNIQUE INDEX `cId_UNIQUE` (`cId` ASC) VISIBLE,
  UNIQUE INDEX `shopId_UNIQUE` (`shopId` ASC) VISIBLE,
  CONSTRAINT `aId`
    FOREIGN KEY (`aId`)
    REFERENCES `mysqljob`.`addresses` (`aId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cId`
    FOREIGN KEY (`cId`)
    REFERENCES `mysqljob`.`customers` (`cId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `shopId`
    FOREIGN KEY (`shopId`)
    REFERENCES `mysqljob`.`shop` (`shopId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`orders` (
  `orderId` INT NOT NULL AUTO_INCREMENT,
  `orderDate` DATE NOT NULL,
  `detailId` INT NOT NULL,
  PRIMARY KEY (`orderId`),
  INDEX `detailID_idx` (`detailId` ASC) VISIBLE,
  UNIQUE INDEX `detailId_UNIQUE` (`detailId` ASC) VISIBLE,
  CONSTRAINT `detailID`
    FOREIGN KEY (`detailId`)
    REFERENCES `mysqljob`.`order details` (`detailId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`wroks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`wroks` (
  `worksId` INT NOT NULL AUTO_INCREMENT,
  `wroksauthor` VARCHAR(45) NOT NULL,
  `wroksDescribe` VARCHAR(45) NOT NULL,
  `wroksEquipment` VARCHAR(45) NOT NULL,
  `wroksPageview` INT NOT NULL,
  `wroksPoint` INT NOT NULL,
  `wroksDate` DATE NOT NULL,
  PRIMARY KEY (`worksId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`comments` (
  `commentsId` INT NOT NULL AUTO_INCREMENT,
  `commentsContent` VARCHAR(45) NOT NULL,
  `commentsDate` DATE NOT NULL,
  `worksId` INT NOT NULL,
  `cId` INT NOT NULL,
  PRIMARY KEY (`commentsId`),
  INDEX `fk_comments_wroks1_idx` (`worksId` ASC) VISIBLE,
  INDEX `fk_comments_customers1_idx` (`cId` ASC) VISIBLE,
  CONSTRAINT `fk_comments_wroks1`
    FOREIGN KEY (`worksId`)
    REFERENCES `mysqljob`.`wroks` (`worksId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_customers1`
    FOREIGN KEY (`cId`)
    REFERENCES `mysqljob`.`customers` (`cId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`trolleys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`trolleys` (
  `trolleyId` INT NOT NULL AUTO_INCREMENT,
  `trolleytotal` INT NOT NULL,
  `customers_cId` INT NOT NULL,
  `orderId` INT NOT NULL,
  PRIMARY KEY (`trolleyId`),
  INDEX `orderId_idx` (`orderId` ASC) VISIBLE,
  UNIQUE INDEX `orderId_UNIQUE` (`orderId` ASC) VISIBLE,
  CONSTRAINT `orderId`
    FOREIGN KEY (`orderId`)
    REFERENCES `mysqljob`.`orders` (`orderId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mysqljob`.`wx`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mysqljob`.`wx` (
  `wxId` INT NOT NULL,
  `wxImg` VARCHAR(45) NOT NULL,
  `wxName` VARCHAR(45) NOT NULL,
  `wxFrom` VARCHAR(45) NOT NULL,
  `wxTime` VARCHAR(45) NOT NULL,
  `wxphone` INT NOT NULL,
  `wxPage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`wxId`),
  UNIQUE INDEX `wxlId_UNIQUE` (`wxId` ASC) VISIBLE,
  UNIQUE INDEX `wxlName_UNIQUE` (`wxName` ASC) VISIBLE,
  UNIQUE INDEX `wxlFrom_UNIQUE` (`wxFrom` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
