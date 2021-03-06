
GO
/****** Object:  Table `TBanner`    Script Date: 02/24/2019 16:44:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE `TBanner`(
	`id` INT IDENTITY(1,1) NOT NULL,
	`Title` varchar(200) NOT NULL,
	`LinkUrl` varchar(500) NULL,
	`ImgSrc` varchar(500) NOT NULL,
	`Order` INT NOT NULL,
	`PositionKey` varchar(30) NOT NULL,
	`IsDeleted` INT NOT NULL,
	`LastUpdateDate` DATETIME NULL,
	`LastUpdateBy` varchar(20) NULL,
	`CreateDate` DATETIME NOT NULL,
	`CreateBy` varchar(20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	`id` ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON `PRIMARY`
) ON `PRIMARY`
GO
SET ANSI_PADDING OFF
GO
ALTER TABLE `TBanner` ADD  DEFAULT ((1)) FOR `Order`
GO
ALTER TABLE `TBanner` ADD  DEFAULT ((0)) FOR `IsDeleted`
GO
ALTER TABLE `TBanner` ADD  DEFAULT (getdate()) FOR `CreateDate`
GO
