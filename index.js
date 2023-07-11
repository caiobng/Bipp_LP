window.addEventListener("scroll",function(){
    let navbarmenu = document.querySelector('#navbar')
    navbarmenu.classList.toggle('rolagem',window.scrollY > 0)
})

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
