function validationform() {
    const nama = document.forms['message-form']['name-input'].value;

    if (nama === '') {
        document.getElementById('error-name').innerHTML = 'Tidak boleh kosong!';
        return false;
    }

    setName(nama);
    return false;
}

function setName(nama) {
    document.getElementById('name').innerHTML = nama;
    document.getElementById('error-name').innerHTML = '';
}

let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('header-img');
    if (n > listImage.length) slideIndex = 1;
    let i = 0;
    while (i < listImage.length) {
        listImage[i].Style.display = 'none';
        i++;
    }
    listImage[slideIndex - 1].style.display = 'block';
    console.log(slideIndex);
}

const slideInterval = setInterval(() => nextSlide(1), 2000);