const form = document.querySelector('#newTodoForm');
const list = document.querySelector('#todoList')
const task = document.querySelector('#task');
const todoNode = document.getElementsByTagName('li');
let storArr = JSON.parse(localStorage.getItem('listItems')) || [];

// Function to create a new list item in the UI
function createNewListItem(value) {
    const removeButton = document.createElement('button');
    const li = document.createElement('li');
    removeButton.innerHTML = 'Remove';
    list.appendChild(li)
    list.appendChild(removeButton);
    li.innerHTML = value;
};

// Add new Todo item using createNewListItem function and pushes the list item to the array
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (task.value === '') {
        alert('Please enter a Todo item');
    } else {
        createNewListItem(task.value);
        storArr.push({task: task.value, isComplete: false});
        task.value = '';
    }
});

// Line-through text if selected and removal of item in both UI and array.
list.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        if (!event.target.style.textDecoration) {
            event.target.style.textDecoration = 'line-through';
        } else if (event.target.style.textDecoration === 'line-through') {
            event.target.style.cssText = null;
        }
    } else if (event.target.tagName.toLowerCase() === 'button') {
        if (storArr.includes(event.target.previousElementSibling.innerHTML)) {
            let i = storArr.indexOf(event.target.previousElementSibling.innerHTML)
            storArr.splice(i, 1);
        }
        event.target.previousElementSibling.remove();
        event.target.remove();
    };
});

// Push all array items to local storage upon window close
window.onbeforeunload = function populateStorage() {
        localStorage.setItem("listItems", JSON.stringify(storArr));
};

// Recreate all items in the list when window reopens
window.onload = function init() {
    for (let value of storArr) {
        let todo = createNewListItem(value.task);
        if (value.isComplete ===  true) {
            todo.style.textDecoration = 'line-through';
        }
    }
};