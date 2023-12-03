let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");


function calc(){
    let userdob = new Date(userInput.value);

    let userDay = userdob.getDate();
    let userMonth = userdob.getMonth() + 1;
    let userYear = userdob.getFullYear();


    let today = new Date();

    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let diffDay, diffMonth, diffYear;

    diffYear = todayYear - userYear;

    if(todayMonth >= userMonth){
        diffMonth = todayMonth - userMonth;
    }else{
        diffYear--;
        diffMonth = 12 + todayMonth - userMonth;
    }

    if(todayDay >= userDay){
        diffDay = todayDay - userDay;
    }
    else{
        diffMonth--;
        diffDay = getDaysInMonths(userYear, userMonth) + todayDay - userDay;
    }
    if(diffMonth < 0){
        diffMonth = 11;
        diffYear--;
    }
    console.log(diffYear, diffMonth, diffDay);
    result.innerHTML = `Your age = ${diffYear} years , ${diffMonth} months , ${diffDay} days `;

}

function getDaysInMonths(year, month){
    return new Date(year, month , 0).getDate();
}