const cuerpoTabla = document.getElementById("body-tabla");
const formUser = document.getElementById("form-user");

let arreglo = [];
let flag = false;

console.log(arreglo)

formUser.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (formUser.username.value == ""){
        alert("El campo username se encuentra vacío");
        flag = true;
    }

    if (formUser.name.value == ""){
        alert("El campo nombre se encuentra vacío");
        flag = true;
    }

    if (formUser.imagen.value == ""){
        alert("No se seleccionó ningún archivo del campo imagen");
        flag = true;
    }

    if (formUser.pet.value == ""){
        alert("El campo mascota se encuentra vacío");
        flag = true;
    }

    if (!(validateUsername(formUser.username.value))) {
        alert("El campo username no es valido");
        flag = true;
    }

    for (let elemento of arreglo){
        if(elemento.username == formUser.username.value){
            console.log("Existe");
            flag = true;
        }
    }
    if(flag)
        event.preventDefault();


    
    arreglo.push({
        username: formUser.username.value,
        name: formUser.name.value,
        imagen: formUser.imagen.value,
        pet: formUser.pet.value
    });
    console.log(arreglo);
    let tag = `<tr>
    <td>${formUser.username.value}</td>
    <td>${formUser.name.value}</td>
    <td>${formUser.imagen.value}></td>
    <td>${formUser.pet.value}</td>
    </tr>`
    console.log(formUser.imagen.value);
    
    cuerpoTabla.innerHTML += tag;
    console.log(arreglo);
    alert("Llega")
})

const validateUsername = (username) => {
    return String(username)
    .match(/^(?!.*^\.)(?!.*\.$).*\..*$/);
}