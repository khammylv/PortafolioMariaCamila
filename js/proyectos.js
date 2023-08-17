const proyects = [
    {
        nameProyec: "Variety Store",
        des: "Ecommerce Angular",
        linkGit: "https://github.com/khammylv/ecommerce-angular",
        pageLink: "https://ecommerce-angular-tau.vercel.app/home",
        img: "../img/ecommerceangular.png",
        mov1: "derecha",
        mov2: "izquierda",
        typeCard: "exp-Derecha"
    },
    {
        nameProyec: "Burguer Queen",
        des: "App de control de pedidos",
        linkGit: "https://github.com/khammylv/DEV001-burger-queen-api-client",
        pageLink: "https://burgerqueen-b232e.web.app/home",
        img: "../img/BQ.png",
        mov1: "izquierda",
        mov2: "derecha",
        typeCard: "exp-Izquieda"
    },
    {
        nameProyec: "Markdown Links",
        des: "Modulo NPM",
        linkGit: "https://github.com/khammylv/markdown-links",
        pageLink: "https://khammylv.github.io/markdown-links/",
        img: "../img/mdlinks.png",
        mov1: "derecha",
        mov2: "izquierda",
        typeCard: "exp-Derecha"
    },
    {
        nameProyec: "LyMusic",
        des: "Red Social",
        linkGit: "https://github.com/khammylv/DEV001-social-network",
        pageLink: "https://lymusic-1dfa8.web.app/",
        img: "../img/socialNet.png",
        mov1: "izquierda",
        mov2: "derecha",
        typeCard: "exp-Izquieda"
    },
    {
        nameProyec: "Studio Ghibli",
        des: "Pagina de peliculas",
        linkGit: "https://github.com/khammylv/DEV001-data-lovers",
        pageLink: "https://khammylv.github.io/DEV001-data-lovers/",
        img: "../img/DL.png",
        mov1: "derecha",
        mov2: "izquierda",
        typeCard: "exp-Derecha"
    },
    {
        nameProyec: "Wallep App",
        des: "Billetera Virtual",
        linkGit: "https://github.com/khammylv/card-validation",
        pageLink: "https://khammylv.github.io/card-validation/#",
        img: "../img/cardVali.png",
        mov1: "izquierda",
        mov2: "derecha",
        typeCard: "exp-Izquieda"
    },
    {
        nameProyec: "Juego Ahorcado",
        des: "Juego Web",
        linkGit: "https://github.com/khammylv/ahorcado2.0",
        pageLink: "https://khammylv.github.io/ahorcado2.0/",
        img: "../img/ahorcado.png",
        mov1: "derecha",
        mov2: "izquierda",
        typeCard: "exp-Derecha"
    },
    {
        nameProyec: "Encriptador",
        des: "App de mensajes secretos",
        linkGit: "https://github.com/khammylv/encriptadorTexto",
        pageLink: "https://khammylv.github.io/encriptadorTexto/",
        img: "../img/encriptador.png",
        mov1: "izquierda",
        mov2: "derecha",
        typeCard: "exp-Izquieda"
    }
]

const divExp = document.getElementById('exp');

export const expertDiv = () => {
    const arrayDiv = proyects.map((exp) => {
        return `<div class="cartas-experiencia ${exp.typeCard}">
      <div class="img-cartas-experiencia ${exp.mov1}">
          <img src="${exp.img}" alt="" class="img-experiencia">
      </div>
      <div class="texto-cartas-experiencia ${exp.mov2}">
          <h3>${exp.nameProyec}</h3>
          <p>${exp.des}</p>
          <ol>
              <a href="${exp.linkGit}" class="btn-repositorio "target="_blank" >Repositorio</a>
              <a href="${exp.pageLink}" class="btn-demo" target="_blank" >Ver demo</a>
          </ol>
      </div>
  </div>`
    });

    divExp.innerHTML += arrayDiv.join('')
}

/*              <div class="cartas-experiencia exp-Izquieda">
                        <div class="img-cartas-experiencia izquierda">
                            <img src="/img/BQ.png" alt="" class="img-experiencia">
                        </div>
                        <div class="texto-cartas-experiencia derecha">
                            <h3>Burguer Queen</h3>
                            <p>App de control de pedidos</p>
                            <ol>
                                <a href="https://github.com/khammylv/DEV001-burger-queen-api-client" class="btn-repositorio "target="_blank" >Repositorio</a>
                                <a href="https://burgerqueen-b232e.web.app/home" class="btn-demo" target="_blank" >Ver demo</a>
                            </ol>
                        </div>
                    </div>
    
                    <div class="cartas-experiencia exp-Derecha">
                        <div class="img-cartas-experiencia derecha">
                            <img src="/img/socialNet.png" alt="" class="img-experiencia">
                        </div>
                        <div class="texto-cartas-experiencia izquierda">
                            <h3>LyMusic</h3>
                            <p>Red Social</p>
                            <ol>
                                <a href="https://github.com/khammylv/DEV001-social-network" class="btn-repositorio" target="_blank">Repositorio</a>
                                <a href="https://lymusic-1dfa8.web.app/" class="btn-demo"target="_blank" >Ver demo</a>
                            </ol>
                        </div>
                       
                    </div>*/