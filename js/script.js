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

function sendForm() {
    let date = new Date().toLocaleString();
    let fname = document.forms['message-us-form']['fname'].value;
    let lname = document.forms['message-us-form']['lname'].value;
    let message = document.forms['message-us-form']['message'].value;
    if (fname === '' || lname === '') {
        alert('Mohon cek kembali');
        return false;
    } else {
        document.getElementById('current-time').innerHTML = date;
        document.getElementById('full-name').innerHTML = fname + ' ' + lname;
        document.getElementById('message').innerHTML = message;
        return false;
    }
}



