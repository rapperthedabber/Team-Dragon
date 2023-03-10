
DROP DATABASE IF EXISTS friends_db;
CREATE DATABASE friends_db;

USE friends_db

CREATE TABLE note_cards(
id INT NOT NUll,
first_name VARCHAR(30),
note_description VARCHAR(30),
note VARCHAR(30)
);