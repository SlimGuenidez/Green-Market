DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  password varchar(50) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  quantity varchar(255) ,
  description varchar(255) ,
  price varchar(255) ,
  image varchar(255) ,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/