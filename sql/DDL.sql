CREATE TABLE `activity` (
  `id` varchar(100) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `council` (
  `id` varchar(100) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;




CREATE TABLE `event_type` (
  `id` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `poc_details` (
  `id` varchar(100) NOT NULL,
  `cts_id` varchar(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `school_details` (
  `id` varchar(100) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;




CREATE TABLE `event_details` (
  `id` varchar(100) NOT NULL,
  `activity_id` varchar(100) NOT NULL,
  `school_id` varchar(100) NOT NULL,
  `poc_1_id` varchar(100) NOT NULL,
  `poc_2_id` varchar(100) DEFAULT NULL,
  `poc_3_id` varchar(100) DEFAULT NULL,
  `event_date` date NOT NULL,
  `event_desc` varchar(500) DEFAULT NULL,
  `total_hrs` varchar(50) NOT NULL,
  `no_of_lives_impct` int(11) DEFAULT NULL,
  `type_of_event` varchar(200) DEFAULT NULL,
  `council_id` varchar(100) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (activity_id) REFERENCES activity(id),
  FOREIGN KEY (school_id) REFERENCES school_details(id),
  FOREIGN KEY (poc_1_id) REFERENCES poc_details(id),
  FOREIGN KEY (poc_2_id) REFERENCES poc_details(id),
  FOREIGN KEY (poc_3_id) REFERENCES poc_details(id),
  FOREIGN KEY (type_of_event) REFERENCES event_type(id),
  FOREIGN KEY (council_id) REFERENCES council(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `volunteer` (
  `id` varchar(100) NOT NULL,
  `vol_id` varchar(100) NOT NULL,
  `vol_name` varchar(100) NOT NULL,
  `council_id` varchar(100) NOT NULL,
  `vol_desc` varchar(500) DEFAULT NULL,
  `vol_hours_spent` decimal(10,2) DEFAULT NULL,
  `event_id` varchar(100) NOT NULL,
    `created_on` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (event_id) REFERENCES event_details(id),
  FOREIGN KEY (council_id) REFERENCES council(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;





/*
-- Query: SELECT * FROM outreach.activity
-- Date: 2016-10-17 21:14
*/
INSERT INTO `activity` (`id`,`name`,`description`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('100','Test','school desc','2016-10-17 20:25:15','2016-10-17 20:25:15','Amit','Amit');
INSERT INTO `activity` (`id`,`name`,`description`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('101','Test2','school desc','2016-10-17 20:25:15','2016-10-17 20:25:15','Amit','Amit');
INSERT INTO `activity` (`id`,`name`,`description`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('102','Test3','school desc','2016-10-17 20:25:15','2016-10-17 20:25:15','Amit','Amit');


/*
-- Query: SELECT * FROM outreach.council
-- Date: 2016-10-17 21:14
*/
INSERT INTO `council` (`id`,`name`,`desc`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1001','PUNE','PUNE','2016-10-17 20:27:16','2016-10-17 20:27:16','AMIT','AMIT');
INSERT INTO `council` (`id`,`name`,`desc`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1002','Delhi','Delhi','2016-10-17 20:27:16','2016-10-17 20:27:16','AMIT','AMIT');
INSERT INTO `council` (`id`,`name`,`desc`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1003','Mumbai','Mumbai','2016-10-17 20:27:16','2016-10-17 20:27:16','AMIT','AMIT');


/*
-- Query: SELECT * FROM outreach.event_type
-- Date: 2016-10-17 21:15
*/
INSERT INTO `event_type` (`id`,`type`,`desc`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10001','SCHHOL','SCHOOL','2016-10-17 20:28:23','2016-10-17 20:28:23','AMIT','AMIT');
INSERT INTO `event_type` (`id`,`type`,`desc`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10002','KMM','KMM','2016-10-17 20:28:23','2016-10-17 20:28:23','AMIT','AMIT');
INSERT INTO `event_type` (`id`,`type`,`desc`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10003','OLD AGE','OLD AGE','2016-10-17 20:28:23','2016-10-17 20:28:23','AMIT','AMIT');


/*
-- Query: SELECT * FROM outreach.poc_details
-- Date: 2016-10-17 21:15
*/
INSERT INTO `poc_details` (`id`,`cts_id`,`name`,`location`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10101','414567','AMIT Chaudhary1','PUNE','2016-10-17 20:30:09','2016-10-17 20:30:09','AMIT','AMIT');
INSERT INTO `poc_details` (`id`,`cts_id`,`name`,`location`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10102','414568','AMIT Chaudhary2','PUNE','2016-10-17 20:30:09','2016-10-17 20:30:09','AMIT','AMIT');
INSERT INTO `poc_details` (`id`,`cts_id`,`name`,`location`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10103','414569','AMIT Chaudhary3','PUNE','2016-10-17 20:30:09','2016-10-17 20:30:09','AMIT','AMIT');


/*
-- Query: SELECT * FROM outreach.school_details
-- Date: 2016-10-17 21:15
*/
INSERT INTO `school_details` (`id`,`name`,`location`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000011','AUNDH School','PUNE','2016-10-17 20:31:05','2016-10-17 20:31:05','AMIT','AMIT');
INSERT INTO `school_details` (`id`,`name`,`location`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000012','HInjwadi School','PUNE','2016-10-17 20:31:05','2016-10-17 20:31:05','AMIT','AMIT');
INSERT INTO `school_details` (`id`,`name`,`location`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000013','CTS School','PUNE','2016-10-17 20:31:05','2016-10-17 20:31:05','AMIT','AMIT');



/*
-- Query: SELECT * FROM outreach.event_details
-- Date: 2016-10-17 21:08
*/
INSERT INTO `event_details` (`id`,`activity_id`,`school_id`,`poc_1_id`,`poc_2_id`,`poc_3_id`,`event_date`,`event_desc`,`total_hrs`,`no_of_lives_impct`,`type_of_event`,`council_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10000011','100','1000011','10101','10102','10103','2016-10-17','TESTING',5.00,50,'10001','1001','2016-10-17 20:37:43','2016-10-17 20:37:43','AMIT','AMIT');
INSERT INTO `event_details` (`id`,`activity_id`,`school_id`,`poc_1_id`,`poc_2_id`,`poc_3_id`,`event_date`,`event_desc`,`total_hrs`,`no_of_lives_impct`,`type_of_event`,`council_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10000012','100','1000011','10101','10102','10103','2016-10-17','TESTING',5.00,50,'10001','1001','2016-10-17 20:38:10','2016-10-17 20:38:10','AMIT','AMIT');
INSERT INTO `event_details` (`id`,`activity_id`,`school_id`,`poc_1_id`,`poc_2_id`,`poc_3_id`,`event_date`,`event_desc`,`total_hrs`,`no_of_lives_impct`,`type_of_event`,`council_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10000013','100','1000011','10101','10102','10103','2016-10-17','TESTING',5.00,50,'10001','1001','2016-10-17 20:38:20','2016-10-17 20:38:20','AMIT','AMIT');
INSERT INTO `event_details` (`id`,`activity_id`,`school_id`,`poc_1_id`,`poc_2_id`,`poc_3_id`,`event_date`,`event_desc`,`total_hrs`,`no_of_lives_impct`,`type_of_event`,`council_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('10000014','100','1000011','10101','10102','10103','2016-10-17','TESTING',5.00,50,'10001','1001','2016-10-17 20:38:24','2016-10-17 20:38:24','AMIT','AMIT');
INSERT INTO `event_details` (`id`,`activity_id`,`school_id`,`poc_1_id`,`poc_2_id`,`poc_3_id`,`event_date`,`event_desc`,`total_hrs`,`no_of_lives_impct`,`type_of_event`,`council_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('100000145','100','1000011','10101','10102','10103','2016-10-17','TESTING',5.00,50,'10001','1001','2016-10-17 20:38:29','2016-10-17 20:38:29','AMIT','AMIT');



/*
-- Query: SELECT * FROM outreach.volunteer
-- Date: 2016-10-17 21:09
*/
INSERT INTO `volunteer` (`id`,`vol_id`,`vol_name`,`council_id`,`vol_desc`,`vol_hours_spent`,`event_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000101','414567','Amit Chaudhary','1001','Testing Data',5.00,'10000011','2016-10-17 20:41:33','2016-10-17 20:41:33','AMIT','AMIT');
INSERT INTO `volunteer` (`id`,`vol_id`,`vol_name`,`council_id`,`vol_desc`,`vol_hours_spent`,`event_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000102','414567','Amit Chaudhary','1001','Testing Data',5.00,'10000012','2016-10-17 20:41:48','2016-10-17 20:41:48','AMIT','AMIT');
INSERT INTO `volunteer` (`id`,`vol_id`,`vol_name`,`council_id`,`vol_desc`,`vol_hours_spent`,`event_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000103','414567','Amit Chaudhary','1001','Testing Data',5.00,'10000013','2016-10-17 20:42:03','2016-10-17 20:42:03','AMIT','AMIT');
INSERT INTO `volunteer` (`id`,`vol_id`,`vol_name`,`council_id`,`vol_desc`,`vol_hours_spent`,`event_id`,`created_on`,`updated_on`,`created_by`,`updated_by`) VALUES ('1000104','414567','Amit Chaudhary','1001','Testing Data',5.00,'10000014','2016-10-17 20:42:14','2016-10-17 20:42:14','AMIT','AMIT');



