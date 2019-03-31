CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers(
    id int not null auto_increment,
    burger_name varchar(225) not null,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
)

