$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

var info = 'Próxima temporada dia 31/02/2024';
var infoOut = '<i class="fas fa-info-circle"></i> MAIS INFORMAÇÕES';
function mouseOn(){
    document.getElementById('botao').innerHTML = info;
}

function mouseN(){
    document.getElementById('botao').innerHTML = infoOut;
}
