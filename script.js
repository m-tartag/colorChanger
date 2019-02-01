const colorBtn = document.querySelector('.colorBtn');
const bodyBackground = document.querySelector('body');

const colors = ['yellow', 'red', 'green', 'blue', 'purple', 'orange', 'lime'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    
    let random = Math.floor(Math.random() * colors.length)
    bodyBackground.style.backgroundColor = colors[random];
    
}