const db = require("./connection")
class DB {
    constructor(connection) { this.connection = connection }

    viewEmployees = () => {
        return this.connection.promise().query("select * from employee")

    }
   
    viewDepartments = () => {
        return this.connection.promise().query("select * from department")