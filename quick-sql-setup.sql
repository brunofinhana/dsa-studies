-- Quick SQLite Setup Script
-- Copy and paste this into an online SQL environment or local SQLite

-- This creates all the tables and data from sql-basics.sql
-- Use at: https://sqliteonline.com/ or https://www.db-fiddle.com/

-- 1. CREATE TABLES
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE departments (
    dept_id INTEGER PRIMARY KEY,
    dept_name VARCHAR(50),
    manager_id INTEGER,
    budget DECIMAL(12,2)
);

CREATE TABLE projects (
    project_id INTEGER PRIMARY KEY,
    project_name VARCHAR(100),
    start_date DATE,
    end_date DATE,
    budget DECIMAL(10,2),
    status VARCHAR(20)
);

CREATE TABLE employee_projects (
    emp_id INTEGER,
    project_id INTEGER,
    role VARCHAR(50),
    hours_worked DECIMAL(5,2),
    PRIMARY KEY (emp_id, project_id)
);

-- 2. INSERT SAMPLE DATA
INSERT INTO employees VALUES
(1, 'John', 'Doe', 'john.doe@company.com', 'Engineering', 75000.00, '2020-01-15', 1),
(2, 'Jane', 'Smith', 'jane.smith@company.com', 'Marketing', 65000.00, '2019-03-22', 1),
(3, 'Mike', 'Johnson', 'mike.johnson@company.com', 'Engineering', 80000.00, '2018-07-10', 1),
(4, 'Sarah', 'Wilson', 'sarah.wilson@company.com', 'HR', 60000.00, '2021-02-01', 1),
(5, 'David', 'Brown', 'david.brown@company.com', 'Sales', 70000.00, '2020-06-15', 1),
(6, 'Lisa', 'Garcia', 'lisa.garcia@company.com', 'Engineering', 85000.00, '2017-11-30', 1),
(7, 'Tom', 'Miller', 'tom.miller@company.com', 'Marketing', 62000.00, '2022-01-10', 1),
(8, 'Emma', 'Davis', 'emma.davis@company.com', 'Sales', 68000.00, '2019-09-05', 1);

INSERT INTO departments VALUES
(1, 'Engineering', 3, 500000.00),
(2, 'Marketing', 2, 200000.00),
(3, 'HR', 4, 150000.00),
(4, 'Sales', 5, 300000.00);

INSERT INTO projects VALUES
(101, 'Website Redesign', '2023-01-01', '2023-06-30', 50000.00, 'Completed'),
(102, 'Mobile App Development', '2023-03-15', '2023-12-31', 120000.00, 'In Progress'),
(103, 'Marketing Campaign Q1', '2023-01-01', '2023-03-31', 25000.00, 'Completed'),
(104, 'Database Migration', '2023-07-01', '2023-10-31', 75000.00, 'In Progress'),
(105, 'Sales Training Program', '2023-02-01', '2023-04-30', 15000.00, 'Completed');

INSERT INTO employee_projects VALUES
(1, 101, 'Developer', 120.5),
(1, 102, 'Lead Developer', 200.0),
(3, 101, 'Senior Developer', 150.0),
(3, 104, 'Database Administrator', 180.0),
(6, 102, 'UI/UX Designer', 160.0),
(2, 103, 'Marketing Manager', 100.0),
(7, 103, 'Marketing Specialist', 80.0),
(5, 105, 'Sales Trainer', 60.0),
(8, 105, 'Sales Representative', 40.0);

-- 3. TEST QUERIES - Run these to verify everything works!

-- Basic SELECT
SELECT 'Database setup complete!' AS status;

-- View all employees
SELECT first_name, last_name, department, salary FROM employees;

-- Count employees per department
SELECT department, COUNT(*) as employee_count 
FROM employees 
GROUP BY department;

-- JOIN example - employees with their projects
SELECT 
    e.first_name,
    e.last_name,
    p.project_name,
    ep.role
FROM employees e
JOIN employee_projects ep ON e.id = ep.emp_id
JOIN projects p ON ep.project_id = p.project_id
ORDER BY e.last_name;
