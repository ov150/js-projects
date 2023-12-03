const questions = [
    {
        question : "Front-end structure language",
        ans:[
            {text: "HTML", correct:true},
            {text: "CSS", correct:false},
            {text: "JS", correct:false},
            {text: "PY", correct:false},

        ]
    },
    {
        question : "Back-end database language",
        ans:[
            {text:"HTMl", correct:false},
            {text:"JS",correct:false},
            {text:"NODE", correct:true},
            {text:"CSS", correct:false},
        ]
    },
    {
        question : "Back-end database language",
        ans:[
            {text:"HTMl", correct:false},
            {text:"JS",correct:false},
            {text:"NODE", correct:true},
            {text:"CSS", correct:false},
        ]
    },

];

const questionEle = document.getElementById("question");
const ansEle = document.getElementById("ans-buttons");
const nextBtn = document.getElementById("nextBtn");

let curreQuesIndex = 0;

let score = 0;
function startQuiz(){
    curreQuesIndex = 0;
    score = 0;
    nextBtn.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQue = questions[curreQuesIndex];
    let questionNo = curreQuesIndex + 1;
    questionEle.innerHTML = questionNo + '. ' + currentQue.question;

    currentQue.ans.forEach(ans =>{
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        ansEle.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selecAnswer);
    });
}
function resetState(){
    nextBtn.style.display = "none";
    while(ansEle.firstChild){
        ansEle.removeChild(ansEle.firstChild);
    }
}
function selecAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansEle.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            
        }
        button.disabled =true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionEle.innerHTML = `Your scored = ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
}

function handleNextbtn(){
    curreQuesIndex++;
    if(curreQuesIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(curreQuesIndex < questions.length){
        handleNextbtn();
    }
    else{
        startQuiz();
    }
})
startQuiz();