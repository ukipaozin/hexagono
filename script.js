const container = document.querySelector('.container')

const numHexagons = 200;

const colors = ['#007bff', '#28a745', '#ffc107'];

function getRandomNumber(min,max) {
    return Math.random() * (max - min) + min;
}

function createhexagon() {
    const hexagon = document. createElement('div');
    hexagon.classList.add('hexagon');

    const x = getRandomNumber (0, window.innerWidth - 50);
    const y = getRandomNumber (0, window.innerHeight - 57.735);
    hexagon.style.left = '${x}px' ;
    hexagon.style.top = '${y}px' ;
}
