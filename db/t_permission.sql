CREATE TABLE `t_permission`(
	`id` INT IDENTITY(1,1) NOT NULL,
	`name` varchar(50) NOT NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;