const form = document.querySelector('#newTodoForm');
const list = document.querySelector('#todoList')
const task = document.querySelector('#task');
const todoNode = document.getElementsByTagName('li');

function createNewListItem(value) {
    const removeButton = document.createElement('button');
    const li = document.createElement('li');
    removeButton.innerHTML = 'Remove';
    list.appendChild(li)
    list.appendChild(removeButton);
    li.innerHTML = value;
};

// Add new Todo item
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (task.value === '') {
        alert('Please enter a Todo item');
    } else {
        createNewListItem(task.value);
        task.value = '';
    }
});

// Line-through text if selected.
list.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        if (!event.target.style.textDecoration) {
            event.target.style.textDecoration = 'line-through';
        } else if (event.target.style.textDecoration === 'line-through') {
            event.target.style.cssText = null;
        }
    } else if (event.target.tagName.toLowerCase() === 'button') {
        event.target.previousElementSibling.remove()
        event.target.remove();
        
    }
});

function populateStorage() {
    for (let i = 0; i < todoNode.length; i++) {
        localStorage.setItem('listItem' + i, todoNode[i].textContent);
    }
};

function init() {
    for (let key in localStorage) {
        createNewListItem(localStorage.getItem(key));
    }
};