let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let fecha = document.getElementById("fecha")
let hora = document.getElementById("hora")
let btnEnviar = document.getElementById("btnSubmit")
let formulario = document.getElementById("form")
let usuario = [];


formulario.addEventListener("submit",e=>{
    e.preventDefault();
    usuario.push({
        nombre:nombre.value,
        apellido:apellido.value,
        email:email.value,
        telefono:telefono.value,
        fecha:fecha.value,
        hora:hora.value
    })
    console.log(usuario);
})
usuario.forEach((elem)=>{
    console.log(elem);
})