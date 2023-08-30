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