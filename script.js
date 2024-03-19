let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueno: 1
    },
    {
        text: "Learn CSS",
        uniqueno: 2
    },
    {
        text: "Learn JavaScript",
        uniqueno: 3
    }
];

let count = todoList.length;

function strikeoff(labelid) {
    let label = document.getElementById(labelid);
    label.classList.toggle('checked');
}

function deleting(itemid) {
    let todoitem = document.getElementById(itemid);
    todoItemsContainer.removeChild(todoitem);
}

function createAndAppendTodo(todo) {

    let checkboxid = "checkbox" + todo.uniqueno;
    let labelid = "label" + todo.uniqueno;
    let itemid = "item" + todo.uniqueno;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = itemid;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxid;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        strikeoff(labelid);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxid);
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelid;
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        deleting(itemid);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function ontodo() {
    let user_input_element = document.getElementById("todoUserInput");
    let user_input_value = user_input_element.value;
     if(user_input_value ==="")
     {
         alert("Please Enter a valid text");
         return;
     }
    let todonewlist = {
        text: user_input_value,
        uniqueno: count + 1
    };
    createAndAppendTodo(todonewlist);
    user_input_element.value ="";
}

let button = document.getElementById("addTodoButton");
button.onclick = function() {
    ontodo();
}