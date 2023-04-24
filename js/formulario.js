import { modalOpen } from "./modal.js";

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const enviarChrome = document.getElementById("chrome");
export const Formulario =()=>{
    let warnings = "";
    let entrar = false;
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexAsunto = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const regexMensaje = /^.{1,255}$/;

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
        
     modalOpen('Warning', warnings)
    }else{
        const sUsrAg = navigator.userAgent;
        if(sUsrAg.indexOf("Chrome") > -1 && screen.width > 600) {
            enviarChrome.setAttribute('href', `mailto:khammylv@gmail.com?subject=${nombre.value} ${email.value}&Asunto=${asunto.value}&body=${mensaje.value}`);
            enviarChrome.click();
            form.reset();
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
                modalOpen('Error', 'Lo siento ha ocurrido un error');
                form.reset();
                console.log(err);
            });
            
        }
       
     }


}

//form_v1_ZaQqG7jS8kF3TcHaXfcASZpX
//https://submit-form.com/leRGKAs9