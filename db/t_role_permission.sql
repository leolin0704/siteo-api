create table t_role_permission(
	`id` INT NOT NULL AUTO_INCREMENT,
	`permissionId` INT NOT NULL,
	`roleId` INT NOT NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;