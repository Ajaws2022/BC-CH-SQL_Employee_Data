const inquirer = require("inquirer");
const dataOptions = require('../index')
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'rootpassword',
    database: 'employee_db'
  }
);

class Employee {
    // createManagers(){
    //   const managerStmnt = ('DROP TABLE IF EXISTS managers;', "CREATE TABLE managers AS SELECT id, CONCAT(first_name, ' ', last_name) AS manager FROM employees;");

      
    //   db.query(managerStmnt, (err, result) => {
    //           if (err) {
    //             console.log(err);
    //           }
    //           console.log(result);
    //         });
    // };

    async showEmp(){
      const managerStmnt = ('DROP TABLE IF EXISTS managers;', "CREATE TABLE managers AS SELECT id, CONCAT(first_name, ' ', last_name) AS manager FROM employees;")

      const stmnt = 'SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, department.dept_name FROM employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN department on department.id = roles.department_id';

      


      // db.query(managerStmnt, (err, result) => {
      //       if (err) {
      //         console.log(err);
      //       }
      //       console.log(result);
      //     });
      
      db.query(stmnt, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
            // console.table(result);
          });
    };

    

    async empQuestions(){
      const empData = await inquirer
       .prompt([
        {
          type: 'input',
          message: 'Please enter the employee ID',
          name: 'id'

        },
        {
          type: 'input',
          message: 'Please enter the employee first name',
          name: 'firstName'
          
        },
        {
          type: 'input',
          message: 'Please enter the employee last name',
          name: 'lastName'
          
        },
        {
          type: 'input',
          message: 'Please enter the employee role ID',
          name: 'roleId'
          
        },
        {
          type: 'input',
          message: 'Please enter the employee manager ID',
          name: 'managerId'
          
        }
        
       ])
       const { id, firstName, lastName, roleId, managerId } = empData;

       let statement = 'INSERT INTO employees VALUES(?,?,?,?,?)';
        let emp = [id, firstName, lastName, roleId, managerId];
        db.query(statement, emp, (err, result) => {
            if (err) {
                console.log(err);
              }
              console.table("Employee Added!");
        });
    };
}

module.exports = Employee;