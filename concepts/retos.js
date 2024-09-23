function wrapping(gifts) {
    const envueltos = [];
    for(let gift of gifts){
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${ tapa }\n*${gift}*\n${ tapa }`;
        envueltos.push(g);
    }
    return envueltos;
  }

  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)
  
  console.log(wrapped[1])



  function createCube(size) {
    let cube = '';
    const space = ' ';
    const faceA = '/\\';
    const backA = '_\\';
    const faceB = '\\/';
    const backB = '_/';

    for (let i = 0; i < size; i++) {
        cube += space.repeat(size - i - 1);
        cube += faceA.repeat(i + 1);
        cube += backA.repeat(size);
        cube += '\n';
    }

    for (let i = 0; i < size; i++) {
        cube += space.repeat(i);
        cube += faceB.repeat(size - i);
        cube += backB.repeat(size);
        if (i < size - 1) cube += '\n'; 
    }

    return cube;
}
const cube = createCube(3);
console.log(cube); 

  