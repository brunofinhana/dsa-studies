-- ============================================
-- SQL BASICS - Learning and Practice Guide
-- ============================================

-- This file contains SQL fundamentals, examples, and practice exercises
-- You can run these queries in any SQL environment (MySQL, PostgreSQL, SQLite, etc.)

-- ============================================
-- 1. DATABASE AND TABLE CREATION
-- ============================================

-- Create a sample database (syntax may vary by SQL engine)
-- CREATE DATABASE company_db;
-- USE company_db;

-- Create sample tables for practice
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

-- ============================================
-- 2. INSERT DATA (Sample Records)
-- ============================================

-- Insert sample employees
INSERT INTO employees (id, first_name, last_name, email, department, salary, hire_date) VALUES
(1, 'John', 'Doe', 'john.doe@company.com', 'Engineering', 75000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 'jane.smith@company.com', 'Marketing', 65000.00, '2019-03-22'),
(3, 'Mike', 'Johnson', 'mike.johnson@company.com', 'Engineering', 80000.00, '2018-07-10'),
(4, 'Sarah', 'Wilson', 'sarah.wilson@company.com', 'HR', 60000.00, '2021-02-01'),
(5, 'David', 'Brown', 'david.brown@company.com', 'Sales', 70000.00, '2020-06-15'),
(6, 'Lisa', 'Garcia', 'lisa.garcia@company.com', 'Engineering', 85000.00, '2017-11-30'),
(7, 'Tom', 'Miller', 'tom.miller@company.com', 'Marketing', 62000.00, '2022-01-10'),
(8, 'Emma', 'Davis', 'emma.davis@company.com', 'Sales', 68000.00, '2019-09-05');

-- Insert departments
INSERT INTO departments (dept_id, dept_name, manager_id, budget) VALUES
(1, 'Engineering', 3, 500000.00),
(2, 'Marketing', 2, 200000.00),
(3, 'HR', 4, 150000.00),
(4, 'Sales', 5, 300000.00);

-- Insert projects
INSERT INTO projects (project_id, project_name, start_date, end_date, budget, status) VALUES
(101, 'Website Redesign', '2023-01-01', '2023-06-30', 50000.00, 'Completed'),
(102, 'Mobile App Development', '2023-03-15', '2023-12-31', 120000.00, 'In Progress'),
(103, 'Marketing Campaign Q1', '2023-01-01', '2023-03-31', 25000.00, 'Completed'),
(104, 'Database Migration', '2023-07-01', '2023-10-31', 75000.00, 'In Progress'),
(105, 'Sales Training Program', '2023-02-01', '2023-04-30', 15000.00, 'Completed');

-- Insert employee-project relationships
INSERT INTO employee_projects (emp_id, project_id, role, hours_worked) VALUES
(1, 101, 'Developer', 120.5),
(1, 102, 'Lead Developer', 200.0),
(3, 101, 'Senior Developer', 150.0),
(3, 104, 'Database Administrator', 180.0),
(6, 102, 'UI/UX Designer', 160.0),
(2, 103, 'Marketing Manager', 100.0),
(7, 103, 'Marketing Specialist', 80.0),
(5, 105, 'Sales Trainer', 60.0),
(8, 105, 'Sales Representative', 40.0);

-- ============================================
-- 3. BASIC SELECT QUERIES
-- ============================================

-- Select all records from employees table
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary FROM employees;

-- Select with aliases
SELECT 
    first_name AS "First Name",
    last_name AS "Last Name",
    salary AS "Annual Salary"
FROM employees;

-- ============================================
-- 4. WHERE CLAUSE - Filtering Data
-- ============================================

-- Filter by department
SELECT * FROM employees WHERE department = 'Engineering';

-- Filter by salary range
SELECT first_name, last_name, salary 
FROM employees 
WHERE salary BETWEEN 60000 AND 80000;

-- Filter by multiple conditions
SELECT * FROM employees 
WHERE department = 'Engineering' AND salary > 75000;

-- Filter with OR condition
SELECT * FROM employees 
WHERE department = 'Engineering' OR department = 'Sales';

