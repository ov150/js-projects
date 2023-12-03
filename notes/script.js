// const inputBox =document.getElementById("")

const notesContainer = document.querySelector(".notes-containers");
const crateBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".inputBox");

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

crateBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let divEle = document.createElement("div");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    divEle.innerHTML = "delete";
    notesContainer.appendChild(inputBox).appendChild(divEle);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "DIV"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})