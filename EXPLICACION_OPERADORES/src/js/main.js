console.groupCollapsed("Tipos de variables")

let variable1 = 156
let variable2 = "854"
let variable3 = "Hola Mundo"
let variable4 = true
let variable5 = undefined
let variable6 = null
let variable7 = ["hola", "hola", "hola", "hola", "hola", "hola"]
let variable8 = {
    "hola": "hola",
    "hola": "hola",
    "hola": "hola",
    "hola": "hola",
    "hola": "hola",
}
let variable9 = function name() {

}

console.log("Tipo de variable 1: ", typeof variable1)
console.log("Tipo de variable 2: ", typeof variable2)
console.log("Tipo de variable 3: ", typeof variable3)
console.log("Tipo de variable 4: ", typeof variable4)
console.log("Tipo de variable 5: ", typeof variable5)
console.log("Tipo de variable 6 : ", typeof variable6)
console.log("Tipo de variable 7 : ", typeof variable7)
console.log("Tipo de variable 8 : ", typeof variable8)
console.log("Tipo de variable 9 : ", typeof variable9)
console.groupEnd()


console.groupCollapsed("Operadores aritmeticos")
let numero1 = 15
let numero2 = 4

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let modulo = numero1 % numero2

console.log("La suma es de: ", suma)
console.log("La resta es de: ", resta)
console.log("La multiplicacion es de: ", multiplicacion)
console.log("La division es de: ", division)
console.log("La potencia es de: ", potencia)
console.log("El modulo es de: ", modulo)
console.groupEnd()

console.groupCollapsed("Operadores de incremento y decremento")

console.groupCollapsed("Operadores incremeto")
// Incremento
let numeroIncrementa = 10

console.log(numeroIncrementa)
numeroIncrementa++
console.log(numeroIncrementa)//11 suma de uno en uno   variable++
numeroIncrementa++
console.log(numeroIncrementa)//12
numeroIncrementa++
console.log(numeroIncrementa)//13
numeroIncrementa++
console.log(numeroIncrementa)//14

numeroIncrementa += 2
console.log(numeroIncrementa)//16 suma de 2 en 2   variable+=2
numeroIncrementa += 2
console.log(numeroIncrementa)
numeroIncrementa += 2
console.log(numeroIncrementa)
console.groupEnd()

console.groupCollapsed("Operadores decremento")
//Decremento
let numeroDecrementa = 50

console.log(numeroDecrementa)
numeroDecrementa--
console.log(numeroDecrementa)
numeroDecrementa--
console.log(numeroDecrementa)
numeroDecrementa--
console.log(numeroDecrementa)
numeroDecrementa--
console.log(numeroDecrementa)
numeroDecrementa -= 2
console.log(numeroDecrementa)
numeroDecrementa -= 2
console.log(numeroDecrementa)
numeroDecrementa -= 2
console.log(numeroDecrementa)
numeroDecrementa -= 2
console.log(numeroDecrementa)

console.groupEnd()
console.groupEnd()

console.group("Operadores lógicos")
//Operadores lógicos
console.groupCollapsed("comparador igualdad == ó ===")
console.log(5 + 9 == 20)//false
console.log(4 == 4)//true
console.log(4 == "4")//true
console.log(4 === "4")//false por el tipo de dato
console.log("Hola mundo" == "hola mundo")//false
console.log("Hola mundo" == "Hola mundo")//true
console.groupEnd()

console.groupCollapsed("comparador desigualdad != ó !==")
console.log(5 + 9 != 20)//false
console.log(4 != 4)//true
console.log(4 != "4")//false
console.log(4 !== "4")//true
console.log("Hola mundo" != "hola mundo")//false
console.log("Hola mundo" != "Hola mundo")//true
console.groupEnd()

console.groupCollapsed("Ejemplo contraseña")
const contraseñastr = "12345"
const contraseñaConfirmacion = "12345" //true

if (contraseñastr === contraseñaConfirmacion) {
    console.info("Ingreso correcto")
} else {
    console.error("Contraseña errada")
}

const contraseñaNum = 12345 //false

if (contraseñaNum === contraseñaConfirmacion) {
    console.info("Ingreso correcto")
} else {
    console.error("Contraseña errada")
}
console.groupEnd()

console.groupCollapsed("comparador mayor que y menor que ")
console.log(8 > 5)//true
console.log(8 > 8)//false
console.log(8 >= 8)//True
console.log("Ejemplo")
let edad = 18

if (edad > 17.9999999999999999999999) {
    console.error("No puedes tomar alcohol , tienes peligro de que te agarre la policia")
} else {
    console.warn("Ya puedes ingerir alcohol, pero te puede llevar el ejercito ")
}
console.groupEnd()
console.group("Operadores lógicos and(&&) y or(||)")
console.group("operador and(&&)")
//operador &&
// true && true = true
console.log(5 > 1 && 8 > 2)
// true && false = false
console.log(1 < 5 && 8 < 2)
//                 false             true                false      = false
console.log("usuario" == "admin" && 1234 == "1234" && "Rol" == true)//false
console.groupEnd()

console.group("Operador or(||)")
// operador ||
//           false   true     false    false  = true
console.log(1 > 6 || 5 > 1 || 8 < 2 || 9 > 50)
//    false || false = false
console.log(1 > 6 || 1 > 5)
console.groupEnd()

console.group("Ejemplo operadores && y ||")
//                              FALSE                ||                  TRUE              = true
//                   false               true                  true              true
console.log(("usuario" == "admin" && 1234 == "1234") || (1234 == "1234" && "Rol" == "Rol"))
console.groupEnd()
console.groupEnd()


