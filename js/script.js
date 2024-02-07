let arreglo = [];
let flag = false;

const tabla = document.getElementById("body-tabla");
const btnEnviar = document.getElementById("enviar-formulario");
const username = document.getElementById("username");
const name = document.getElementById("name");
const imagen = document.getElementById("imagen");
const pet = document.getElementById("pet");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (username.value == ""){
        alert("El campo username se encuentra vacío");
        flag = true;
    }

    if (name.value == ""){
        alert("El campo nombre se encuentra vacío");
        flag = true;
    }

    if (imagen.value == ""){
        alert("No se seleccionó ningún archivo del campo imagen");
        flag = true;
    }

    if (pet.value == ""){
        alert("El campo mascota se encuentra vacío");
        flag = true;
    }

    if (!(validateUsername(username.value))) {
        alert("El campo username no es valido");
        flag = true;
    }

    for (let elemento of arreglo){
        if(elemento.username == username.value){
            console.log("Existe");
            flag = true;
        }
    }
    console.log(flag);
    actualizarTabla();
}
)

const validateUsername = (username) => {
    return String(username)
    .match(/^(?!.*^\.)(?!.*\.$).*\..*$/);
}

const actualizarTabla = () => {
    let tag = `<tr>
    <td>${username.value}</td>
    <td>${name.value}</td>
    <td>${imagen.value}</td>
    <td>${pet.value}</td>
    </tr>`;
    tabla.innerHTML += tag;
}