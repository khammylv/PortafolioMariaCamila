const modal = document.getElementById('mi_modal');
const contentModal = document.getElementById('flex_modal');
const cerrar = document.getElementById("close");
const modalD = (type, mensaje) => {
    const contModal = `
    <div class="alert ${type}">
                    <span class="closebtn" id = "close">&times;</span>
                    <strong>${type}!</strong> ${mensaje}
                    
    </div>
    `
    contentModal.innerHTML = contModal
}

export const modalOpen = (type, mensaje)=>{
  modal.style.display = 'block';
  modalD(type, mensaje);
  setTimeout(()=>{
    modal.style.display = 'none';
  },3000)
}

export const modalClose = ()=>{
    contentModal.addEventListener('mouseup', (e)=>{
        if(e.target.id === 'close'){
            modal.style.display = 'none';
        }
        
    })
   
}

