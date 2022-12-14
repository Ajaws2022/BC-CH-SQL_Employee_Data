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
        const nameStmnt = 'SELECT first_name, last_name FROM employees;';
        let [names] = await db.promise().query(nameStmnt)
        function getFullName(item) {
          return [item.first_name,item.last_name].join(" ");
        }
        const fullNames = names.map(getFullName);
        // console.log(fullNames);

        const roleStmnt = 'SELECT title FROM roles;';
        let [roleNames] = await db.promise().query(roleStmnt);
        function getRoleName(item){
          return item.title
        };
        
        const roleTitles = roleNames.map(getRoleName);
        
        const namePick = await inquirer
          .prompt([
              {
                name: 'who',
                type: 'list',
                message: 'Which employee would you like to update?',
                choices: fullNames
              },
              {
                name: 'role',
                type: 'list',
                message: 'Which role would you like to assign the employee?',
                choices: roleTitles
              }
              
          ]);

          let empChoice = namePick.who.split(" ");
          console.log(empChoice)
          let roleChoice = namePick.role;

          const idStmnt = `SELECT id FROM roles WHERE title= "${roleChoice}";`
          let [roleIdObj] = await db.promise().query(idStmnt);
          let newRoleId = roleIdObj[0].id;

          const empIdStmnt = `SELECT id FROM employees WHERE first_name = "${empChoice[0]}" and last_name = "${empChoice[1]}";`
          let [empIdObj] = await db.promise().query(empIdStmnt);
          let empId = empIdObj[0].id
          console.log(newRoleId, empId);

          const updateStmnt = `UPDATE employees SET role_id = '${newRoleId}' WHERE id = '${empId}'`

          db.promise().query(updateStmnt)


    }
}




module.exports = Role;