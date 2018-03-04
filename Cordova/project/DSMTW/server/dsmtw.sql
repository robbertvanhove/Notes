CREATE TABLE Vraag (
    id int NOT NULL AUTO_INCREMENT,
    vraag varchar(255),
    type varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE Antwoord (
    id int NOT NULL AUTO_INCREMENT,
    antwoord varchar(255),
    vraagId int,
    PRIMARY KEY (id),
    FOREIGN KEY (vraagId) REFERENCES Vraag (id) 
);

CREATE TABLE Puzzel (
    id int NOT NULL AUTO_INCREMENT,
    oplossing varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE Puzzelstuk(
    id int NOT NULL AUTO_INCREMENT,
    stuk varchar(255),
    puzzelId int,
    PRIMARY KEY (id),
    FOREIGN KEY (puzzelId) REFERENCES Puzzel (id)

);

INSERT INTO Vraag (vraag, type) VALUES ("Wat weet je over Elvis?", "OD");

INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Android", 2);
INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Zoekmachine", 2);
INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Gmail", 2);
INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Drive", 2);

INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Geel", 3);
INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Hogeschool", 3);
INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Gmail", 3);
INSERT INTO Antwoord (antwoord, vraagId) VALUES ("Drive", 3);

INSERT INTO Puzzel (id, oplossing) VALUES (NULL, "Deliberatie");
INSERT INTO Puzzelstuk (id, stuk, puzzelId) VALUES (NULL, "In de leraarskamer", 4);
INSERT INTO Puzzelstuk (id, stuk, puzzelId) VALUES (NULL, "A, B, C-attest", 4);
INSERT INTO Puzzelstuk (id, stuk, puzzelId) VALUES (NULL, "Na examens", 4);
INSERT INTO Puzzelstuk (id, stuk, puzzelId) VALUES (NULL, "Beraadslaging", 4);