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

function validationform() {
    const fname = document.forms['message-us-form']['fname'].value;
    const lname = document.forms['message-us-form']['lname'].value;
    const message = document.forms['message-us-form']['message'].value;
    const date = Date();

    if (fname === '' || lname === '') {
        alert('Mohon cek kembali');
        return false;
    }
    
    setSenderUI(fname, lname, message, )

    return false;
}

function setSenderUI (fname, lname, message, date) {
    document.getElementById('sender-full-name').innerHTML = fname.value + ' ' + lname.value;
    document.getElementById('sender-message').innerHTML = message;
    document.getElementById('sender-current-time').innerHTML = date;

    return false
}



