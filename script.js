

let dataCount = document.querySelector(".data-count");
let dataButton = document.querySelector(".data-button");
let count = dataCount.getAttribute("data-count");
let kuruId = document.getElementById('kuru-id')
var kuruAudio = new Audio('kuruSound.mp3')


dataButton.addEventListener('click', function() {
    kuruAudio.play();
    count++;
    kuruId.classList.add('kuruClick');
    dataCount.innerHTML = count;
    dataCount.setAttribute('data-count', count);
    setTimeout(() => {
        kuruId.classList.remove('kuruClick')
        kuruAudio.load();
    }, 1300);
});

