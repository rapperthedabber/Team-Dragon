DROP DATABASE IF EXISTS group_cards;
CREATE DATABASE group_cards;

USE group_cards;

CREATE TABLE note_cards(
id INT NOT NUll,
first_name VARCHAR(30),
note_description VARCHAR(30),
note VARCHAR(30)
);