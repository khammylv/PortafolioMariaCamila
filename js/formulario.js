import { modalOpen } from "./modal.js";

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
export const Formulario =()=>{
    let warnings = "";
    let entrar = false;
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexAsunto = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const regexMensaje = /^[a-zA-ZÀ-ÿ\s]{1,250}$/;

    if(!regexNombre.test(nombre.value)){
        warnings += `El nombre no es valido<br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El Correo no es valido <br>`
        entrar = true
    }

    if(!regexAsunto.test(asunto.value)){
        warnings += `El asunto no es valido <br>`
        entrar = true
    }

    if(!regexMensaje.test(mensaje.value)){
        warnings += `El mensaje no es valido <br>`
        entrar = true
    }
    
    if(entrar){
        
     modalOpen('Alert', warnings)
    }else{
        
        fetch("https://formsubmit.co/ajax/khammylv@gmail.com",{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre.value,
                correo: email.value,
                asunto: asunto.value,
                mensaje: mensaje.value
            })
        })
        .then(res => res.ok? res.json(): Promise.reject(res))
        .then(json =>{
            modalOpen('Succes', 'Mensaje enviado con exito');
            form.reset(); 
        })
        .catch(err =>{
            console.log(err);
        });
        // modalOpen('Succes', 'Mensaje enviado con exito');
        // form.reset(); 
     }


}