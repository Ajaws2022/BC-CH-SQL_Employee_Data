class Role {

    showRoles(){
        db.query(`SELECT * FROM roles`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    };

    addRole(id, title, salary, deptId){
        let stmnt = 'INSERT INTO roles VALUES(?,?,?,?)';
        let roleData = [id, title, salary, deptId];
        db.query(stmnt, roleData, (err, result) => {
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
  
         addRole(id, title, salary, deptId);
      }

}

module.exports = Role;