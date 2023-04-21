let nav = document.getElementById("vista");

export const abrirPdf = () =>{
  window.open('../pdf/cv.pdf', '_blank')
 
}

export const menu = () =>{
    let Desplazamiento_Actual = window.pageYOffset;
    if(Desplazamiento_Actual >= 1000 && Desplazamiento_Actual <= 1300){
        nav.style.visibility = "hidden";
    }else{
        nav.style.visibility = "visible";
    }
}

export const menu2 = () =>{
    let Desplazamiento_Actual = window.pageYOffset;
    if(Desplazamiento_Actual >= 3200){
        nav.style.visibility = "hidden";
        
    }
    
}