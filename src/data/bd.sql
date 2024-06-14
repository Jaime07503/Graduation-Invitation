DROP TABLE IF EXISTS Family;
DROP TABLE IF EXISTS Guest;

-- Tabla Familias
CREATE TABLE Family (
    family_id TEXT PRIMARY KEY,
    family_name TEXT,
    family_confirmed BOOLEAN
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
INSERT INTO Family (family_id, family_name, family_confirmed) VALUES
(1, 'Agreda Herrera', 0),
(2, 'Agreda Lucha', 0),
(3, 'Figueroa Valenzuela', 0),
(4, 'Rodríguez Valenzuela', 0),
(5, 'Contreras Cabezas', 0),
(6, 'Apellidos Nelson', 0),
(7, 'Martínez Herrera', 0),
(8, 'Valenzuela Herrera', 0);

-- Insertar en la tabla Guest
INSERT INTO Guest (guest_id, guest_name, guest_confirmed, id_family) VALUES
(1, 'Reina Valenzuela', 0, 1),
(2, 'Yohemir Agreda', 0, 1),
(3, 'Sonia Valenzuela', 0, 1),
(4, 'Mario Martínez', 0, 1),
(5, 'Sandra Herrera', 0, 1),
(6, 'Beatriz Agreda', 0, 2),
(7, 'Michelle Agreda', 0, 2),
(8, 'Oscar Figueroa', 1, 3),
(9, 'Adela Valenzuela', 0, 3),
(10, 'Paola Valenzuela', 0, 3),
(11, 'Nelson Rodríguez', 0, 4),
(12, 'Daisy Valenzuela', 0, 4),
(13, 'Nelson Rodríguez Jr.', 0, 4),
(14, 'Kevin Rodríguez', 0, 4),
(15, 'Idalia de Rodríguez', 0, 4),
(16, 'Pedro Valenzuela', 0, 5),
(17, 'Delmi Contreras', 0, 5),
(18, 'Jennyfer Contreras', 0, 5),
(19, 'Danilo Contreras', 0, 5),
(20, 'Alisson Contreras', 0, 5),
(21, 'Nelson', 0, 6),
(22, 'Hija Nelson', 0, 6),
(23, 'Hijo Nelson', 0, 6),
(24, 'Doris Martínez', 0, 7),
(25, 'Gloria Martínez', 0, 7),
(26, 'Yanira Martínez', 0, 7),
(27, 'Pamela Martínez', 0, 7),
(28, 'Rosa Martínez', 0, 7),
(29, 'Ana Martínez', 0, 7),
(30, 'Rosa Martínez (Madrina)', 0, 7),
(31, 'Rocio Valenzuela', 0, 8),
(32, 'Sofía Valenzuela', 0, 8),
(33, 'Kevin', 0, 8),
(34, 'Daniela Valenzuela', 0, 8),
(35, 'Carlos', 0, 8);