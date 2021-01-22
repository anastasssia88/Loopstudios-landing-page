// const hamburger = document.getElementById('hamburger');
// const navUL = document.getElementById('nav-ul');
// const toggle = document.getElementById('toggle')

// function showNavUL() {
//     console.log('Button clicked')
//     if (navUL.style.display = 'none') {
//         navUL.style.display = 'block'
//     } 
// }

// function hideNavUL() {
//     if (navUL.style.display = 'block') {
//         navUL.style.display = 'none'
//     }
// }

// hamburger.addEventListener('click', () => showNavUL())

const header = document.getElementById('hero')
const mobileDropdown = document.getElementById('mobile-menu')
const heroText = document.getElementById('hero-text')
const toggleShow = document.getElementById('toggleShow')
const toggleHide = document.getElementById('toggleHide')



function showMobileDropdown() {
    console.log('showMobileDropdown')
    if (mobileDropdown.style.display = 'none') {
        mobileDropdown.style.display = 'block'
        header.style.background = 'black'
        heroText.style.display='none'

        toggleShow.style.display = 'none'
        toggleHide.style.display = 'inline'

    }
}

function hideMobileDropdown() {
    mobileDropdown.style.display = 'none'
    header.style.background = "url('../images/mobile/image-hero.jpg')"
    heroText.style.display='block'

    toggleShow.style.display = 'inline'
    toggleHide.style.display = 'none'
}


const gridImg = document.getElementsByClass('grid-img')
const gridHeading = document.getElementsByClass('grid-heading')

function changeTextColor() {
    gridHeading.style.color= 'black';
}

// function changeTextColor() {
//     if (gridImg.style.opacity = 0.3) {
//         gridHeading.style.color= 'black';
//     } else {
//         gridHeading.style.color= 'white';
//     }
// }

