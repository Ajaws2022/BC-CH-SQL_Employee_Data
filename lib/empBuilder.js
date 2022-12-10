const { default: inquirer } = require("inquirer");

class Employee {

    showEmp(){
        db.query(`SELECT * FROM employees`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    };

    addEmp(id, firstName, lastName, roleId, managerId){
        let statement = 'INSERT INTO employees VALUES(?,?,?,?,?)';
        let empData = [id, firstName, lastName, roleId, managerId];
        db.query(statement, empData, (err, result) => {
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

       addEmp(id, firstName, lastName, roleId, managerId);
    }
}

module.exports = Employee;