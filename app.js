const solicitar = document.getElementById('solicitar');
const container_id = document.getElementById('container_id');
const cerrar = document.getElementById('cerrar');

solicitar.addEventListener('click', () => {
    container_id.classList.add('show');

});

cerrar.addEventListener('click', () => {
    container_id.classList.remove('show');
});



let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let peso = document.getElementById("peso").value;
let text = document.getElementById("resultado");

text.innerHTML = "Hola " + nombre + "este es el plan alimenticio";

