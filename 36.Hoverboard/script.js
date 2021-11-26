const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "2ecc71"];
const maxSquareNumber = 500;

for (let square = 0; square < maxSquareNumber; square++) {
  const squareEl = document.createElement("div");
  squareEl.classList.add("square");

  squareEl.addEventListener('mouseover', () => setColor(squareEl))
  squareEl.addEventListener('mouseout', () => removeColor(squareEl))

  container.appendChild(squareEl);
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
