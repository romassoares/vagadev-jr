const btn = document.querySelector('#img-confir')
btn.onclick = function () {
    const modal = document.querySelector('#confir')
    modal.style.display = 'none'
}

const localStorageAmount = JSON.parse(localStorage.getItem('@amount'))
let existAmount = localStorage.getItem('@amount') !== null ? localStorageAmount : []

const purchase = event => {
    document.querySelector('#confir').style.display = 'none'
    const modal = document.querySelector('#confir')
    modal.style.display = 'flex'
    event.innerText = 'COMPRADO!'

    event.setAttribute('style', "background-image: url('../svgs/image_6-removebg-preview 1.svg'); background-position: left top;background-repeat: no-repeat; background-color: var(--a)")
    badge()
}

const badge = () => {
    let totAmount = JSON.parse(localStorage.getItem('@amount'))
    const total = totAmount === null ? '0' : totAmount.tot
    let updatetotal = existAmount.push(total + 1)

    localStorage.setItem('@amount', JSON.stringify({ tot: updatetotal }))
    updateDom()
}

const updateDom = () => {
    let totAmount = JSON.parse(localStorage.getItem('@amount'))
    const total = totAmount === null ? '0' : totAmount.tot
    document.querySelector('#badge').innerHTML = total
}

updateDom()

const header = document.querySelector('header')
var imageCount = 0;
var currentImage = 0;
var images = new Array();

if (window.screen.availWidth <= 800) {
    images[0] = '../img/principal_banner_mobile';
    images[1] = '../img/principal_banner_mobile_02.jpg';
} else {
    images[0] = '../img/principal_banner_desktop.jpg';
    images[1] = '../img/principal_banner_desktop_02.jpg';
}

const preLoadImages = new Array();
for (var i = 0; i < images.length; i++) {
    if (images[i] == "")
        break;

    preLoadImages[i] = new Image();
    preLoadImages[i].src = images[i];
    imageCount++;
}

function startSlideShow() {
    if (header && imageCount >= 0) {
        header.style.backgroundImage = "url(" + images[currentImage] + ")";
        header.style.backgroundRepeat = "no-repeat";
        header.style.backgroundSize = "cover";

        currentImage = currentImage + 1;
        if (currentImage > (imageCount - 1)) {
            currentImage = 0;
        }
        const title = document.querySelector('#title-img-product')
        const paginate = document.querySelector('#paginate')
        const left = document.querySelector('#left')
        const right = document.querySelector('#right')
        const descTit = document.querySelector('#descri-tit')
        const descDes = document.querySelector('#descri-des')

        right.onclick = function () {
            startSlideShow()
        }
        left.onclick = function () {
            startSlideShow()
        }

        if (currentImage == 0) {
            title.innerText = "RED DEAD II -------"
            paginate.innerText = '1 / 2'
            descTit.innerText = "RED DEAD II "
            descDes.innerText = "RED DEAD II combina uma apresentação cinemática única com uma jogabilidade  totalmente nova.Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta."
        } else {
            title.innerText = "MORTAL KONBAT -------"
            paginate.innerText = '2 / 2'
            descTit.innerText = 'MORTAL KONBAT'
            descDes.innerText = 'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade  totalmente nova.Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de jogabilidade.'
        }

        setTimeout('startSlideShow()', 7000);
    }
}
startSlideShow();

const imgcheck = document.querySelector('#img-hamburger')

const check = document.querySelector('#check')

imgcheck.onclick = function () {
    if (check.checked == true) {
        check.checked = false
        document.querySelector('.logo>.menu').style.display = 'none'
        document.querySelector('.logo>.triangulo').style.display = 'none'
    } else {
        check.checked = true
        document.querySelector('.logo>.menu').style.display = 'flex'
        document.querySelector('.logo>.triangulo').style.display = 'flex'
        if (window.screen.availWidth <= 800) {
            document.querySelector('.carousel').style.display = 'none'
            document.querySelector('.body').style.display = 'none'
        }
    }
}