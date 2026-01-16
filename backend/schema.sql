CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role VARCHAR(100) NOT NULL
);

INSERT INTO employees (first_name, last_name, role) VALUES 
('John', 'Smith', 'Lead Developer'),
('Jason', 'Johnson', 'UX Designer'),
('Charlie', 'critical', 'Product Manager'),
('Diana', 'Eliot', 'QA Engineer'),
('Ethan', 'Hunt', 'DevOps Specialist');