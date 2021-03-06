const pool = require("../config/Connection").pool
/** Class representing a class. */
module.exports = class Class{
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} name - The class name value.
     * @param {string} schedule - The schedule value.
     * @param {string} tasks - The task description value.
     */
    constructor(id, name, schedule, tasks) {

        this.id = id;
        this.name = name;
        this.schedule = schedule;
    }
}
/**
 * Add class to data base.
 * @return void
 */
module.exports.addClass = function (myClass) {
    const sql = `INSERT INTO class(idclass,schedule_idschedule,Name) VALUES(?,?,?)`;

    pool.execute(sql, [myClass.id, myClass.schedule, myClass.name])
        .then(result =>{
            console.log(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}
/**
 * Get class from data base.
 * @return callback function
 */
module.exports.getClass = function (id, callback) {

    pool.execute('SELECT * FROM class WHERE idclass=?', [id])
        .then(result =>{
            callback(result[0])
        })
        .catch(function(err) {
            console.log(err);
        });
}