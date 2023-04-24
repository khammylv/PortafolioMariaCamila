import {abrirPdf, menu, menu2} from './header.js';
import {FnSkill, FnsoftSkill} from './skills.js';
import {fnJob} from './job.js';
import { modalClose } from './modal.js';
import { Formulario } from './formulario.js';

const modal = document.getElementById('mi_modal');
let sBrowser = ""
const sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

//alert("Usted está utilizando: " + sBrowser);


window.onload = () => {
    FnSkill()
    FnsoftSkill()
    fnJob();
    modalClose();
}

const pdf = document.getElementById('pdf');

pdf.addEventListener('click', () => {
    abrirPdf();
});

window.addEventListener('scroll', () =>{
    
   // menu();
    menu2()
});



const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
     Formulario();
})
