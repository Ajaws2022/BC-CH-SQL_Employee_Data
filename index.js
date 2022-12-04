const inquirer = require('inquirer');

const mysql = require('mysql2');

// create a generic "What would you like to do?" question with options
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const dataOptions = async () => {
    let answers = await inquirer
     .prompt([
        { 
            type: 'list',
            message: "What would you like to do?",
            choices: ['View Employees', 'Add Employee', 'Update Role', 'View Roles', 'Add Role', 'View Departments', 'Add Department', 'Exit'],
            name: 'choice',
        },
        
     ])
};

