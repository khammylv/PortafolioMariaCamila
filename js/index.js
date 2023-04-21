import {abrirPdf, menu, menu2} from './header.js';
import {FnSkill, FnsoftSkill} from './skills.js';
import {fnJob} from './job.js';
import { modalClose } from './modal.js';
import { Formulario } from './formulario.js';

const modal = document.getElementById('mi_modal');


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
