let isOpen = true;
const hamBtn = document.querySelector('button.icon-btn');
const header = document.querySelector('header.header');
const headerContent = document.querySelector('div.header-content');
const headerList = document.querySelector('ul.header-list-popup')

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 900) {
        showMenu(false, false);
    }
})

if (hamBtn) {
    hamBtn.addEventListener('click', (e) => {
        showMenu(isOpen, !isOpen);
    })
}

function showMenu(toShow, newValue) {
    if (!toShow) {
        hamBtn.style.backgroundImage = 'url("./images/icon-hamburger.svg")';
        header.style.backgroundColor = "none";
        header.style.backgroundImage = "url('./images/mobile/image-hero.jpg')";
        headerContent.style.display = "block";
        headerList.style.display = "none";
    } else {
        header.style.backgroundColor = "black";
        header.style.backgroundImage = "none";
        hamBtn.style.backgroundImage = 'url("./images/icon-close.svg")';
        headerContent.style.display = "none";
        headerList.style.display = "flex";
    }

    isOpen = newValue;
}