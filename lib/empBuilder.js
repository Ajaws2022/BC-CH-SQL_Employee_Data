const inquirer = require("inquirer");

const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: '',
    database: 'employee_db'
  }
);

class Employee {

    showEmp(){
        db.query(`SELECT * FROM employees`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
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
              console.log(result);
        });
    };
}

module.exports = Employee;