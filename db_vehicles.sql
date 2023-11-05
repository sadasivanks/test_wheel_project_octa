-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 05, 2023 at 02:37 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_vehicles`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_info`
--

CREATE TABLE IF NOT EXISTS `tb_user_info` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `started_date` date NOT NULL,
  `vehicle_model_id` int(100) NOT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_user_info`
--

INSERT INTO `tb_user_info` (`user_id`, `first_name`, `last_name`, `started_date`, `vehicle_model_id`, `end_date`) VALUES
(1, 'Sadasivan', 'KS', '2023-11-01', 1, '2023-11-05'),
(2, 'Akash', 'S', '2023-11-03', 2, '2023-11-05');

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicles_name`
--

CREATE TABLE IF NOT EXISTS `tb_vehicles_name` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `vehicles_model_name` varchar(250) NOT NULL,
  `wheel_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wheel_id` (`wheel_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_vehicles_name`
--

INSERT INTO `tb_vehicles_name` (`id`, `vehicles_model_name`, `wheel_id`) VALUES
(1, 'Yamaha', 1),
(2, 'Mahindra', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicle_models_name`
--

CREATE TABLE IF NOT EXISTS `tb_vehicle_models_name` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(250) NOT NULL,
  `vehicle_id` int(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicle_id` (`vehicle_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_vehicle_models_name`
--

INSERT INTO `tb_vehicle_models_name` (`id`, `model_name`, `vehicle_id`) VALUES
(1, 'Yamaha R15 V4', 1),
(2, 'Mahindra Scorpio N', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicle_wheels`
--

CREATE TABLE IF NOT EXISTS `tb_vehicle_wheels` (
  `wheel_id` int(100) NOT NULL AUTO_INCREMENT,
  `no_of_wheels` int(100) NOT NULL,
  PRIMARY KEY (`wheel_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tb_vehicle_wheels`
--

INSERT INTO `tb_vehicle_wheels` (`wheel_id`, `no_of_wheels`) VALUES
(1, 2),
(2, 4);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_vehicles_name`
--
ALTER TABLE `tb_vehicles_name`
  ADD CONSTRAINT `tb_vehicles_name_ibfk_1` FOREIGN KEY (`wheel_id`) REFERENCES `tb_vehicle_wheels` (`wheel_id`);

--
-- Constraints for table `tb_vehicle_models_name`
--
ALTER TABLE `tb_vehicle_models_name`
  ADD CONSTRAINT `tb_vehicle_models_name_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `tb_vehicles_name` (`id`);
