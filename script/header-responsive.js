const header_links=document.querySelector('.header-links');
const header_btn=document.querySelector('.header-icono');


const header_btn_exit=document.querySelector('.header-icono-exit');
const header_btn_menu=document.querySelector('.header-icono-menu');


header_btn.addEventListener('click',() =>{
    ocultarHeader()
})


const links=document.querySelectorAll('.sub-subtitulo')
links.forEach(item => {    
    item.addEventListener('click',()=>{
        ocultarHeader()
    })
})

function ocultarHeader(){
    header_links.classList.toggle('header-activo');
    console.log('click...');

    header_btn_exit.classList.toggle('header-activo');
    header_btn_menu.classList.toggle('header-desactivado');
}