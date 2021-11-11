const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profile_img.innerHTML =
    '<img src="https://scontent.fqps2-1.fna.fbcdn.net/v/t39.30808-6/fr/cp0/e15/q65/239017071_4207484519372515_6812356768401597298_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeH_IENpOg2FX7qBcGh7pwNBrzp5ZTvckDKvOnllO9yQMu3ZpmryQ6E0Kx_uUvcukajKidqZJEwpLwZ_cur31eMN&_nc_ohc=Zl8uD2Tyk0cAX-ujBcR&tn=krCUPhcGNN0u-yTB&_nc_ht=scontent.fqps2-1.fna&oh=708626404514c566286384071bc66a36&oe=6191BB95" alt="" />'
  name.innerHTML = 'Van Riwerson'
  date.innerHTML = 'Nov 11, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
