const inquirer = require('inquirer');

const mysql = require('mysql2');

const Employee = require('./lib/empBuilder');
const empOptions = new Employee();

const Role = require('./lib/roleBuiler');
const roleOptions = new Role();

const Department = require('./lib/deptBuilder');
const deptOptions = new Department();

// create a generic "What would you like to do?" question with options
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: 'rootpassword',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);
function exit () {
    prompt.ui.close();
}
const dataOptions = async () => {
    const userOptions = await inquirer
     .prompt([
        { 
            type: 'list',
            message: "What would you like to do?",
            choices: ['View Employees', 'Add Employee', 'Update Role', 'View Roles', 'Add Role', 'View Departments', 'Add Department', 'Exit'],
            name: 'choice',
        },
        
     ]).then(async (answers) => {
        const { choice } = answers
        if(choice === 'View Employees'){
            // console.log('view employees');
            // empOptions.createManagers();
            empOptions.showEmp();
            return dataOptions()
        } 
        else if (choice === 'Add Employee'){
            // console.log('add employee');
            await empOptions.empQuestions();
            empOptions.showEmp();
            return dataOptions();
        }
        else if (choice === 'Update Role'){
            // console.log('Update Role');
            await roleOptions.roleUpdate();
            roleOptions.showRoles();
            return dataOptions();
            
        }
        else if (choice === 'View Roles'){
            // console.log('View Roles');
            roleOptions.showRoles();
            return dataOptions();
        }
        else if (choice === 'Add Role'){
            // console.log('Add Role');
            await roleOptions.roleQuestions();
            roleOptions.showRoles();
            return dataOptions();
        }
        else if (choice === 'View Departments'){
            // console.log('View Departments');
            deptOptions.showDept();
            return dataOptions();
        }
        else if (choice === 'Add Department'){
            // console.log('Add Department');
            await deptOptions.deptQuestions();
            deptOptions.showDept();
            return dataOptions();
        }
        else{
            console.log('Goodbye')
            exit()
        }
     })
    //  setup if statement to filter next prompt based on choice
    // if(userOptions.choice === 'View Employees'){
    //     // console.log('view employees');
    //     // empOptions.createManagers();
    //     await empOptions.showEmp();
    //     return dataOptions()
    // } 
    // else if (userOptions.choice === 'Add Employee'){
    //     // console.log('add employee');
    //     await empOptions.empQuestions();
    //     return dataOptions();
    // }
    // else if (userOptions.choice === 'Update Role'){
    //     // console.log('Update Role');
    //     await roleOptions.roleUpdate();
    //     return dataOptions();
        
    // }
    // else if (userOptions.choice === 'View Roles'){
    //     // console.log('View Roles');
    //     roleOptions.showRoles();
    //     return dataOptions();
    // }
    // else if (userOptions.choice === 'Add Role'){
    //     // console.log('Add Role');
    //     await roleOptions.roleQuestions();
    //     return dataOptions();
    // }
    // else if (userOptions.choice === 'View Departments'){
    //     // console.log('View Departments');
    //     deptOptions.showDept();
    //     return dataOptions();
    // }
    // else if (userOptions.choice === 'Add Department'){
    //     // console.log('Add Department');
    //     await deptOptions.deptQuestions();
    //     return dataOptions();
    // }
    // else{
    //     console.log('Goodbye')
    //     prompt.ui.close();
    // }
};

dataOptions();


// module.exports = dataOptions();