-- Filter with IN operator
SELECT * FROM employees 
WHERE department IN ('Engineering', 'Marketing', 'Sales');

-- Filter with LIKE (pattern matching)
SELECT * FROM employees WHERE email LIKE '%@company.com';
SELECT * FROM employees WHERE first_name LIKE 'J%';

-- Filter with NULL values
SELECT * FROM employees WHERE email IS NOT NULL;

-- ============================================
-- 5. SORTING DATA - ORDER BY
-- ============================================

-- Sort by salary (ascending - default)
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary;

-- Sort by salary (descending)
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC;

-- Sort by multiple columns
SELECT first_name, last_name, department, salary 
FROM employees 
ORDER BY department, salary DESC;

-- ============================================
-- 6. AGGREGATE FUNCTIONS
-- ============================================

-- Count records
SELECT COUNT(*) AS total_employees FROM employees;
SELECT COUNT(*) AS engineering_employees FROM employees WHERE department = 'Engineering';

-- Calculate averages
SELECT AVG(salary) AS average_salary FROM employees;
SELECT department, AVG(salary) AS avg_dept_salary 
FROM employees 
GROUP BY department;

-- Find min and max
SELECT MIN(salary) AS lowest_salary, MAX(salary) AS highest_salary FROM employees;

-- Sum calculations
SELECT SUM(salary) AS total_payroll FROM employees;
SELECT department, SUM(salary) AS dept_payroll 
FROM employees 
GROUP BY department;


-- Ago 12 2025
-- ============================================
-- 7. GROUP BY and HAVING
-- ============================================

-- Group by department
SELECT department, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department;

-- Group by department with average salary
SELECT 
    department,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees 
GROUP BY department;

-- Using HAVING to filter grouped results
SELECT department, AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 65000;

-- ============================================
-- 8. JOINS - Combining Tables
-- ============================================

-- INNER JOIN - employees with their project assignments
SELECT 
    e.first_name,
    e.last_name,
    p.project_name,
    ep.role,
    ep.hours_worked
FROM employees e
INNER JOIN employee_projects ep ON e.id = ep.emp_id
INNER JOIN projects p ON ep.project_id = p.project_id;

-- LEFT JOIN - all employees, even those without projects
SELECT 
    e.first_name,
    e.last_name,
    e.department,
    p.project_name
FROM employees e
LEFT JOIN employee_projects ep ON e.id = ep.emp_id
LEFT JOIN projects p ON ep.project_id = p.project_id;

-- Multiple table join with department info
SELECT 
    e.first_name,
    e.last_name,
    d.dept_name,
    d.budget AS dept_budget,
    e.salary
FROM employees e
INNER JOIN departments d ON e.department = d.dept_name;

-- ============================================
-- 9. SUBQUERIES
-- ============================================

-- Find employees with salary above average
SELECT first_name, last_name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Find employees in departments with high budgets
SELECT first_name, last_name, department 
FROM employees 
WHERE department IN (
    SELECT dept_name 
    FROM departments 
    WHERE budget > 200000
);

-- Correlated subquery - employees with highest salary in their department
SELECT e1.first_name, e1.last_name, e1.department, e1.salary
FROM employees e1
WHERE e1.salary = (
    SELECT MAX(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);

-- ============================================
-- 10. UPDATE AND DELETE OPERATIONS
-- ============================================

-- Update single record
-- UPDATE employees SET salary = 82000 WHERE id = 3;

-- Update multiple records
-- UPDATE employees SET salary = salary * 1.05 WHERE department = 'Engineering';

-- Update with conditions
-- UPDATE employees 
-- SET is_active = FALSE 
-- WHERE hire_date < '2018-01-01';

-- Delete records (be careful!)
-- DELETE FROM employees WHERE is_active = FALSE;

-- ============================================
-- PRACTICE EXERCISES
-- ============================================

-- 📝 EXERCISE 1: Basic Queries
-- Write queries to answer these questions:

-- 1.1) Find all employees hired after 2020
SELECT first_name, last_name, hire_date 
FROM employees 
WHERE hire_date > '2020-01-01';

