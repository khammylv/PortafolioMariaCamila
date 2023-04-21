const skills = [
    {
        nombre: 'html',
        class: 'html',
        img: 'bx bxl-html5'
    },
    {
        nombre: 'javascript',
        class: 'js',
        img: 'bx bxl-javascript'
    },
    {
        nombre: 'css',
        class: 'css',
        img: 'bx bxl-css3'
    },
    {
        nombre: 'typescript',
        class: 'ts',
        img: 'bx bxl-typescript'
    },
    {
        nombre: 'nodejs',
        class: 'node',
        img: 'bx bxl-nodejs'
    },
    {
        nombre: 'angular',
        class: 'an',
        img: 'bx bxl-angular'
    },
    {
        nombre: 'git',
        class: 'git',
        img: 'bx bxl-git'
    },
    {
        nombre: 'firebase',
        class: 'fb',
        img: 'bx bxl-firebase'
    }
];


const lenguajes = document.getElementById('lenguajes');

export const FnSkill = () => {
    const arraySkill = skills.map((skill) => {
        return `<div class= 'lenguajes-skill ${skill.class}'>
        <i class = '${skill.img}'></i>
        <p>${skill.nombre.toUpperCase()}</p>
         </div>`
    })
    lenguajes.innerHTML += arraySkill.join('')
}

const softSkill = [
    {
        name: 'trabajo en equipo',
        img: '../img/equipo.svg',
        description: 'Disfruto colaborar con los demás y estoy convencida de que juntos podemos lograr más que trabajando de manera individual.'
    },
    {
        name: 'comunicación asertiva',
        img: '../img/comunicacion.svg',
        description: ' Se cómo comunicar mis ideas de manera efectiva y persuasiva, y esto me permite establecer relaciones positivas y constructivas.'
    },
    {
        name: 'Resolución de problemas',
        img: '../img/solucion.svg',
        description: 'Soy una persona creativa y curiosa, lo que me permite explorar diferentes soluciones a los problemas que se presentan en mi camino.'
    }
]
const sSkills = document.getElementById('soft-skill');
export const FnsoftSkill = () =>{
    const arraySkill = softSkill.map((skill) => {
       return `
       <div class="car-skills">
                    <img src="${skill.img}" alt="" class="images">
                    <p>${skill.name.toUpperCase()}</p>
                    <div class="overlay">
                        <div class="text">${skill.description}</div>
                    </div>
      </div>          
       `
    })
    sSkills.innerHTML += arraySkill.join('')
}

/*<form class="form" id="form">
                    <div class="form-container">
                        <h2>Contacto</h2>
                        <p>¿Quieres contactarme?</p>
                        <p>Complete el siguiente formulario y me pondre en contacto con usted lo antes posible.</p>
                        <div class="grupo">
                            <input type="text" class="form-input" id="nombre" placeholder="Nombre:"><span
                                class="barra"></span>
                        </div>
                        <div class="grupo">
                            <input type="email" class="form-input" id="email" placeholder="Email:"><span
                                class="barra"></span>
                        </div>
                        <div class="grupo">
                            <input type="text" class="form-input" id="asunto" placeholder="Asunto:"> <span
                                class="barra"></span>
                        </div>
                        <div class="grupo">
                            <textarea name="" id="mensaje" cols="30" rows="10" class="form-input input-mensaje"
                                placeholder="Mensaje:"></textarea></textarea><span class="barra"></span>
                            <input type="submit" value="Enviar" class="form-enviar">
                            <p class="warnings" id="warnings"></p>
                        </div>
                </form>*/