create table t_shipping(
	`id` INT NOT NULL AUTO_INCREMENT,
	`shippingName` VARCHAR(50) NOT NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO t_shipping (shippingName, isDeleted, modifyDate, modifyBy, createDate, createBy)
	VALUES ('顺丰速递', 0, NOW(), 'LEO', NOW(), 'LEO');
	
INSERT INTO t_shipping (shippingName, isDeleted, modifyDate, modifyBy, createDate, createBy)
	VALUES ('圆通速递', 0, NOW(), 'LEO', NOW(), 'LEO');

INSERT INTO t_shipping (shippingName, isDeleted, modifyDate, modifyBy, createDate, createBy)
	VALUES ('天天快递', 0, NOW(), 'LEO', NOW(), 'LEO');