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
(7, 'Martínez Herrera'),
(8, 'Valenzuela Herrera'),
(9, 'Uribe');

-- Insertar en la tabla Guest
INSERT INTO Guest (guest_id, guest_name, guest_confirmed, id_family) VALUES
(1, 'Reina Valenzuela', 1, 1),
(2, 'Yohemir Agreda', 1, 1),
(3, 'Sonia Valenzuela', 1, 1),
(4, 'Mario Martínez', 1, 1),
(5, 'Sandra Herrera', 1, 1),
(6, 'Sandra Valenzuela', 0, 2),
(7, 'Felipe Beltran', 0, 2),
(8, 'Beatriz Agreda', 0, 3),
(9, 'Michelle Agreda', 0, 3),
(10, 'Oscar Figueroa', 1, 4),
(11, 'Adela Valenzuela', 1, 4),
(12, 'Paola Valenzuela', 1, 4),
(13, 'Nelson Rodríguez', 1, 5),
(14, 'Daisy Valenzuela', 1, 5),
(15, 'Nelson Rodríguez Jr.', 1, 5),
(16, 'Kevin Rodríguez', 1, 5),
(17, 'Idalia de Rodríguez', 1, 5),
(18, 'Pedro Valenzuela', 0, 6),
(19, 'Delmi Contreras', 0, 6),
(20, 'Jennyfer Contreras', 0, 6),
(21, 'Danilo Contreras', 0, 6),
(22, 'Alisson Contreras', 0, 6),
(23, 'Doris Martínez', 0, 7),
(24, 'Gloria Martínez', 0, 7),
(25, 'Yanira Martínez', 0, 7),
(26, 'Pamela Martínez', 0, 7),
(27, 'Rosa Martínez', 0, 7),
(28, 'Ana Martínez', 0, 7),
(29, 'Rosa Martínez (Madrina)', 0, 7),
(30, 'Rocio Valenzuela', 1, 8),
(31, 'Sofía Valenzuela', 1, 8),
(32, 'Kevin', 1, 8),
(33, 'Daniela Valenzuela', 1, 8),
(34, 'Carlos', 1, 8),
(35, 'Nelson Uribe', 0, 9),
(36, 'Bashira Uribe', 0, 9),
(37, 'Rashid Uribe', 0, 9);