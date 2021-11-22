const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequatur nulla numquam vitae? Error tenetur rerum dolore vero ipsa nam dignissimos aut quam! Aspernatur quaerat optio eius dolores dolor ad illo natus, quidem voluptatem aperiam blanditiis, nisi ea voluptas distinctio officia beatae excepturi quia magnam? Harum sed fugit itaque facere.'
let idx = 1
let speed = 300 / speedEl.value



writeText()

function writeText() {
    textEl.innerHTML = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)