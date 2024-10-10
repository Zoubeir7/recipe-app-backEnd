DROP DATABASE IF EXISTS recipe_management;
CREATE DATABASE IF NOT EXISTS recipe_management;
USE recipe_management;

CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name TEXT NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS recipes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    type VARCHAR(10) NOT NULL,
    ingredients TEXT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT
) ENGINE=InnoDB;

INSERT INTO categories (name) 
VALUES 
('Italienne'),
('Mexicaine'),
('Japonaise'),
('Indienne'),
('Française');

INSERT INTO recipes (title, type, ingredients, category_id)
VALUES 
('Salade César', 'entrée', 'Laitue, Poulet, Croutons, Parmesan, Sauce César', 2),
('Pâtes Carbonara', 'plat', 'Pâtes, Crème, Lardons, Parmesan, Oeufs', 2),
('Tiramisu', 'dessert', 'Mascarpone, Café, Biscuits à la cuillère, Cacao, Oeufs', 3),
('Salade de fruits', 'dessert', 'Pommes, Bananes, Oranges, Fraises, Jus de citron', 4),
('Soupe à l\'oignon', 'entrée', 'Oignons, Bouillon, Pain grillé, Fromage râpé', 5);
