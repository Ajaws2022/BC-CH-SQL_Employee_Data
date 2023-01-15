# Employee Database

## Description 

For this assignment I was tasked with building an employee database using SQL and MYSQL2. It was a unique assignment as it was my first time working with a dynamically generated and updated database using Javascript and terminal commands through Inquirer. The main challenges were nesting all of the different inquirer questions and then making sure the attached JS was asynchronous to allow the database to be properly updated.

## Usage 

To start the application the user must clone the repo locally and then run "npm install" or "npm -i" to obatain all of the necessary packages. Next the user must log into mysql in the terminal using "mysql -u root -p" and then in the terminal again use the command "USE db/schema.sql && USE db/seeds.sql" to initialize the database. At this point the mysql session can be closed in terminal. Next a new terminal can be opened or the previous cleared and now the command "npm start" will be used to establish a connection to the database and launch the inquirer prompts. If there are issues here it is most likely due to the Msql credentials in the lib/modules not being correct for the user.

## Links/Contact

https://github.com/Ajaws2022/BC-CH-SQL_Employee_Data

ajaworski2019@gmail.com