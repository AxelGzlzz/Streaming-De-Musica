/*1- traer los input
2- validarlos
3- analizar si coinciden
4- dar acceso
*/
const logEmail = document.getElementById('loginEmail')
const logContra = document.getElementById('loginPassword')
const btnLogin = document.getElementById('btnLogin')

const validMail = (input) =>{
    const expresionReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(expresionReg.test(input.value)){
        input.className = "form-control is-valid";
    return true;
    }else{
        input.className = "form-control is-invalid";
    false;
    }
}

const login = () => {
if (validMail(logEmail.value) === 'hola@music.com'){
    //aqui va la logica para que redireccione el enlace
}

}