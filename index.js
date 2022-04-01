function changeText(text) {
    document.getElementById('header-text').innerHTML = text;
}


function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    key.classList.remove("keyPlay");
    
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("keyPlay");
    
}

function removeSound(event) {
     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => key.classList.remove('keyPlay'));

}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeSound);