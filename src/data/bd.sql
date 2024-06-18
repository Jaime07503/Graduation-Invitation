DROP TABLE IF EXISTS Family;
DROP TABLE IF EXISTS Guest;

-- Tabla Familias
CREATE TABLE Family (
    family_id TEXT PRIMARY KEY,
    family_name TEXT
);

-- Tabla Invitados
CREATE TABLE Guest (
    guest_id TEXT PRIMARY KEY,
    guest_name TEXT,
    guest_confirmed BOOLEAN,
    id_family TEXT,
    FOREIGN KEY (id_family) REFERENCES Family(family_id)
);

-- Insertar en la tabla Family
INSERT INTO Family (family_id, family_name) VALUES
(1, 'Agreda Herrera'),
(2, 'Beltran Valenzuela'),
(3, 'Agreda Lucha'),
(4, 'Figueroa Valenzuela'),
(5, 'Rodríguez Valenzuela'),
(6, 'Contreras Cabezas'),
(7, 'Martínez Herrera CH'),
(8, 'Martínez Herrera SL'),
(9, 'Martínez Herrera SS'),
(10, 'Valenzuela Herrera'),
(11, 'Uribe');

-- Insertar en la tabla Guest
INSERT INTO Guest (guest_id, guest_name, guest_confirmed, id_family) VALUES
(1, 'Reina Valenzuela', 1, 1),
(2, 'Yohemir Agreda', 1, 1),
(3, 'Sonia Valenzuela', 1, 1),
(4, 'Mario Martínez', 1, 1),
(5, 'Sandra Herrera', 1, 1),
(6, 'Sandra Valenzuela', 1, 2),
(7, 'Felipe Beltran', 1, 2),
(8, 'Beatriz Agreda', 1, 3),
(9, 'Michelle Agreda', 1, 3),
(10, 'Jeremias Agreda', 0, 3),
(11, 'Oscar Figueroa', 1, 4),
(12, 'Adela Valenzuela', 1, 4),
(13, 'Paola Valenzuela', 1, 4),
(14, 'Nelson Rodríguez', 1, 5),
(15, 'Daisy Valenzuela', 1, 5),
(16, 'Nelson Rodríguez Jr.', 1, 5),
(17, 'Kevin Rodríguez', 1, 5),
(18, 'Idalia de Rodríguez', 1, 5),
(19, 'Pedro Valenzuela', 0, 6),
(20, 'Delmi Contreras', 0, 6),
(21, 'Jennyfer Contreras', 0, 6),
(22, 'Danilo Contreras', 0, 6),
(23, 'Alisson Contreras', 0, 6),
(24, 'Doris Martínez', 1, 7),
(25, 'Gloria Martínez', 1, 7),
(26, 'Yanira Martínez', 1, 7),
(27, 'Rene Martínez', 1, 7),
(28, 'Pamela Martínez', 1, 7),
(29, 'Yuly Martínez', 1, 7),
(30, 'Jimena Martínez', 1, 7),
(31, 'Rosa Martínez', 1, 8),
(32, 'Ana Doris Martínez', 1, 8),
(33, 'Rosa Elena Martínez', 1, 8),
(34, 'Alejandro Martínez', 1, 8),
(35, 'Ana Maria Martínez', 0, 8),
(36, 'Jorge Martínez', 1, 9),
(37, 'Kathya Martínez', 1, 9),
(38, 'Carlos Martínez', 1, 9),
(39, 'Jorgito Martínez', 1, 9),
(40, 'Ashley Martínez', 1, 9),
(41, 'Rocio Valenzuela', 1, 10),
(42, 'Sofía Valenzuela', 1, 10),
(43, 'Kevin', 1, 10),
(44, 'Daniela Valenzuela', 1, 10),
(45, 'Carlos', 1, 10),
(46, 'Nelson Uribe', 0, 11),
(47, 'Bashira Uribe', 0, 11),
(48, 'Rashid Uribe', 0, 11);