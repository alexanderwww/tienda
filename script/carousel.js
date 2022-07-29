const listaDeImg=document.querySelector('.caja-lista')

// Asi se ejecuta la libreria de Glider
// Cuando Carge la pagina 
window.addEventListener('load',()=>{

    // Pide dos Valores: 1ro es la lista de las img , 2do es la configuracion 
    // de como quieres que se ve el carousel 
    new Glider(listaDeImg,{
        // Cuantas img se van a mostrar
        slidesToShow:1,

        // Cuantas img se mueva al darle clik  al btn 
        slidesToScroll:1,

        // Si se puede mover con el mouse 
        // draggable: true,

        // Mostrar el indicador de la lista 
        dots:'.carousel-indicador',

        // Los btn de ver la siguiente img o anterior img 
        // arrows:{
        //     prev:'.caja-btn-siguiente',
        //     next:'.caja-btn-anterior'
        // },

        responsive: [
            {
            //   Si la pantalla es mayor a 500px se muestren 2 img 
            // La 2 opciones de arriba es para moviles :
            // slidesToShow: 1,
            // slidesToScroll: 1,

              breakpoint: 500,

              // Cuantas img y cuanto se va a desplazar las img 
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

              }
            },
            
            {
            //   Si la pantalla es mayor a 1000px (que se ve en el pc)
            //  se muestren 3 img 
                breakpoint: 1000,

                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,

                }
              }

          ]


    })

})
