// import classes
import inquirer from "inquirer";
import pg from 'pg'
import { pool } from './connection.js'
import Prompt from "inquirer/lib/prompts/base.js";

const client = await pool.connect();


// start the cli
async function question() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'OpeningSelection',
        choices: [
          'All departments',
          'All roles',
          'All employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role'],
      },
    ])
    .then((answers) => {

      // check if the user wants to create a new vehicle or select an existing vehicle
      switch (answers.OpeningSelection) {
        case 'All departments':
          allDepartments();

          break;
        case 'All roles':
          allRoles();
          break;
        case 'All employees':
          allEmployees();
          break;
        case 'Add a department':
          addDepartments();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':

          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployee();
          break;
        default:
          console.error("answer was incorrect: " + answers.question)
      }
    });
}

await question();


async function allDepartments() {
  // WHEN I choose to view all departments
  // THEN I am presented with a formatted table showing department names and department ids
  try {
    const { rows } = await client.query('SELECT * FROM departments');
    console.table(rows);
    question();
    return;
  } catch (err) {
    return console.error(err);
  }
}

async function allRoles() {
  // WHEN I choose to view all departments
  // THEN I am presented with a formatted table showing department names and department ids
  try {
    const { rows } = await client.query('SELECT * FROM roles');
    console.table(rows);
    question();
    return;
  } catch (err) {
    return console.error(err);
  }

}

async function allEmployees() {
  try {
    const { rows } = await client.query('SELECT * FROM employee');
    console.table(rows);
    question();
    return;
  } catch (err) {
    return console.error(err);
  }

}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
async function addDepartments() {
  let res = await inquirer.prompt([{ type: "input", name: "departmentName", message: "Enter a department" }]);

  try {
    const { rows } = await client.query('insert into departments (name) values ($1)', [res.departmentName]);
  } catch (err) {
    return console.error(err);
  }

  question();
  return;
}


async function addRole() {
  let res = await inquirer.prompt([
    { type: "input", name: "roleName", message: "What is the role's name?" },
    { type: "input", name: "roleSalary", message: "What is the role's salary?" },
    { type: "input", name: "departmentID", message: "What is the departmentID?" }]);

  try {
    const { rows } = await client.query('insert into roles (title, salary, department_id) VALUES ($1, $2, $3)', [res.roleName, res.roleSalary, res.departmentID]);
    question();
    return;
  } catch (err) {
    return console.error(err);
  }
}

async function addEmployee() {
  let res = await inquirer.prompt([
    { type: "input", name: "firstName", message: "Enter employee's first name" },
    { type: "input", name: "last_name", message: "Enter employee's last name" },
    { type: "input", name: "role_id", message: "What is the employee's role ID?" },
    { type: "input", name: "manager_id", message: "What is the employee's manager ID?" }]);

  try {
    const { rows } = await client.query('insert into employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [res.firstName, res.last_name, res.role_id, res.manager_id]);
    question();
    return;
  } catch (err) {
    return console.error(err);
  }
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
async function updateEmployee() {
  let res = await inquirer.prompt([
    { type: "input", name: "employeeID", message: "What is the employee's ID?" },
    { type: "input", name: "employeeRole", message: "Enter a new role ID" }]);

  try {
    const { rows } = await client.query('update employee set role_id = ($1) where id = ($2)', [res.employeeRole, res.employeeID]);
    question();
    return;
  } catch (err) {
    return console.error(err);
  }
}
