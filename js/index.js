import {abrirPdf, menu} from './header.js';
import {FnSkill, FnsoftSkill} from './skills.js';
import {fnJob} from './job.js';
import {expertDiv} from './proyectos.js'
import { modalClose } from './modal.js';
import { Formulario } from './formulario.js';

window.onload = () => {
    FnSkill();
    FnsoftSkill();
    fnJob();
    expertDiv();
    modalClose();
}

const pdf = document.getElementById('pdf');

pdf.addEventListener('click', () => {
    abrirPdf();
});

window.addEventListener('scroll', () =>{
    
   menu();
 
});



const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
     Formulario();
})
