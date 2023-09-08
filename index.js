//Meu Arquivo JS, adicione se precisar algo aqui
const handlePhone = (event) => {
    let tel = event.target
    tel.value = phoneMask(tel.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

window.addEventListener("scroll",function(){
    let navbarmenu = document.querySelector('.navbarmenu')
    navbarmenu.classList.toggle('rolagem',window.scrollY > 30)
})

    document.addEventListener('DOMContentLoaded', function () {
        var navbarCollapse = document.querySelector('#navbarNavDropdown');
        var iconOpen = document.querySelector('.navbar-toggler-icon-open');
        var iconClose = document.querySelector('.navbar-toggler-icon-close');

        navbarCollapse.addEventListener('show.bs.collapse', function () {
            iconOpen.style.display = 'none';
            iconClose.style.display = 'block';
        });

        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            iconOpen.style.display = 'block';
            iconClose.style.display = 'none';
        });
    });

    $(document).ready(function() {
        $('.navbar-toggler').click(function() {
            $('.navbar').toggleClass('expanded');
        });
    });


    window.addEventListener("scroll",function(){
        let navbarmenu = document.querySelector('#navbar')
        navbarmenu.classList.toggle('rolagem',window.scrollY > 40)
    })
    
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        slideBy: 6, 
        rtl:true,
        mouseDrag: false,
        responsive: {
          0: {
            items: 2,
            slideBy: 2 
          },
          576: {
            items: 4,
            slideBy: 4 
          },
          768: {
            items: 5,
            slideBy: 5 
          },
          992: {
            items: 6,
            slideBy: 6 
          }
        }
      });
    });
    