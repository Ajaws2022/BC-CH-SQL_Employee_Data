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
    }
}

module.exports = Employee;