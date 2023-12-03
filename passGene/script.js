const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{][></-=";

const allChar = upperCase + lowerCase + numbers + symbols;

function createPass(){
    let password = "";
    password = password+ upperCase[Math.floor(Math.random()* upperCase.length)];
    password = password+ lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password = password+ symbols[Math.floor(Math.random()* symbols.length)];
    password = password+ numbers[Math.floor(Math.random()* numbers.length)];
    while(lenght > password.length){
        password = password + allChar[Math.floor(Math.random()* allChar.length)];

    }
    passwordBox.value = password;

}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}