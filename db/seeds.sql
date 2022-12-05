INSERT INTO department(id, names)
VALUES (1, 'Sales'),
       (2, 'Accounting')
       (3, 'Marketing')
       (4, 'Customer_Service')
       (5, 'Legal');


INSERT INTO roles(id, title, salary, department_id)
VALUES (1, 'Sales_Manager', 150000, 1),
       (2, 'Salesman', 95000, 1),
       (3, 'Account_Manager', 100000, 2),
       (4, 'Accountant', 75000, 2),
       (5, 'Marketing_Coordinator', 80000, 3),
       (6, 'Designer', 80000, 3),
       (7, 'Client_Relations', 80000, 4),
       (8, 'Customer_Service_Rep', 65000, 4),
       (9, 'Attorney', 125000, 5),
       (10, 'Lawyer', 100000, 5);

INSERT INTO employees(id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Doe', 1),
       (2, 'Bill', 'Baker', 2, 1),
       (3, 'Kevin', 'Nguyen', 3),
       (4, 'Trisha', 'Johnson', 4, 3),
       (5, 'Henry', 'Patel', 5),
       (6, 'Chance', 'Estrada', 6, 5),
       (7, 'Susie', 'Usman', 7),
       (8, 'Gracie', 'Rodriguez', 8, 7),
       (9, 'Tom', 'Platz', 9),
       (10, 'Leticia', 'Wallace', 10, 9);



