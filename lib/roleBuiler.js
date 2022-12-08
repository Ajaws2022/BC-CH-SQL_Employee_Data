class Role {

    showEmp(){
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
    }

}