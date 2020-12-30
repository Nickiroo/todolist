//Create new to do item button
var newButton = document.getElementById("add-button");
newButton.addEventListener("click", addToDoItem);

function addToDoItem() {
    alert("Add button clicked!");
    console.log("Everything is working fine!");
}


//Clear To Do list button
var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    alert("You have cleared all of the completed to do items!");
    console.log("The items have been cleared. I'm lonely in here, come check the console more often! Please!");
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

function emptyList() {
    alert("The list has been emptied");
    console.log("The list has been emptied, thanks for checking in!")
}

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

function saveList() {
    alert("The list has been saved");
    console.log("The list has been saved, thanks for checking in!")
}