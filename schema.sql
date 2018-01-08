DROP DATABASE IF EXISTS hobbycentral_db;
CREATE DATABASE hobbycentral_db;
USE hobbycentral_db;


CREATE TABLE users (
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 username VARCHAR(30) NOT NULL,
 password VARCHAR(20) NOT NULL,
 firstname VARCHAR(30),
 lastname VARCHAR(30),
 email VARCHAR(30),
 PRIMARY KEY (id)
);

CREATE TABLE hobbies (
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 userid INTEGER(11),
 hobbyname VARCHAR(30) NOT NULL,
 category VARCHAR(30) NOT NULL,
 instructions TEXT,
 materials TEXT,
 imagelink TEXT,
 videolink TEXT,
 created DATETIME,
 PRIMARY KEY (id)
);
