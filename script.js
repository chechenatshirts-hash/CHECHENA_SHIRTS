function enviarWhatsApp(e){
e.preventDefault();

let nombre=document.getElementById("nombre").value;
let cantidad=document.getElementById("cantidad").value;
let tipo=document.getElementById("tipo").value;
let mensaje=document.getElementById("mensaje").value;

let texto=`Hola Chechena Shirts 👕
Nombre: ${nombre}
Cantidad: ${cantidad}
Tipo de pedido: ${tipo}
Detalles: ${mensaje}`;

let numero="529212337934"; // PON TU NUMERO REAL
let url=`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

window.open(url,"_blank");
}
