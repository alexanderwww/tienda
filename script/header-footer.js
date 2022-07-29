const showHeader=document.querySelector('.header-container');
const header_container=document.querySelector('.header-container');
const footer_container=document.querySelector('.footer-container');


// Agregar header completado
// Header para Link de subpages
function headerSubpages(){
    const pagina=document.querySelector('title');
    let freameHeader=document.createDocumentFragment();

    let divHeader=document.createElement('div');
    divHeader.classList.add('section','header')

    if(pagina.textContent=='Inicio'){
        // PAGINA INICIO 
        divHeader.innerHTML=`
        <span class="header-logo">Logo</span>
        <ul class="header-links">
            <li><a class="sub-subtitulo" href="">Inicio</a></li>
            <li><a class="sub-subtitulo" href="subpaginas/blog.html">Blog</a></li>
            <li><a class="sub-subtitulo" href="subpaginas/portafolio.html">Portafolio</a></li>
            <li><a class="sub-subtitulo" href="subpaginas/bibliografia.html">Bibliografia</a></li>
        </ul>
        <span class="header-icono">
            <i class="header-icono-menu fa fa-bars"></i>
            <i class="header-icono-exit fas fa-times"></i>
        </span>
        `;
    }
    else{
        divHeader.innerHTML=`
        <span class="header-logo">Logo</span>
        <ul class="header-links">
            <li><a class="sub-subtitulo" href="../index.html">Inicio</a></li>
            <li><a class="sub-subtitulo" href="blog.html">Blog</a></li>
            <li><a class="sub-subtitulo" href="portafolio.html">Portafolio</a></li>
            <li><a class="sub-subtitulo" href="bibliografia.html">Bibliografia</a></li>
        </ul>
        <span class="header-icono">
            <i class="header-icono-menu fa fa-bars"></i>
            <i class="header-icono-exit fas fa-times"></i>
        </span>
        `;
    }


    divHeader.appendChild(freameHeader);
    header_container.appendChild(divHeader);
}


// Agregar header completado
function header(){
    let freameHeader=document.createDocumentFragment();

    let divHeader=document.createElement('div');
    divHeader.classList.add('section','header')


    // PAGINA INICIO 
    divHeader.innerHTML=`
    <span class="header-logo"> <i class="fas fa-marker"></i> </span>
    <ul class="header-links">
        <li><a class="sub-subtitulo" href="#inicio">Inicio</a></li>
        <li><a class="sub-subtitulo" href="#inicio-planes">Planes</a></li>
        <li><a class="sub-subtitulo" href="#inicio-testimonios">Testimonios</a></li>
        <li><a class="sub-subtitulo" href="#inicio-contacto">Contacto</a></li>
    </ul>
    <span class="header-icono">
        <i class="header-icono-menu fa fa-bars"></i>
        <i class="header-icono-exit fas fa-times"></i>
    </span>
    `;



    divHeader.appendChild(freameHeader);
    header_container.appendChild(divHeader);
}


window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;

    if(scrollY>10){
        header_container.classList.add('active');
    }
    if(scrollY<10){
        header_container.classList.remove('active');
    }

});



function footer(){
    let freameFooter=document.createDocumentFragment();
    let divFooter=document.createElement('div');
    divFooter.classList.add('section','footer')
    divFooter.innerHTML=`
        <div class="container-info-footer">
            <div class="info">
                <a href="">POLITICA DE PRIVACIDAD</a>
                <a href="">AVISO LEGAL</a>
                <a href="">TERMINOS Y CONDICIONES</a>
            </div>
            <div class="redes">
                <a href='https://www.linkedin.com/in/alexander-dv/'> <i class="fab fa-linkedin-in"></i> </a>
                <a href='https://www.instagram.com/k_alexander023/'> <i class="fab fa-instagram"></i> </a>
                <a href='https://twitter.com/k_alexander023'> <i class="fab fa-twitter"></i> </a>
            </div>
        </div>
        <div class="separador"></div>
        <div class="container-title-footer">
            <span>© Copyright Kevin Alexander 2022</span>            
            <i class="fas fa-marker"></i>
        </div>
    `;

    divFooter.appendChild(freameFooter);
    footer_container.appendChild(divFooter);
}

header();
footer();
