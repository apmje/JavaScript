const h1 = document.querySelector('#change_heading')
h1.innerHTML = 'Hello World!';

const section = document.querySelector('section');
const selected = document.querySelector('.selected')
section.addEventListener('mouseover', e => {
    selected.innerText = e.target.className.toUpperCase();
});

const purpleDiv = document.createElement('div');
purpleDiv.className = 'purple';
section.appendChild(purpleDiv);

// let random = () => Math.floor(Math.random() * 100);

// function racer(car) {
//     let distance = random();
//     let timedID = setInterval(() => {
//         distance += random();
//         car.style.marginLeft = `${distance}px`;
//         console.log(window.innerWidth)
//         if (distance >= window.innerWidth) {
//             alert(`Winner!`);
//         }
//     }, 100);
// };

// button.addEventListener('click', function () {
//     racer(car1);
//     racer(car2);
// });


const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
const button = document.querySelector('button');

function racer(car) {
    car.style.marginLeft = parseInt(car.style.marginLeft) + Math.floor(Math.random() * 100) + 'px';
    console.log(car);
    if (parseInt(car.style.marginLeft) >= window.innerWidth) {
        alert(`${car.className.toUpperCase()} wins!`);
        reset();
    }
};

function reset(car) {
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    clearInterval(car1timer);
    clearInterval(car2timer);
}

button.addEventListener('click', function () {
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    let car1timer = setInterval(function () {
        racer(car1)
    }, 100);
    let car2timer = setInterval(function () {
        racer(car2)
    }, 100);
});