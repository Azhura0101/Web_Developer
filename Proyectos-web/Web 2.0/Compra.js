let usuario = prompt ("Ingresa un nuevo usuario:");
let contraseña = prompt ("ingresa una nueva contraseña:");
alert ("Inicia sesion para entrar a tu cuenta")
let  validacion_usuario = prompt ("ingresa tu usuario:")
let validacion_contraseña = prompt ("ingresa porfavor tu contraseña:")

if (validacion_usuario == usuario){
    alert("usuario correcto")
}
else{
    alert("error")
}
if (validacion_contraseña == contraseña){
    alert("contraseña correcto")
    alert (`Bienvenido ${usuario} iniciaste sesion correctamente`)
}
else{
    alert("Usuario o contraseña vuelva a introducirlos")
}

const basico = 1
const mediano = 2
const completo = 3
alert("Bienvenido a la tienda de planes")
let Seleccion = prompt ("Selecciona cual quieres comprar \n1.Basico\n2.Mediano\n3.Completo\n ");
if ( Seleccion == basico) {
	alert ("Compraras el plan basico. \n Seran 10$+impuestos")
}
else if (Seleccion == mediano) {
	 alert ("Compraras el plan Mediano. \n Seran 25$+impuestos")
}
else if (Seleccion == completo) {
	alert ("Compraras el plan Completo. \n Seran 35$+impuestos")
}
else {
	alert("no compraras nada")
}


const Caja = 3
const Casa = 2
const cocina = 1
alert("Bienvenido a un juego de azar, elige la opcion correcta")
Seleccion = prompt("Adivina donde esta la rata \n1.la cocina\n2.la casa\n3.la caja")
if (Seleccion == cocina) {
	alert("No la rata no busca comida, suerte la proxima")
} 
else if (Seleccion == casa){
	alert("Correcto la rata esta en la casa, ¿pero donde estara?")
}	
else if (Seleccion == caja){
	alert("no la rata no esta en la caja")
}
else {
	alert("no hay rata?")
}
