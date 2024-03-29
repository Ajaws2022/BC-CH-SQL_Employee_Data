DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    dept_name VARCHAR(30)
    
);

CREATE TABLE roles (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    INDEX role_ind(role_id),
    CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES roles(id),
    manager_id INT,
    INDEX manager_ind(manager_id),
    CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employees(id)ON DELETE SET NULL
    -- FOREIGN KEY (role_id)
    -- REFERENCES roles(id)
    
);

