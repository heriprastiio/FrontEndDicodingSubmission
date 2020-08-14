function myfunction() {
    var nama = document.getElementById("namainput").value;
    var email = document.getElementById("emailinput").value;
    var message = document.getElementById("message").value;
    if (nama == "") {
        alert("Input Nama Kosong Formulir Harus Diisi!!!");

    }
    if (email == "") {
        alert("Email Harus Diisi!!!")
    }
    if (message == "") {
        alert("Pesan Harus Diisi!!!")
    } else {
        message("Nanti dihubungi!!!")
    }
}