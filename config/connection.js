// Set up MySQL connection.
var mysql = require("mysql");

var connection = require("../config/connection.js");

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
}else {
    connection = mysql.createConnection({
      host: "mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "yvyunsk8c9dms283",
      password: "ao33frsz8lj8axm6",
      database: "xot5hui6md7xtqid"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
