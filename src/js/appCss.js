console.log("Grid"); 
console.group("Image")

let images = document.querySelectorAll(`.image`);
console.log(images);

window.addEventListener(`DOMContentLoaded`, (e) => {
    images.forEach((image, idx) => {
        setTimeout(() => {
            image.classList.add(`active`); 
        }, idx * 100); 
    })
})

console.groupEnd(); 