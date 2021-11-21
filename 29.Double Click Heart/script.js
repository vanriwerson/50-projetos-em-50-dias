const loveMe =  document.querySelector('.loveMe')
const times = document.getElementById('times')

let clickTime = 0
let likes = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if(new Date().getTime() - clickTime < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    
    const x = e.clientX;
    const y = e.clientY;

    const loveMeLeft = e.target.offsetLeft;
    const loveMeTop = e.target.offsetTop;

    const xInside = x - loveMeLeft;
    const yInside = y - loveMeTop;

    heart.style.left = xInside + "px";
    heart.style.top = yInside + "px";

    loveMe.appendChild(heart);

    times.innerText = ++likes

    setTimeout(() => heart.remove(), 600)
}