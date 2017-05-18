const form = document.querySelector('#newTodoForm');
const list = document.querySelector('#todoList')
const task = document.querySelector('#task');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const li = document.createElement('li');
    list.appendChild(li)
    li.innerHTML = task.value;

    task.value = "";

});

list.addEventListener('mouseover', function (event) {
    event.target.style.textDecoration = 'line-through';
});

list.addEventListener('mouseout', function (event) {
    event.target.style.textDecoration = 'none';
});


list.addEventListener('click', function (event) {
    list.removeChild(event.target);
});