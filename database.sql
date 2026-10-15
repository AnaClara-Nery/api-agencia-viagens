CREATE DATABASE IF NOT EXISTS agencia_viagens;
USE agencia_viagens;

CREATE TABLE IF NOT EXISTS pacote (
  id INT AUTO_INCREMENT PRIMARY KEY,
  destino VARCHAR(100) NOT NULL,
  dias INT NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

INSERT INTO pacote (destino, dias, preco) VALUES
  ('Fernando de Noronha', 7, 8900.00),
  ('Gramado', 4, 2350.50),
  ('Lisboa', 10, 15400.00);