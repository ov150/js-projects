const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function quoteGen(url){
    const responce = await fetch(url);
    var data= await responce.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;


}
quoteGen(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + author.innerHTML, "Tweet Window", "width=600, height=400");
}