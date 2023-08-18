

let dataCount = document.querySelector(".data-count");
let dataButton = document.querySelector(".data-button");
let count = dataCount.getAttribute("data-count");
var kuruAudio = new Audio('kuruSound.mp3')
let wrapper = document.querySelector('.wrapper');

function AddHerta() {
    let imgKuru = document.createElement('img');
    imgKuru.src = 'KuruMov.gif'
    wrapper.insertAdjacentElement('afterend', imgKuru);
    imgKuru.classList.add('kuruClick')
    setTimeout(() => {
        imgKuru.remove();
    }, 1300);
};


dataButton.addEventListener('click', function() {
    AddHerta();
    count++;
    dataCount.innerHTML = count;
    dataCount.setAttribute('data-count', count);
});