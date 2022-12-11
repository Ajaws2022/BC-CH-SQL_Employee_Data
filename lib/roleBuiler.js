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

class Role {

    showRoles(){
        db.query(`SELECT * FROM roles`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    };

    async roleQuestions(){
        const roleData = await inquirer
         .prompt([
          {
            type: 'input',
            message: 'Please enter the role ID',
            name: 'id'
  
          },
          {
            type: 'input',
            message: 'Please enter the role title',
            name: 'title'
            
          },
          {
            type: 'input',
            message: 'Please enter the role salary',
            name: 'salary'
            
          },
          {
            type: 'input',
            message: 'Please enter the role department ID',
            name: 'deptID'
            
          }
          
          
         ])
         const { id, title, salary, deptId } = roleData;
  
         let stmnt = 'INSERT INTO roles VALUES(?,?,?,?)';
         let role = [id, title, salary, deptId];
          db.query(stmnt, role, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
      };

    async roleUpdate(){
        let stmnt = 'SELECT employees, ARRAY[first_name] as names';
        db.query(stmnt, (err, result) => {
            if (err) {
              console.log(err);
            }
            // const { first_name } = result;

            console.log(result);
          });
        
        // const changeRole = await inquirer
        //  .prompt([
        //     {
        //         type:'input'
        //     }
        //  ])
    }
}

module.exports = Role;