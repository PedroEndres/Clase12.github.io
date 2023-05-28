function Saludo() {
  let nombre = prompt("Ingresar nombre: ");
  if (nombre === "" || nombre === null) {
    alert("Ingrese su nombre");
    Saludo();
  } else {
    alert(`Bienvenido ${nombre}`);
  }
}

Saludo();
