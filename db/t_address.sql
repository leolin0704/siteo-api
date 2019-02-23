create table t_address(
	`id` INT NOT NULL AUTO_INCREMENT,
	`contactName` VARCHAR(50) NOT NULL,
	`contactPhone` VARCHAR(50) NOT NULL,
	`address` VARCHAR(500) NOT NULL,
	`isDefault` INT NOT NULL DEFAULT 0,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO t_address (contactName, contactPhone, address, isDefault, isDeleted, modifyDate, modifyBy, createDate, createBy)
VALUES ('林立', '1859191****', '陕西省西安市雁塔区天谷八路环普产业科技园', 0, 0, now(), 'LEO', now(), 'LEO');

INSERT INTO t_address (contactName, contactPhone, address, isDefault, isDeleted, modifyDate, modifyBy, createDate, createBy)
VALUES ('林立', '1859191****', '陕西省西安市灞桥区长乐东路御锦城', 1, 0, now(), 'LEO', now(), 'LEO');

INSERT INTO t_address (contactName, contactPhone, address, isDefault, isDeleted, modifyDate, modifyBy, createDate, createBy)
VALUES ('王俐力', '1809118****', '陕西省西安市雁塔区天谷八路环普产业科技园', 0, 0, now(), 'LEO', now(), 'LEO');