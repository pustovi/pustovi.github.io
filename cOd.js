let images = document.querySelectorAll('.slider-item'),
sliderLine = document.querySelector('.slider-line'),
slider = document.querySelector('.slider'),
nextBtn = document.querySelector('.slider-next'),
prevBtn = document.querySelector('.slider-prev');

let count = 0,
width;
// розрахунок ширини робочої області
function init() {
width = slider.clientWidth;//Зчитуємо тих 70% (ширина слайдера)
for (let i = 0; i < images.length; i++) {
   images[i].style.width = width + 'px'; //присвоюємо кожній фотографії ширину слайдера
}
sliderLine.style.width = width * images.length + 'px';//ширина смужки фотографій
move();
}
window.addEventListener('resize', init)//викликаємо перерахунок на кожну зміну вікна
init();

function move() {
sliderLine.style.transform = 'translate(-' + count * width + 'px)';//зміщення смужки руху
}
function moveForvard() {
count++;//додає порядок слайду
if (count >= images.length) {
   count = 0;
}
move();

}
function moveBack() {
count--;
if (count < 0) {
   count = images.length - 1;
}
move();
}
prevBtn.onclick = moveBack;

nextBtn.onclick = moveForvard;
