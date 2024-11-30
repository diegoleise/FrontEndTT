/*console.log(2 + 3);
let productos = 4
console.log(productos)
console.log("la suma de 2 + 2 es: " + (2+2))

let nombreUsuario = "Diego"
let correoUsuario = "diegoleise@gmail"

console.log("el nombre del usuario es: " + nombreUsuario)
console.log(correoUsuario)

console.log("Suma de numeros")
var numero1 = 20
var numero2 = 30
var sumaNumeros = numero1 + numero2
console.log("La suma de los numeros es: " + sumaNumeros)

var vidas = 3
const DESCONTAR = 1
vidas = vidas - DESCONTAR
console.log(vidas)+*/


/*let edad1 = prompt ("ingrese su edad")
document.write(edad1)
console.log(edad1)*/
//prompt es para obtener datos del usuario
//document.write es para escribir en la pagina
//console.log es para escribir en la consola del navegador
//prompt devuelve un string, por lo que debemos convertirlo a number para realizar operaciones

/*let dia = parseInt(prompt("ingrese dia de la semana"))
if (dia == 1) {
    alert("es lunes")
}
else if (dia == 2) {
    alert("es martes")
}
else if (dia == 3) {
    alert("es miercoles")
}
else {
    alert("no es lunes, martes o miercoles")
}
parseInt convierte un string a un numero entero
switch(dia) {
    case 1:
        alert("es lunes")
        break
    case 2:
        alert("es martes")
        break
    case 3:
        alert("es miercoles")
    default:
        alert("no es lunes, martes o miercoles")
}

let saldo = 0
let opcion = parseInt(prompt("ingrese una opcion entre 1 y 4"))

switch(opcion){
    case 1:
        alert("verificar saldo "+ saldo)
        if (saldo<=0){
            alert("saldo insuficiente")
        }
        break
         }
let argentina = 1
while (argentina<5){
   // let nombre1 = prompt("ingrese su nombre")
    alert("soy un ciclo "+ argentina)
    argentina++
    
}*/
let acumulador=0
let cantidadPrecios=5
for(var i = 0; i<cantidadPrecios; i++){
    //i=Number
    var acumuladorValor=Number(prompt("ingrese un precio"))
    acumulador = acumulador + acumuladorValor
  
    document.write(acumulador)
     }
     console.log(acumulador)//si lo scribo dentro del for lo muestra 6 veces