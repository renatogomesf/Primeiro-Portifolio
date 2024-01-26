const menu = document.querySelector("#menu")
const abrir_svg = document.querySelector(".menu")
const fechar_svg = document.querySelector(".closemenu")
const navbar = document.querySelector("#NAVBAR")
const fechar = [...document.querySelectorAll("#NAVBAR")]


menu.addEventListener("click",()=>{
    if(navbar.style.display == "flex"){
        navbar.style.display = "none"
        fechar_svg.style.display = "none"
        abrir_svg.style.display = "block"
    }else{
        navbar.style.display = "flex"
        fechar_svg.style.display = "block"
        abrir_svg.style.display = "none"
    }
})


fechar.map((el)=>{
    el.addEventListener("click",()=>{
        navbar.style.display = "none"
        fechar_svg.style.display = "none"
        abrir_svg.style.display = "block"
    })
})