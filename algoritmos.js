const { couldStartTrivia } = require("typescript");

function saludar(){
    console.log("Hola Mundo");
    alert("Hola mundo")
}

//Algoritmo que realice una suma entre dos valores ingresados por el usuario

function sumar(){
    //declarar las variables necesarias para la ejecución del algoritmo
    let n1 =0;
    let n2 =0;
    let suma =0;
    //solicitar y capturar los valores ingresados por el usuario 
    n1 = parseInt(prompt('Por favor ingrese el primer valor a sumar'));
    n2 = parseInt(prompt('Por favor ingrese el segundo vlor a sumar'));
    //realizar el procedimiento
    suma = n1 + n2 
    //Imprimir el resultado en pantalla al usuario
    console.log('El resultado de la suma es ' + suma)
    alert('El rresultado de la suma es ' + suma)
}

//Algoritmo que realice una suma, resta, multiplicación y división ingresados por el usuario

function operaciones(){
    let v1 = 0;
    let v2 = 0;
    let operacion = 0;

    v1 = parseInt(prompt('Por favor ingrese el primer valor a operar'));
    v2 = parseInt(prompt('Por favor ingrese el segundo valor a operar'))
    operacion = v1 + v2;
    alert('El resultado de la suma es ' + operacion);

    operacion = v1 - v2;
    alert('El resultado de la resta es ' + operacion);

    operacion = v1 * v2;
    alert('El resultado de la multiplicación es ' + operacion);

    operacion = v1 / v2;
    alert('El resultado de la división es ' + operacion);

}

//Algoritmo que determine el cuadrado de un numero

function cuadrado(){
    let b1 = 0;
    let cuadrado = 0;

    v1 = parseInt(prompt('Por favor ingrese el primer valor a operar'));
    
    cuadrado = v1 **2 ;
    alert('El resultado del cuadrado del número es ' + cuadrado);

}

//Algoritmo que determine el area de un triangulo apartir de su base y altura

function area(){
    let c1 = 0;
    let c2 = 0;
    let area = 0;

    c1 = parseInt(prompt('Por favor ingrese la base del triángulo'));
    c2 = parseInt(prompt('Por favor ingrese la altura del triángulo'));

    area = c1 * c2 / 2;
    alert('El resultado del área es ' + area);
}

//Algoritmo que determine la medida en km, metros y cm de un valor dado en pulgadas

function medida(){
    let km = 0.0000254;
    let m = 0.0254;
    let cm = 2.54;
    let vpug = 0;
    let rkm = 0;
    let rm = 0;
    let rcm = 0;

    vpug = parseInt(prompt('Por favor ingrese la valor en pulgadas par hacer la conversión en km, m y cm'));

    rkm = vpug * km
    rm = vpug * m
    rcm = vpug * cm 

    console.log('El resultado de pulgadas a kilometros es ' + rkm)
    alert('El resultado de pulgadas a kilometros es ' + rkm)
    console.log('El resultado de pulgadas a metros es ' + rm)
    alert('El resultado de pulgadas a metros es ' + rm)
    console.log('El resultado de pulgadas a centimetros es ' + rcm)
    alert('El resultado de pulgadas a centrimetros es ' + rcm)
}

//Algoritmo que pregunte al usuario a qué moneda quiere convertir el peso colombiano entre dolar, euro y yenes

function moneda(){
    let cop = 0;
    let dolar = 0;
    let euro = 0;
    let yen = 0;
    let tipomoneda;

    cop = parseInt(prompt('Por favor ingrese el valor en pesos colombianos'));
    tipomoneda = prompt('Indique a qué moneda desea convertir: DOLAR, EURO, YEN (No olvide escribirlo en mayúsculas');

    switch (tipomoneda) {
        case 'DOLAR':
                dolar = (cop * 1) / 4000;
                console.log('El valor en dólares es ' + dolar);
                alert('El valor en dólares es ' + dolar);
            break;
        case 'EURO':
                euro = (cop * 1) / 4500;
                console.log('El valor en euros es ' + euro);
                alert('El valor en euros es ' + euro);

            break;
        case 'YEN':
                yen = (cop * 1) / 28;
                console.log('El valor en yenes es ' + yen);
                alert('El valor en yenes es ' + yen);
            break;
        default:
                console.log('Por favor especifíquelo en mayúsculas: DOLAR, EURO, YEN');
                alert('Por favor especifíquelo en mayúsculas: DOLAR, EURO, YEN');
            break;
    }
}

