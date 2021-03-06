
GO
/****** Object:  Table `TNews`    Script Date: 02/24/2019 16:44:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE `TNews`(
	`id` INT IDENTITY(1,1) NOT NULL,
	`Title` varchar(50) NULL,
	`Content` varchar(4000) NULL,
	`ReleaseDate` DATETIME NULL,
	`Status` INT NOT NULL,
	`SetToTop` INT NULL,
	`TypeId INT NOT NULL,
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
ALTER TABLE `TNews`  WITH CHECK ADD  CONSTRAINT `FK_TNews_TypeId FOREIGN KEY(`TypeId)
REFERENCES `TNewsType` (`id`)
GO
ALTER TABLE `TNews` CHECK CONSTRAINT `FK_TNews_TypeId
GO
