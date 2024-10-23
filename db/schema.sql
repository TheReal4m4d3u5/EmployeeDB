-- You might want to use a separate file that contains functions 
-- for performing specific SQL queries you'll need to use. 
-- A constructor function or class could be helpful for organizing these. 
-- You might also want to include a `seeds.sql` file to pre-populate your database, 
-- making the development of individual features much easier.
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

\c employee_db;

-- * `department`
--   * `id`: `SERIAL PRIMARY KEY`
--   * `name`: `VARCHAR(30) UNIQUE NOT NULL` to hold department name
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL, 
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL, 
  manager_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES roles(id) 
);