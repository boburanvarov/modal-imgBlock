const products = document.querySelector('.products');
const buttons = products.querySelectorAll('button');
const gallery = document.querySelector('.gallery');
const mainImg = gallery.querySelector('.main-img img');
const boxImages = gallery.querySelectorAll('.cards img')
const close = gallery.querySelector('.close')

buttons.forEach(btn => btn.addEventListener('click', () => {
    if (btn.classList.contains('btn-phones')) {
        openPhoneImg();
    } else if (btn.classList.contains('btn-cars')) {
        openCarImg()
    } else if (btn.classList.contains('btn-laptops')) {
        openLaptopImg()
    }
}))


const images = {
    telephone: [{
            phoneImg: 'samsung.jpeg'
        },
        {
            phoneImg: 'apple.jpeg'
        },
        {
            phoneImg: 'nokia.jpg'
        },
        {
            phoneImg: 'mi.jpg'
        }
    ],
    car: [{
            carImg: 'bmw.jpg'
        },
        {
            carImg: 'ferrari.jpg'
        },
        {
            carImg: 'buggati.jpg'
        },
        {
            carImg: 'lombargihini.jpg'
        }
    ],
    laptop: [{
            laptopImg: 'macbook.jpg'
        },
        {
            laptopImg: 'hp.png'
        },
        {
            laptopImg: 'lenova.png'
        },
        {
            laptopImg: 'asus.jpeg'
        }
    ],
}

function openPhoneImg() {

    openProduct()
    for (let i = 0; i < boxImages.length; i++) {

        for (let i = 0; i < images.telephone.length; i++) {
            boxImages[i].src = 'assets/images/' + images.telephone[i].phoneImg;

        }
    }

}

function openCarImg() {
    openProduct()
    for (let i = 0; i < boxImages.length; i++) {

        for (let i = 0; i < images.car.length; i++) {
            boxImages[i].src = 'assets/images/' + images.car[i].carImg;

        }
    }

}

function openLaptopImg() {
    openProduct()
    for (let i = 0; i < boxImages.length; i++) {

        for (let i = 0; i < images.laptop.length; i++) {
            boxImages[i].src = 'assets/images/' + images.laptop[i].laptopImg;

        }
    }

}


console.log(images.telephone);
boxImages.forEach(boxImg => boxImg.addEventListener('click', () => {
    boxImages.forEach(img => img.classList.remove('active'))
    boxImg.classList.add('active');

    mainImg.src = boxImg.src
}))

if (buttons[0].classList.contains('btn-phones')) {

}

function openProduct() {
    gallery.classList.add('active');
    products.classList.remove('active')


}

close.addEventListener('click', () => {
    gallery.classList.remove('active');
    products.classList.add('active');
    mainImg.src = 'assets/images/' + 'no-images.jpg'
})