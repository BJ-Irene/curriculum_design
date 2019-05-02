# Host: localhost  (Version 5.7.20-log)
# Date: 2018-07-16 14:33:48
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "diffculty"
#

DROP TABLE IF EXISTS `diffculty`;
CREATE TABLE `diffculty` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `degree` double DEFAULT NULL,
  `column` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

#
# Data for table "diffculty"
#

INSERT INTO `diffculty` VALUES (1,'太原','middle',0.035,1),(2,'长沙','middle',0.0348,1),(3,'呼和浩特','west',0.0288,1),(4,'遵义','west',0.0271,1),(5,'贵阳','west',0.0154,1),(6,'绵阳','west',0.0985,2),(7,'哈尔滨','middle',0.0965,2),(8,'湘潭','middle',0.0964,2),(9,'郑州','middle',0.0961,2),(10,'嘉峪关','west',0.0851,2),(11,'南京','east',0.0527,2),(12,'洛阳','middle',0.0368,2),(13,'芜湖','middle',0.0367,2),(14,'南昌','middle',0.1108,3),(15,'沈阳','east',0.1094,3),(16,'乌鲁木齐','west',0.1086,3),(17,'吉林','middle',0.1082,3),(18,'昆明','west',0.1079,3),(19,'兰州','west',0.1034,3),(20,'银州','west',0.1005,3),(21,'石家庄','east',0.1235,4),(22,'福州','east',0.1222,4),(23,'重庆','west',0.1209,4),(24,'西宁','west',0.1199,4),(25,'宁波','east',0.1158,4),(26,'合肥','middle',0.1155,4),(27,'长春','middle',0.1152,4),(28,'九江','middle',0.1128,4),(29,'南宁','west',0.1123,4),(30,'秦皇岛','east',0.1391,5),(31,'厦门','east',0.1388,5),(32,'苏州','east',0.1383,5),(33,'杭州','east',0.1363,5),(34,'海口','east',0.134,5),(35,'天津','east',0.1318,5),(36,'济南','east',0.1307,5),(37,'成都','west',0.1296,5),(38,'武汉','middle',0.1264,5),(39,'西安','west',0.1238,5),(40,'上海','east',0.1691,6),(41,'深圳','east',0.16,6),(42,'广州','east',0.1575,6),(43,'北京','east',0.1527,6),(44,'青岛','east',0.146,6),(45,'大连','east',0.1406,6);
