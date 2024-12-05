//Variables y tipos de datos

let nombres ='Gabriela Muñoz Acero';
let edad = 27;
let mayorEdad = true;
let estatura;

console.log(typeof nombres);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof estatura);

//Tipos de datos complejos

let frutas = ['Pera','Melon','Manzana','Mango','Durazno'];

let auto = {
    placa: 'TML29C',
    marca: 'Chevrolet',
    modelo: 2024,
    tipo: 'Camioneta',
    unicoDueno: true,
    kilometraje: 50000
}

//Concatenando variables

console.log('Bienvenido usuario ' + nombres + ', su edad es ' + edad + ', su fruta favorita es ' + frutas[0])

//Estructuras de control condicional

let edad2 = 18;
let genero = 'Femenina';
if (edad2>17 && edad2<26 ){

    if (genero == 'Masculino'){
        console.log('Pal camión mi so!');
    }
    else{
        console.log('No eres APTA')
    }
}
else{
    console.log('Se salvó de la trasquilada por joven o por cucho');
}

let tipoSuscripcion = 'Gold';
switch (tipoSuscripcion) {
    case 'Bronze':
            console.log('No le alcanzó para más, re pobre');
        break;

    case 'Silver':
            console.log('Bien, pero puede mejorar');
        break;

    case 'Gold':
            console.log('Este es el mejor plan o paquete, bien ahí');
        break;
    default:
            console.log('No existe este tipo de suscripción')
        break;
}

//Estructuras de control de bucles

let contador = 0;

while (contador<11){
    console.log('El contador es el número ' + contador);
    contador= contador + 1;
}

for(let i= 100; i>0; i = i -10 ){
    console.log('El contacto con for es ' + i)
}