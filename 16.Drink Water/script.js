/**plays goal reached */
const btn = document.getElementById('btn')

btn.addEventListener("click", () => {
    document.getElementById('goal-reached').play();
  });