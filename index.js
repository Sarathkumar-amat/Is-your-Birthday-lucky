const Date = document.querySelector("#birthdate");
const number = document.querySelector("#luckyNo");

const Button = document.querySelector("#checkButton");
const Opval = document.querySelector("#output");


const callBack = ()=>{
    console.log(Date.value);
    let date = Date.value;
    let dateArr = date.split("-");
    let sum=0;
    for(let x of dateArr)
    {
        for(let i=0;i<x.length;i++)
        {
            sum+=Number(x[i]);
        }
    }
    let luck = number.value;
    let check = sum%Number(luck);
    let toDisplay;
    if(check===0) toDisplay="Your birthday is lucky";
    else toDisplay="Not lucky";
    Opval.innerText=toDisplay;
    console.log(dateArr);
    console.log(number.value);
    console.log("hello");
}
Button.addEventListener("click",callBack);