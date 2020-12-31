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
    var completedItems =toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

function emptyList() {
    alert("The list has been emptied");
    console.log("The list has been emptied, thanks for checking in!");
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

function saveList() {
    alert("The list has been saved");
    console.log("The list has been saved, thanks for checking in!")

    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);
        
        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));


}

//Making the to-do items
var toDoEntryBox = document.getElementById("todo-entry-box");

var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem( itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    }

    else {
        this.classList.add("completed");
    }
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);

        }
    }
    else {
      var toDos = {
            "task": "thing I need to do",
            "completed": false
      };

      for (var i = 0; i < toDos.length; i++) {
         var toDo = toDos[i];
         newToDoItem(toDo.task, toDo.completed);
      }
    }

}

loadList();
//Just testing a commit