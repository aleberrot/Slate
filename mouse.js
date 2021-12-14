 
var cuadrado = document.getElementById("areaDibujo");
var hojita = cuadrado.getContext("2d");
var xi;
var yi;
cuadrado.addEventListener("mousedown", dibujarConMouse);
cuadrado.addEventListener("mousemove", dibujarConMouse);
cuadrado.addEventListener("mouseup", dibujarConMouse);

function dibujarConMouse(evento)
{
var colorcito = "white";
var xf = evento.layerX;
var yf = evento.layerY;
if(evento.buttons == 1)
{
dibujarLinea(colorcito, xi, yi, xf, yf, hojita);
xi = xf;
yi = yf;
}
else
{
xi = xf;
yi = yf;
}
}

dibujarLinea("black", 0, 0, 0, 299);
dibujarLinea("black", 0, 299,299,299);
dibujarLinea("black", 299, 299, 299, 0);
dibujarLinea("black", 299, 0, 0, 0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, )
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}