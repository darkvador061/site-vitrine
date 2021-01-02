//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    }else{
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;
});

// TYPED

// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Walter. Suivant actuellement une formation de développeur web, je suis à la recherche d'une expérience qui permettra de mettre en avant ma passion et mes connaissances en désireux de relever de nouveaux challenges. Passioné, sérieux et organisé, je reste à votre disposition dans la perpective de vous rencontrer pour démontrer ma motivation à concrétiser ensemble vos projets."],
    typeSpeed: 20,
  });
    
// COMPTEUR

let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() { 
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum : $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });   
        compteur = 1; 
    }
});

//AOS
AOS.init();