//Algoritmo que determine si un numero es par o impar

function parImpar(){
        let numIngresado = 0;

        numIngresado = parseInt(prompt('Ingrese el número a descifrar si es par o impar'));

        if (numIngresado % 2 == 0) {
            console.log('El número es par');
            alert('El número es par');
        } else {
            console.log('El número es impar');
            alert('El número es impar');
        }
}

//Algoritmo que determine el mayor entre dos numeros ingresados por el usuario

function mayorMenor(){
    let num1 = 0;
    let num2 = 0;

    num1 = parseInt(prompt('Por favor ingrese el primero número'));
    num2 = parseInt(prompt('Por favor ingresee el segundo número'));

    if (num1 > num2) {
        alert('El mayor número es ' + num1);
    } else if (num2 > num1){
        alert('El mayor número es ' + num2);
    } else {
        alert('Ingrese un número válido');
    }
}

//Algoritmo que determine el menor entre tres numeros ingresados por el usuarios

function numMenor(){
    let val1 = 0;
    let val2 = 0;
    let val3 = 0;

    val1 = parseInt(prompt('Por favor ingrese el primer número'));
    val2 = parseInt(prompt('Por favor ingrese el segundo número'));
    val3 = parseInt(prompt('Por favor ingrese el tercer número'));

    if (val1 < val2 && val1 < val3) {
        alert('El número menor es ' + val1);
    } else if (val2 < val1 && val2 + val3) {
        alert('El número menor es ' + val2);
    } else if (val3 < val1 && val3 < val2) {
        alert('El menor es ' + val3);
    }
}

//El colegio abc requiere un sistema que le permita validar a x estudiante si aprobó o reprobo x materia teniendo en cuenta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1 en adelante 

function promNota() {
    let nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9 = 0;
    let promedio;

    nota1 = parseInt(prompt('Por favor ingrese la primera nota'));
    nota2 = parseInt(prompt('Por favor ingrese la segunda nota'));
    nota3 = parseInt(prompt('Por favor ingrese la tecera nota'));
    nota4 = parseInt(prompt('Por favor ingrese la cuarta nota'));
    nota5 = parseInt(prompt('Por favor ingrese la quinta nota'));
    nota6 = parseInt(prompt('Por favor ingrese la sexta nota'));
    nota7 = parseInt(prompt('Por favor ingrese la séptima nota'));
    nota8 = parseInt(prompt('Por favor ingrese la octava nota'));
    nota9 = parseInt(prompt('Por favor ingrese la novena nota'));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9) /9;

    if (promedio > 6) {
        alert('Usted pasó con ' + promedio);
    } else {
        alert('Usted perdió con ' + promedio);
    }
}

//Un individuo decide invertir su capital en un banco y requier saber cuanto dinero ganará despues de n numero de años teniendo en cuenta que el banco paga un interes mensual del 0,7%

function ganancias() {
    let capital = 0;
    let anos = 0;
    let ganancias = 0;
    let total = 0;

    capital = parseInt(prompt('Ingrese el capital invertido'));
    anos = parseInt(prompt('Ingrese la cantidad de años que lleva invertido'));

    ganancias = (anos * 12) * (capital * 0.7) / 100;

    total =(capital + ganancias);

    console.log('Las ganancias son de ' + ganancias);
    alert('Las ganancias son de ' + ganancias);
    alert('Las ganancias totales son de ' + total);
    
}