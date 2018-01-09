DROP DATABASE IF EXISTS hobbycentral_db;

<<<<<<< HEAD
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
 instructions TEXT(4000),
 materials TEXT(4000),
 imagelink VARCHAR(255),
 videolink VARCHAR(255),
 created DATETIME,
 PRIMARY KEY (id)
);
=======
CREATE DATABASE hobbycentral_db;
>>>>>>> a98760c7de86f6ec1a3c72add3ffdbb98ed3622c
