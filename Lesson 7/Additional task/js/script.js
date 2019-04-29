window.addEventListener('DOMContentLoaded', () => {

let hadouken = document.querySelector('#hadouken'),
    seven = document.getElementById('seven');



// function castHadouken() {
//     let position = 400;

//     let timer = setInterval (step, 1);
//     function step() {
//         if (position == 1000) {
//             clearInterval(timer);
//         } else {
//             position++;
//             hadouken.style.left = position + 'px';
//         }
//     }
// }

function castHadouken() {
    let position = 400;

    requestAnimationFrame(step);
    function step() {
        if (position == 1000) {
            cancelAnimationFrame(castHadouken);
        } else {
            requestAnimationFrame(step);
            position++;
            hadouken.style.left = position + 'px';
        }
    }
}


seven.addEventListener('click', castHadouken);
});