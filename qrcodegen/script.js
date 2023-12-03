let imgBox = document.getElementById("imgBox");
let qrcode = document.getElementById("imgQr");
let qrtext = document.getElementById("inputBox");

function generator(){
    qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}
