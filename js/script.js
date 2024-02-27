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