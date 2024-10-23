# Empoyee Database

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

 
link to video  

https://drive.google.com/file/d/13kgPZXS9dBppkTc-q-IRs1U-FH64zC2E/view?usp=drive_link 

## Description 

  This project is to create an employee database that prints all departments, all roles and all employees. It also has the functionality to add a department, role or employee. 
  There is also functionality to update an employee's role. 


## Table of Contents  
   
- [Create Vehicle](#create-vehicle)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

   

  ## Installation  

  Install npm package with npm i

  Install npm pg packages

  Install npm dotenv

  ## Usage  

  In the terminal type:

  npm run build

  npm run start

  ## License 

  This application is covered under the following license:  
   

  [![License: MIT]] (https://opensource.org/licenses/MIT) 

   

  ## Contributing  

  n/a 

   

  ## Tests  

    Print All departments

    Print All roles
    
    Print All empleyee

    Add department
    
    - name: VARCHAR(30) UNIQUE NOT NULL

    Add Role
    
    * title: VARCHAR(30) UNIQUE NOT NULL
    
    * salary: DECIMAL NOT NULL
    
    * department_id: INTEGER NOT NULL -Forgien key to department_id 1-9, 11


    Add employee
    
    * first_name: VARCHAR(30) NOT NULL
    
    * last_name: VARCHAR(30) NOT NULL 
    * role_id: INTEGER NOT NULL - Forgien key to role_id 1-4, 6
    * manager_id: INTEGER

    Update an employee role
    * employee_id: INTEGER NOT NULL 1,4,2
    * role_id: INTEGER NOT NULL Forgien key 1-4, 6, 7

  ## Questions 

  Githubname: TheReal4m4d3u5
 
  https://github.com/TheReal4m4d3u5   

  averyajacobson@gmail.com 


