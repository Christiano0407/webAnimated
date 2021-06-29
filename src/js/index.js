console.log("Hello!"); 

// Variables 
const intro = document.querySelector(`.intro`); 
const logo  = document.querySelector(`.logo-header`); 
const logoSpan = document.querySelectorAll(`.logo`); 

// Le vamos a decir a tu pantalla que, se cargue / ejecute un evento:
// Ejecutar una función con un equivalente de tiempo. E

window.addEventListener(`DOMContentLoaded`, () => {
    setTimeout(() => {
       
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add(`active`); 
            }, (idx + 1) * 500)
        })
    })

})
