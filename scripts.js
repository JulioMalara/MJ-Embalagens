const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

function abrir(){
    const modal = document.getElementById ('quem-somos')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'quem-somos'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir2(){
    const modal2 = document.getElementById ('nossos-servicos')
    modal2.classList.add('abrir2')

    modal2.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar-servicos' || e.target.id == 'nossos-servicos'){
            modal2.classList.remove('abrir2')
        }
    })
}

