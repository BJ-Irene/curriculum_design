﻿# Host: localhost  (Version 5.7.20-log)
# Date: 2018-07-16 14:33:34
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "cost"
#

DROP TABLE IF EXISTS `cost`;
CREATE TABLE `cost` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `cost` double DEFAULT NULL,
  `income` double DEFAULT NULL,
  `result` double DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

#
# Data for table "cost"
#

INSERT INTO `cost` VALUES (1,'北京',28769,24883,1.16),(2,'深圳',15557,51621,0.3),(3,'上海',17633,25204,0.7),(4,'天津',12245,17285,0.71),(5,'杭州',11781,15591,0.76),(6,'苏州',10308,17940,0.57),(7,'宁波',11658,20430,0.57),(8,'哈尔滨',10670,5517,1.93),(9,'南京',10981,10764,1.02),(10,'大连',9460,17540,0.54),(11,'青岛',9660,14803,0.65),(12,'厦门',9688,20294,0.48),(13,'沈阳',7988,10617,0.75),(14,'济南',8135,7930,1.03),(15,'福州',8412,10883,0.77),(16,'广州',9235,13615,0.68),(17,'长沙',7505,11704,0.64),(18,'郑州',8218,12583,0.65),(19,'成都',7270,9971,0.73),(20,'吉林',7123,3568,1.99),(21,'长春',7020,6890,1.02),(22,'嘉峪关',7130,4726,1.51),(23,'呼和浩特',7077,6340,1.12),(24,'海口',6845,3775,1.81),(25,'武汉',6820,11375,0.6),(26,'石家庄',6538,5829,1.12),(27,'合肥',6805,12575,0.54),(28,'秦皇岛',6520,7704,0.85),(29,'南宁',6358,6021,1.06),(30,'芜湖',6475,7491,0.86),(31,'九江',6338,6417,0.99),(32,'重庆',11585,3594,3.22),(33,'昆明',6359,5655,1.12),(34,'遵义',6460,1931,3.34),(35,'西安',6030,5365,1.12),(36,'湘潭',6429,5281,1.22),(37,'贵阳',5381,7352,0.73),(38,'银川',4968,6833,0.73),(39,'南昌',6922,6253,1.11),(40,'乌鲁木齐',4750,9521,0.5),(41,'绵阳',4730,3425,1.38),(42,'洛阳',4933,6405,0.77),(43,'太原',5449,5260,1.04),(44,'兰州',4559,5260,1.04),(45,'西宁',5413,1288,4.2);