-- 1.2) Find employees whose first name starts with 'S'
-- YOUR ANSWER:


-- 1.3) Count how many employees are in each department
-- YOUR ANSWER:


-- 1.4) Find the highest paid employee
-- YOUR ANSWER:


-- 📝 EXERCISE 2: Intermediate Queries
-- 2.1) Find departments with more than 2 employees
-- YOUR ANSWER:


-- 2.2) Calculate the total hours worked on each project
-- YOUR ANSWER:


-- 2.3) Find employees who are working on more than one project
-- YOUR ANSWER:


-- 2.4) Find the average salary by department, ordered from highest to lowest
-- YOUR ANSWER:


-- 📝 EXERCISE 3: Advanced Queries
-- 3.1) Find employees who earn more than the average salary in their department
-- YOUR ANSWER:


-- 3.2) List all projects with the total hours worked and number of employees assigned
-- YOUR ANSWER:


-- 3.3) Find employees who are not assigned to any project
-- YOUR ANSWER:


-- 3.4) Calculate the percentage of total budget each department represents
-- YOUR ANSWER:


-- ============================================
-- COMMON SQL PATTERNS AND TIPS
-- ============================================

-- 🔹 CASE STATEMENTS (Conditional Logic)
SELECT 
    first_name,
    last_name,
    salary,
    CASE 
        WHEN salary > 80000 THEN 'High'
        WHEN salary > 65000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_category
FROM employees;

-- 🔹 DATE FUNCTIONS (varies by SQL engine)
-- MySQL/PostgreSQL examples:
-- SELECT first_name, YEAR(hire_date) AS hire_year FROM employees;
-- SELECT * FROM employees WHERE DATEDIFF(CURDATE(), hire_date) > 365;

-- 🔹 STRING FUNCTIONS
SELECT 
    UPPER(first_name) AS first_upper,
    LOWER(last_name) AS last_lower,
    CONCAT(first_name, ' ', last_name) AS full_name,
    LENGTH(email) AS email_length
FROM employees;

-- 🔹 WINDOW FUNCTIONS (Advanced)
-- Rank employees by salary within their department
SELECT 
    first_name,
    last_name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_salary_rank
FROM employees;

-- 🔹 Common Table Expressions (CTEs)
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 70000
),
dept_stats AS (
    SELECT department, COUNT(*) as emp_count, AVG(salary) as avg_sal
    FROM high_earners
    GROUP BY department
)
SELECT * FROM dept_stats WHERE emp_count > 1;

-- ============================================
-- SQL BEST PRACTICES
-- ============================================

/*
✅ DO:
- Use meaningful aliases for tables and columns
- Format your SQL for readability (indentation, line breaks)
- Use specific column names instead of SELECT *
- Add comments to explain complex queries
- Use parameterized queries to prevent SQL injection
- Create indexes on frequently queried columns

❌ DON'T:
- Use SELECT * in production code
- Forget to use WHERE clauses (avoid full table scans)
- Use functions in WHERE clauses on large tables
- Forget to backup before running UPDATE/DELETE
- Use reserved words as column names
- Write overly complex queries without breaking them down
*/

-- ============================================
-- BONUS: PRACTICE SCENARIOS
-- ============================================

-- 🎯 Scenario 1: HR Report
-- Create a report showing:
-- - Employee name, department, years of service, salary
-- - Mark employees due for review (hired > 2 years ago)

-- 🎯 Scenario 2: Project Management
-- Create a dashboard showing:
-- - Projects with their total hours and costs
-- - Overallocated employees (>40 hours/week average)

-- 🎯 Scenario 3: Department Analysis
-- Compare departments by:
-- - Average salary, total employees, budget utilization
-- - Identify departments that need attention

-- Keep practicing with real datasets!
-- Try: Northwind, Sakila, or create your own business scenarios

-- 🚀 NEXT STEPS:
-- 1. Practice with online SQL platforms (SQLiteOnline, DB Fiddle)
-- 2. Learn database design and normalization
-- 3. Explore specific SQL dialects (MySQL, PostgreSQL, SQL Server)
-- 4. Study query optimization and indexing
-- 5. Practice with real-world datasets
