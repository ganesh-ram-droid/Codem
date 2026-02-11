var name = "Ganesh"
let val =10
const pi=3.14
console.log(`Data before redeclaration ${name} ,${val} , ${pi}`)
//now trying to reassign
name= "Ram"
 val = 20
//  pi=3.1444// as it is declared as constant pi can not be reassigned(TypeError: Assignment to constant variable.)

var name ="Ganesh Ram"
console.log(name);
console.log(`Data After redeclaration ${name} ,${val} , ${pi}`)
//my observations
//1.-val
//can be reassgined and redeclared.that's why it is deprecated
//2.-let
//Can be reassigned,Cannot be redeclared
//3.-const
// Cannot be reassigned, Cannot be redeclared and Must be initialized at declaration
