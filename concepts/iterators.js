// High Order Functions
// Funciones de Orden superior
// Son funciones que reciben funciones como parametros

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const operation = (a, b, callback) => {
    const result = callback(a, b);
    console.log('El resultado es: ' + result);

}

operation(12, 5, suma);
operation(12, 5, resta);
operation(12, 5, (a, b) => a * b);

const cars = ['vocho', 'athos', 'pointer','tsuru','bmw'];

cars.forEach(car => { console.log(car) }); 

let filtrados = cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados = cars.filter(car => car.includes ('o'));
console.log(filtrados);

//regresar los que comiencen con a
filtrados = cars.filter(car => car.startsWith ('a'));
console.log(filtrados);

//regresar los que terminen con u
filtrados = cars.filter(car => car.endsWith ('u'));
console.log(filtrados);

//regresar los que tengan menos de 5 letras
filtrados = cars.filter(car => car.length <5);
console.log(filtrados);

// Metodo map

const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

const reves = cars.map(car => car.split('').reverse().join(''));
console.log(reves);
  
//
function wrapping(gifts) {
    return gifts.map(gift => {
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${ tapa }\n*${gift}*\n${ tapa }`;
        return g;
    })
  }

  const carsEnvueltos = wrapping(cars);
  carsEnvueltos.forEach(car => console.log(car));


  // forEach:
  // map: si queremos el mismo numero de elementps
  // filter: nos regresa elementos que cumplan con una condicion  


  // reduce 
  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumatoria = numbers.reduce((a, b) => a + b);
  console.log(numbers);
  console.log(sumatoria);
  const factorial = numbers.reduce((a, b) => a * b);
  console.log(factorial);

  // EVERY regresa verdadero si todos cumplen
  const ages = [23, 15, 37, 19, 18, 22, 27];
  const olders = ages.every(age => age >= 18);
  const youngers = ages.every(age => age < 18);
  console.log(olders);
  console.log(youngers);
  
  // SOME regresa verdadero con uno que cumpla
  const olders2 = ages.some(age => age >= 18);
  const youngers2 = ages.some(age => age < 18);
  console.log(olders2);
  console.log(youngers2);


  // Ejercicio: 
  // 1. crear un array con elementos del 1 al 10
  //2. crear uno nuevo con los cuadrados(map)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cuadrados = numbers.map(num => num * num);
  console.log(numbers);
  console.log(cuadrados);
 
  //3. crear uno nuevo con los cubos(map)
  const cubos = numbers.map(num => num * num * num);
  console.log(cubos);

  //4. crear uno nuevo con las mitades(map)
  const mitades = numbers.map(num => num / 2);
  console.log(mitades);

  //5. crear uno nuevo con los pares(filter)
  const pares = numbers.filter(num => num % 2 === 0);
  console.log(pares);

  //6. crear uno nuevo con los impares(filter)
  const impares = numbers.filter(num => num % 2 !== 0);
  console.log(impares);

  // 7. crear uno nuevo con valores entre 3 y 8(filter)
  const valores = numbers.filter(num => num >= 3 && num <= 8);
  console.log(valores);

