class Department {
    showDept(){
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    };

    addDept(id, name){
        let stmnt = 'INSERT INTO department VALUES(?,?)';
        let deptData = [id, name];
        db.query(stmnt, deptData, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
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
  
         addDept(id, name);
      }
}

module.exports = Department;