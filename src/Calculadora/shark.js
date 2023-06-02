//codifiacion en JS
//Operaciones lógicas

let resultado = document.getElementById("result");

function addToResult(valor) {
  resultado.value += valor;
}

function addOperator(operador) {
  resultado.value += " " + operador + " ";
}
//Función que elimina datos
function clearResult() {
  resultado.value = "";
}
//Función encargada de operar los datos
function calculate() {
  resultado.value = eval(resultado.value);
}

function addOperator(operador) {
    if (operador === "Math.sqrt(") {
      resultado.value += "Math.sqrt(";
    } else if (operador === "Math.pow(") {
      resultado.value += "Math.pow(";
    } else {
      resultado.value += " " + operador + " ";
    }
  }
  function calculate() {
    let expr = resultado.value.replace(/x/g, "*").replace(/y/g, ",");
    resultado.value = eval(expr);
  }
  function addOperator(operador) {
    if (operador === "Math.sqrt(") {
      resultado.value += "Math.sqrt(";
    } else if (operador === "Math.pow(") {
      resultado.value += "Math.pow(";
    } else if (operador === "Math.sin(") {
      resultado.value += "Math.sin(";
    } else if (operador === "Math.cos(") {
      resultado.value += "Math.cos(";
    } else if (operador === "Math.tan(") {
      resultado.value += "Math.tan(";
    } else {
      resultado.value += " " + operador + " ";
    }
  }