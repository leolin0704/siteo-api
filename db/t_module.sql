CREATE TABLE `t_module`(
	`id` INT IDENTITY(1,1) NOT NULL,
	`name` varchar(50) NOT NULL,
	`parentModuleId` INT NULL,
	`key` varchar(50) NOT NULL,
	`order` INT NOT NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;
