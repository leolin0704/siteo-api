CREATE TABLE `t_notice`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` varchar(200) NOT NULL,
	`content` varchar(4000) NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;