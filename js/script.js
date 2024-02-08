let arreglo = [];
let flag = false;
let flagMascota = false;

const tabla = document.getElementById("body-tabla");
const btnEnviar = document.getElementById("enviar-formulario");
const username = document.getElementById("username");
const name = document.getElementById("name");
const imagen = document.getElementById("imagen");
const pet = document.getElementById("pet");

let enviar = () => {
    //event.preventDefault();
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
            for (let mascota of elemento.pets){
                if(mascota == pet.value){
                    alert("El usuario ya tiene registrada una mascota con ese nombre");
                    flag = true;
                }
                else {
                    elemento.pets.push(pet.value);
                    flagMascota = true;
                    break;
                }
            }
        }
    }
    console.log(flag);
    if(flag){
        flag=false;
    }
    else if(flagMascota){
        flagMascota = false;
    }
    else{
        arreglo.push({
            username: username.value,
            name: name.value,
            imagen: imagen.value,
            pets: [pet.value]});
        actualizarTabla();
    }
    console.log(arreglo);
    document.getElementById("form-amigos").reset();
}


const mostrarListaMascotas = (usuario) => {
    const lista = document.getElementById("lista-mascotas");

    for (let elemento of arreglo){
        if(elemento.username == String(usuario)){
            lista.innerHTML = "";
            for (let mascota of elemento.pets){
                lista.innerHTML += `<li>${mascota}</li>`;
            }
        }
    }
}

const validateUsername = (username) => {
    return String(username)
    .match(/^(?!.*^\.)(?!.*\.$).*\..*$/);
}

const actualizarTabla = () => {
    let tag = `<tr>
    <td>${username.value}</td>
    <td>${name.value}</td>
    <td>${imagen.value}</td>
    <td><button onclick="mostrarListaMascotas('${String(username.value)}')">Ver mascotas</button></td>
    </tr>`;
    tabla.innerHTML += tag;
}