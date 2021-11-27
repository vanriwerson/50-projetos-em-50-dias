const contents = document.querySelectorAll('.content')
const navTabs = document.querySelectorAll('nav ul li')

navTabs.forEach((navTab, idx) => {
    navTab.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        navTab.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    navTabs.forEach(navTab => navTab.classList.remove('active'))
}