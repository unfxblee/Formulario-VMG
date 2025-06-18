let formulario= document.getElementById("Registro");
let nombre_formulario= document.getElementById("nombre");
let edad= document.getElementById("edad");
let genero=['masculino', 'femenino', 'otro'];
let input_genero= document.querySelector("input[name='genero']:checked");
let intereses=['Tecnologia', 'Deportes', 'Musica', 'Arte'];
let input_intereses= document.querySelectorAll("input[name='Interes']:checked");
console.log('El genero seleccionado es ' + input_genero.value )

formulario.addEventListener("submit", e =>
{
    e.preventDefault();
    console.log("El nombre es " + nombre_formulario.value )
    nombre_formulario.value === "" ? console.log("nombre vacio") : console.log("nombre valido");
    isNaN(edad.value) ? console.log("No es un numero"): console.log("es un numero");
    console.log(edad.value);
    genero.indexOf(input_genero.value) !== -1 ? console.log("valido"): console.log("invalido");
    intereses.indexOf(input_intereses.value) !== -1 ? console.log("valido"): console.log("invalido");
});
