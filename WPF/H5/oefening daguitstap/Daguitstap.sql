IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Lid]') AND type in (N'U'))
DROP TABLE [dbo].[Lid]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Lid]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Lid](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Naam] [varchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Voornaam] [varchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[GaatMee] [smallint] NULL,
 CONSTRAINT [PK_Lid] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON)
)
END
GO
SET IDENTITY_INSERT [dbo].[Lid] ON
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (1, N'Verboven', N'Koen', 0)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (2, N'Horemans', N'Piet', 0)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (3, N'Heylen', N'Peter', 0)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (4, N'Daems', N'Chris', 0)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (5, N'Thijs', N'Leo', 1)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (6, N'Van Hoof', N'Ann', 1)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (7, N'Peeters', N'Gerda', 0)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (8, N'Verheyen', N'Dirk', 1)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (9, N'Timmermans', N'Wisa', 0)
INSERT [dbo].[Lid] ([ID], [Naam], [Voornaam], [GaatMee]) VALUES (10, N'Van Mol', N'Elien', 0)
SET IDENTITY_INSERT [dbo].[Lid] OFF
