var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'project'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }else{
        console.log("connected")
    }
});

// Perform a query
$query = 'SELECT * from student';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }
    console.log("Query succesfully executed: ", rows['ID']);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});