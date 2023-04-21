const jobs = [
    {
        
        descripcion: 'Diplomado en  aplicaciones web',
        ytitle: '2021 UNAL',
        img: '../img/mintic.png',
        diploma: '../pdf/CertificadoCursoAlumno (3).pdf'
    },
    {
       
        descripcion: 'Programa de desarrollo Front End',
        ytitle: '2022 Alura-ONE',
        img: '../img/oracle.png',
        diploma: '../pdf/Maria Camila Leal Vasquez - Programa -.pdf'
    },
    {
      
        descripcion: 'Bootcamp de desarrollo Front - End ',
        ytitle: '2023 Laboratoria',
        img: '../img/laboratoria.png',
        diploma: '../pdf/laboratoria.pdf'
    }
]
const Ajobs = document.getElementById('job');
export const fnJob = ()=>{
    const arrayJob = jobs.map((job) => {
        return `
        <div class="card-cusos">
                    <img src="${job.img}" alt="" class="img-cursos">
                    <p>${job.descripcion}</p>
                    <p><a href="${job.diploma}" target="_blank"><i class='bx bx-link-alt'></i></a>2021 UNAL</p>
                </div>
        `
    })
    Ajobs.innerHTML += arrayJob.join('')
}