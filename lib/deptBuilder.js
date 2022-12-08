class Department {
    showEmp(){
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          });
    };

    addDept(id, name){
        let stmnt = 'INSERT INTO department VALUES(?,?,?,?)';
        let deptData = [id, name];
        db.query(stmnt, deptData, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    }
}