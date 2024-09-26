const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightBall = () => {
    const question = prompt('Pregunta:')
    const random = Math.floor(Math.random() * 8);
    const options = [    
    'Si, definitivamente.:)',
    'Definitivamente no.:(',
    'Es muy probable.',
    'Es muy poco probable.',
    'Depende.',
    'Podria suceder.',
    'Todo indica que si.',
    'Todo indica que no.',
    ]
 h1.innerText = options[random];
}

main.addEventListener('click', eightBall);