const nav = document.getElementById("vista");
const select = document.getElementById("section6");

export const abrirPdf = () =>{
  window.open('../pdf/cv .pdf', '_blank')
 
}

export const menu = () =>{
    const distance = select.getBoundingClientRect();
    if( distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0){
        nav.style.visibility = "hidden";
    }else{
        nav.style.visibility = "visible";
    }
    
}

