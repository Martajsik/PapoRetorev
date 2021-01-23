
// =====================================
//Select element function
const selectElement = function(element){
    return document.querySelector(element)
}


window.sr = ScrollReveal();
sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});

sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
});
sr.reveal('.animate-top',{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:600
});
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
});


const link_menu = document.querySelectorAll(".menu a")
const btn = document.querySelector("#chk")


link_menu[0].addEventListener("click", e =>{
    btn.checked = false
})

link_menu[1].addEventListener("click", e =>{
    btn.checked = false
})


link_menu[2].addEventListener("click", e =>{
    btn.checked = false
})



link_menu[3].addEventListener("click", e =>{
    btn.checked = false
})

link_menu[4].addEventListener("click", e =>{
    btn.checked = false
})

link_menu[5].addEventListener("click", e =>{
    btn.checked = false
})

link_menu[6].addEventListener("click", e =>{
    btn.checked = false
})



const btn_span = document.querySelector(".popup span")
const btn_vacina = document.querySelector(".vacina");

btn_span.addEventListener("click", _ =>{
    document.querySelector(".popup").style.display = "none"
})
btn_vacina.addEventListener("click", e =>{
    e.preventDefault()
    document.querySelector(".popup").style.display = "block"
})