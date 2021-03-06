
CREATE TABLE `t_admin_user`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`account` varchar(50) NOT NULL,
	`password` varchar(100) NULL,
	`status` char(1) NOT NULL,
	`avatar` varchar(200) NULL,
	`lastLoginIP` varchar(64) NULL,
	`lastLoginDate` DATETIME NULL,
	`token` varchar(50) NULL,
	`tokenExpired` DATETIME NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;