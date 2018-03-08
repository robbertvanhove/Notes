/****** Object:  Table [dbo].[Contact]    Script Date: 10/06/2016 9:27:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contact](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Naam] [varchar](100) NULL,
	[Email] [varchar](200) NULL,
 CONSTRAINT [PK_Contact] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([ID], [Naam], [Email]) VALUES (1, N'Erik Van Looy', N'erik.van.looy@woestijnvis.be')
INSERT [dbo].[Contact] ([ID], [Naam], [Email]) VALUES (15, N'Lieven Verstraete', N'lleven.verstraete@deredactie.be')
INSERT [dbo].[Contact] ([ID], [Naam], [Email]) VALUES (16, N'Otto Jan Ham', N'oj.ham@idealewereld.be')
SET IDENTITY_INSERT [dbo].[Contact] OFF
