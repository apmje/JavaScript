const container = document.getElementById('container');
const sectionContainer = document.querySelector('#container');
const secondLi = document.querySelectorAll('.second');
const olThird = document.querySelector('ol .third');

// sectionContainer.innerHTML = 'Hello!';

const footer = document.querySelector('.footer');
footer.classList.add('main');
footer.classList.remove('main');

const li = document.createElement('li');
li.innerHTML = "four";

const ul = document.querySelector('ul');
ul.appendChild(li);

const ol = document.querySelector('ol').children;
for (i = 0; i < ol.length; i++) {
    ol[i].style.backgroundColor = 'green';
};

footer.remove();