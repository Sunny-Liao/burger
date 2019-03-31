var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for(var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            devoured: false;
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    
    deleteOne: function(table, condition, cb) {
        var queryString = "Delete from " + table;
        queryString += " where ";
        queryString += condition;
        connection.query(queryString, function(err, result){
            if(err) {throw err;}
            cb(result);
        });
    }



    
};

module.exports = orm;
