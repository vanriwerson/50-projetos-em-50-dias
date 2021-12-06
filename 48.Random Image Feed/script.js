const imgContainer = document.querySelector('.container')
const unsplashUrl = 'https://source.unsplash.com/random/'
const rows = 10

for(row = 0; row < rows *3; row++) {    
    const randomImage = document.createElement('img')
    randomImage.src =`${unsplashUrl}${getRandomSize()}`

    imgContainer.appendChild(randomImage)
}

function getRandomSize() { 
    /**chamar o método getRandomNumber em cada dimensão 
     * diminui a incidência de repetições**/
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}