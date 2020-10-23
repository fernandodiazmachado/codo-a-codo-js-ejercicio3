const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btnLogin = document.querySelector("#login");
const form = document.querySelector("#form");

email.addEventListener("focusout", validarInput);
password.addEventListener("focusout", validarInput);

function validarInput(ev){
    const input = ev.target;
    input.classList.remove("is-valid","is-invalid");
    switch(input.type){
        case "email":
            input.classList.add(input.value.includes("@") ? "is-valid" : "is-invalid");
            if (input.classList.contains("is-invalid")) {
                alertUser("Usuaro invalido");
            }
            break;
        case "password":
            input.classList.add(input.value.length >6 ? "is-valid" : "is-invalid");
            if (input.classList.contains("is-invalid")) {
                alertUser("La contraseña no cumple con los requerimientos");
            }
            break;
    }
    validarBoton();
}

function validarBoton(){
    const inputsRequiered = Array.from(document.querySelectorAll("#form input[required]"));
    if (inputsRequiered.every( (e) => e.classList.contains("is-valid"))){
        btnLogin.removeAttribute("disabled");
    }else{
        btnLogin.setAttribute("disabled","");
    }
}

function alertUser(message){
    alert(message);
}