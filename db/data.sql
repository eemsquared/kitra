CREATE TABLE IF NOT EXISTS treasures (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    latitude FLOAT(53) NOT NULL,
    longitude FLOAT(53) NOT NULL,
    name VARCHAR(50) NOT NULL
) AUTO_INCREMENT = 100;

INSERT INTO treasures (latitude, longitude, name)
VALUES
(14.54376481, 121.0199117, 'T1'),
(14.55320766, 121.0557745, 'T2'),
(14.54464357, 121.0203656, 'T3'),
(14.58726159, 120.9795048, 'T4'),
(14.57320327, 121.0230904, 'T5'),
(14.52311313, 121.0194573, 'T6'),
(14.60242292, 121.0115134, 'T7'),
(14.60857463, 121.0185514, 'T8'),
(14.49111434, 121.0437482, 'T9'),
(14.54455953, 121.1060883, 'T10'),
(14.58798141, 121.058208, 'T11'),
(14.54886493, 121.0336393, 'T12'),
(14.53715059, 120.9904302, 'T13'),
(14.52579666, 121.0208688, 'T14'),
(14.51709988, 120.9810021, 'T15'),
(14.50200687, 120.9916181, 'T16'),
(14.52112441, 121.0427714, 'T17'),
(14.47720766, 120.9867927, 'T18');

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE
) AUTO_INCREMENT = 3000;


INSERT INTO
    users (name, age, password, email)
VALUES
    ('U1', 21, '123123', 'u1@kitra.abc'),
    ('U2', 51, '234234', 'u2@kitra.abc'),
    ('U3', 31, '345345', 'u3@kitra.abc'),
    ('U4', 18, '456456', 'u4@kitra.abc'),
    ('U5', 21, '567567', 'u5@kitra.abc'),
    ('U6', 35, '678678', 'u6@kitra.abc');

CREATE TABLE IF NOT EXISTS money_values (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    treasure_id INT NOT NULL,
    amt INT NOT NULL,
    FOREIGN KEY (treasure_id) REFERENCES treasures(id)
);

INSERT INTO
    money_values (treasure_id, amt)
VALUES
    (100, 15),
    (101, 10),
    (102, 15),
    (103, 15),
    (104, 10),
    (105, 15),
    (106, 15),
    (107, 10),
    (108, 15),
    (109, 15),
    (110, 10),
    (111, 15),
    (112, 15),
    (113, 10),
    (114, 15),
    (115, 15),
    (116, 10),
    (117, 15),
    (100, 20),
    (101, 25),
    (102, 20),
    (103, 25),
    (107, 30),
    (108, 30),
    (109, 30);