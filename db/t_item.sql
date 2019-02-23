create table t_item(
	`id` INT NOT NULL AUTO_INCREMENT,
	`itemNumber` VARCHAR(50) NOT NULL,
	`itemName` VARCHAR(200) NOT NULL,
	`itemPic` VARCHAR(500) NULL,
	`itemPrice` DECIMAL(10,2) NOT NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO t_item (itemNumber, itemName, itemPic, itemPrice, isDeleted, modifyDate, modifyBy, createDate, createBy)
VALUES ('item-10001', 'iphone X 64G Silver', '/static/iphonex.jpg', 8808, 0, now(), 'LEO', now(), 'LEO');

INSERT INTO t_item (itemNumber, itemName, itemPic, itemPrice, isDeleted, modifyDate, modifyBy, createDate, createBy)
VALUES ('item-10002', '芝华士（Chivas）洋酒 12年 苏格兰 威士忌 1000ml', '/static/chivas.jpg', 260, 0, now(), 'LEO', now(), 'LEO');

INSERT INTO t_item (itemNumber, itemName, itemPic, itemPrice, isDeleted, modifyDate, modifyBy, createDate, createBy)
VALUES ('item-10003', '罗兰（Roland）电钢琴FP-30便携式 88键重锤成人演奏 儿童初学入门带蓝牙数码电子电钢 FP30WH白色全套(含木架+三踏板)+全套配件', '/static/piano.jpg', 3990, 0, now(), 'LEO', now(), 'LEO');