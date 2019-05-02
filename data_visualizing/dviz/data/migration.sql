# Host: localhost  (Version 5.7.20-log)
# Date: 2018-07-16 14:34:10
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "migration"
#

DROP TABLE IF EXISTS `migration`;
CREATE TABLE `migration` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `2012` double DEFAULT NULL,
  `2013` double DEFAULT NULL,
  `2014` double DEFAULT NULL,
  `2015` double DEFAULT NULL,
  `2016` double DEFAULT NULL,
  `2017` double DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "migration"
#

INSERT INTO `migration` VALUES (1,'北京',19.6,18.8,17.1,11.8,17.7,-3.7),(2,'上海',7.6,5.4,6.4,4.3,7,0),(3,'广州',9.4,10,10.1,11.8,16.3,27.4),(4,'深圳',19.7,22.9,21.7,22.8,29.5,20.3),(5,'天津',-3.2,10.8,12.7,10.3,17.5,5.6),(6,'重庆',13.6,15,16.8,-3.4,20.3,0),(7,'南京',2.1,4.6,5.6,4.7,9.4,17.9),(8,'武汉',-5.5,0.3,5.3,2,4.6,19.8),(9,'成都',10,14.7,22.7,17.4,20.2,36.4),(10,'西安',4.1,10.9,8.4,0.4,9.3,20.2),(11,'杭州',4.8,6.1,9.1,7.8,12.5,17.9),(12,'厦门',5.7,5.9,6.7,7.7,9.4,10.5);
