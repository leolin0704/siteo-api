
GO
/****** Object:  Table `TNewsPictures`    Script Date: 02/24/2019 16:44:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE `TNewsPictures`(
	`id` INT IDENTITY(1,1) NOT NULL,
	`NewsId INT NOT NULL,
	`Title` varchar(50) NULL,
	`ImgSrc` varchar(300) NULL,
	`LinkUrl` varchar(300) NULL,
	`Order` INT NOT NULL,
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
ALTER TABLE `TNewsPictures`  WITH CHECK ADD  CONSTRAINT `FK_TNewsPictures_NewsId FOREIGN KEY(`NewsId)
REFERENCES `TNews` (`id`)
GO
ALTER TABLE `TNewsPictures` CHECK CONSTRAINT `FK_TNewsPictures_NewsId
GO
