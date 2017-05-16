const h1 = document.querySelector('#change_heading')
h1.innerHTML = 'Hello World!';

const section = document.querySelector('section');
const selected = document.querySelector('.selected')
section.addEventListener('mouseover', function(e) {
   selected.innerText = e.target.className.toUpperCase(); 
});

const purpleDiv = document.createElement('div');
purpleDiv.className = 'purple';
section.appendChild(purpleDiv);