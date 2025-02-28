// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

// Create variable for event listener
var input = document.getElementById("newtodo");
// For keyboard input
input.addEventListener("keydown", function(event) {
    // Only when the "enter" key is pressed
    if (event.key === "Enter") {
        event.preventDefault();
        // When "enter" key is pressed, button is clicked
        document.getElementById("myBtn").click();
    }
});

// Create function
function addToDo() {
    // Variable for new element
    var li = document.createElement("li");
    // Get input from HTML
    var newItem  = document.getElementById("newtodo").value;
    // Attach new text node to new element
    var newList = document.createTextNode(newItem);
    // Add new item to list
    li.appendChild(newList);
    // Send to list
    document.getElementById("todo").appendChild(li);
    // Blank text input box after button
    document.getElementById("newtodo").value = ""; 
}
