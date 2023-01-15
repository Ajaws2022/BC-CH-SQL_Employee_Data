const inquirer = require("inquirer");
const { default: Choice } = require("inquirer/lib/objects/choice");
const { default: Choices } = require("inquirer/lib/objects/choices");

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




class Department {
    showDept(){
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
          });
    };

    
    async deptQuestions(){
        const deptData = await inquirer
         .prompt([
          {
            type: 'input',
            message: 'Please enter the department ID',
            name: 'id'
  
          },
          {
            type: 'input',
            message: 'Please enter the department name',
            name: 'name'
            
          },
          
         ])
         const { id, name } = deptData;
  
         let stmnt = 'INSERT INTO department VALUES(?,?)';
         let dept = [id, name];
         db.query(stmnt, dept, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("Department Added");
        });
      };
}

module.exports = Department;