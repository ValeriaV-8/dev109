var string = window.prompt("Please enter a number between 0 - 10");
var num = string*1
function isNumber(num){
    if(isNaN(num) === 'False')
        num = 0
}
if (isNumber(num) === 'True')
  num = num;
if (isNumber(num) === 'False')
  num = 0;
else
    num = 0;
var table = num;            // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';   // Message

if (operator === 'multiplication') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} /* else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} */

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
