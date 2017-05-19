const form = document.querySelector('#newTodoForm');
const list = document.querySelector('#todoList')
const task = document.querySelector('#task');

// Add new Todo item
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    if (task.value === '') {
        alert('Please enter a Todo item');
    } else {
        const li = document.createElement('li');
        list.appendChild(li)
        list.appendChild(removeButton);
        li.innerHTML = task.value;
        task.value = "";
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