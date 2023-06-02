// Obtener los botones por su id
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

// Asignar eventos a los botones
btn1.addEventListener("click", cambiarEstilo1);
btn2.addEventListener("click", cambiarEstilo2);
btn3.addEventListener("click", cambiarEstilo3);

// Funciones para cambiar el estilo
function cambiarEstilo1() {
  // Cambiar el color de fondo del cuerpo
  document.body.style.backgroundColor = "blue";

  // Cambiar el color de los botones
  btn1.style.backgroundColor = "red";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";

  // Cambiar el color y centrado de los títulos
  var titles = document.querySelectorAll("#content h1");
  titles.forEach(function(title) {
    title.style.color = "yellow";
    title.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
    title.style.textAlign = "center";
    title.style.fontSize = "30px";
  });

  // Centrar el contenido
  document.querySelector("#content").style.textAlign = "center";
}

function cambiarEstilo2() {
  // Cambiar el color de fondo del cuerpo
  document.body.style.backgroundColor = "purple";

  // Cambiar el color de los botones
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "green";
  btn3.style.backgroundColor = "white";

  // Cambiar el color y tamaño de los títulos
  var titles = document.querySelectorAll("#content h1");
  titles.forEach(function(title) {
    title.style.color = "orange";
    title.style.fontStyle = "italic";
    title.style.textAlign = "left";
    title.style.fontSize = "24px";
  });

  // Centrar el contenido
  document.querySelector("#content").style.textAlign = "center";
}

function cambiarEstilo3() {
  // Cambiar el color de fondo del cuerpo
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  // Cambiar el color de los botones
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "blue";

  // Cambiar el color, tamaño y centrado de los títulos
  var titles = document.querySelectorAll("#content h1");
  titles.forEach(function(title) {
    title.style.color = "red";
    title.style.textDecoration = "underline";
    title.style.textAlign = "right";
    title.style.fontSize = "36px";
  });

  // Centrar el contenido
  document.querySelector("#content").style.textAlign = "center";
}