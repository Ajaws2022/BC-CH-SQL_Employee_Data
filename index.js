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
    const userOptions = await inquirer
     .prompt([
        { 
            type: 'list',
            message: "What would you like to do?",
            choices: ['View Employees', 'Add Employee', 'Update Role', 'View Roles', 'Add Role', 'View Departments', 'Add Department', 'Exit'],
            name: 'choice',
        },
        
     ])
    //  setup if statement to filter next prompt based on choice
    if(userOptions.choice === 'View Employees'){
        console.log('view employees')
    } 
    else if (userOptions.choice === 'Add Employee'){
        console.log('add employee')
    }
    else if (userOptions.choice === 'Update Role'){
        console.log('Update Role')
    }
    else if (userOptions.choice === 'View Roles'){
        console.log('View Roles')
    }
    else if (userOptions.choice === 'Add Role'){
        console.log('Add Role')
    }
    else if (userOptions.choice === 'View Departments'){
        console.log('View Departments')
    }
    else if (userOptions.choice === 'Add Department'){
        console.log('Add Department')
    }
    else{
        console.log('Goodbye')
        prompt.ui.close();
    }
};

