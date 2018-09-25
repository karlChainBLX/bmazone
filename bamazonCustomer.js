var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazone_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });
function start(){
  //console.log("ok till here"); // ok
  runSearch();
  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Find Products",
          "Buy Products",
          "Search by department",
          "Subscribe"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find Products":
          findProduct();
          //console.log ("find") //ok
          break;
  
        case "Buy Products":
          //buyProduct();
          //console.log ("buy") //ok
          break;
  
        case "Search by department":
          //searchDepartment();
          //console.log("Search") //ok
          break;
  
        case "Subscribe":
          //subscribe();
          //console.log("Subscribe") //ok
          break;
        }
      });
  }

// find product and go to buy asp

function findProduct(){connection.query("SELECT productName FROM products where productQuantity > 0 ", function(err, res) {
    if (err) throw err;
    //console.log(res);
    var choiceArray = [];
  for (var i = 0; i < res.length; i++) {
    choiceArray.push(res[i].productName);
    //console.log(res[i].productName)
  }

  //console.log (choiceArray);
  inquirer
  .prompt({
    name: "actiontwo",
    type: "list",
    message: "What would you like to buy?",
    choices:  choiceArray
  }
   )
   .then (function whyafunction (answer) {//if (answer.actiontwo === "service"){ 
     //console.log("i was here yahh")
    //}
 
    inquirer
    .prompt({
      name: "quantityClinetbuys",
      type: "input",
      message: "WHow many you want to buy?",   
    })
.then (function whatquantity(answer){

  console.log(answer.quantityClinetbuys)
})


}
   )
  });}
}
  
