const toggles = document.querySelectorAll('.faq-toggle')
const faqCards = document.querySelectorAll('.faq')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        removeActiveClass()
        
        toggle.parentNode.classList.toggle('active')
    })
})

function removeActiveClass() {
    faqCards.forEach(faqCard => {
        faqCard.classList.remove('active')
    })
}