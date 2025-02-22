var string = window.prompt("Please enter a number between 0 - 10");
var num = string*1;         // Convert string into number
var table = num;            // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';   // Message
if (operator === 'multiplication') {
  // Do multiplication
  if (isNaN(num)) {
    // If NaN or null inputted number is treated as 0
    table = 0;
  }
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
