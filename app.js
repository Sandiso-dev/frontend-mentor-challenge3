//selecting my inputs 
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#years')
const calculator = document.querySelector('.btn')


//selecting my erro mgs
const day_erro = document.querySelector('.day_erro');
const month_erro = document.querySelector('.month_erro');
const year_erro = document.querySelector('.year_erro')

//selection my outputs for calculated age
const output_day = document.querySelector('.output_days');
const output_month = document.querySelector('.output_month');
const output_year = document.querySelector('.output_year');

let isValid = false;

//selecting my button to fire of the "calculteDay function"
calculator.addEventListener("click", calculateDay)

// my functions for erro messages 

//day erro
dayInput.addEventListener("click",(e)=>{
    if(dayInput.value > 31){
    day_erro.innerHTML = "Must be a valid day";
    isValid = false;
    return;
    } else {
        isValid = true;
        day_erro.textContent = "";
    } 

    if(dayInput.value === 0){
        day_erro.innerHTML = "Must be a valid day";
        isValid = false;
        return;
        } else {
            isValid = true;
            day_erro.textContent = "";
        } 
    
});

//month erro
monthInput.addEventListener("click",(e)=>{
    if(monthInput.value > 12){
        month_erro.innerHTML = "Must be a valid Month";
        isValid = false;
        return;
    } else{
        isValid = true;
        month_erro.innerHTML = "";
    }

    if(monthInput.value === 0){
        month_erro.innerHTML = "Must be a valid Month";
        isValid = false;
        return;
    } else{
        isValid = true;
        month_erro.innerHTML = "";
    }
});


//year erro 
yearInput.addEventListener(".click",(e)=>{
    if(yearInput.value > 2023){
        year_erro.innerHTML = "Must be a valid year"
        isValid = false;
        return;
    } else{
        isValid = true;
        year_erro = "";
    }

    if(yearInput.value === 0){
        year_erro.innerHTML = "Must be a valid year"
        isValid = false;
        return;
    } else{
        isValid = true;
        year_erro = "";
    }
})

//my function for calculating the accurate birthday
function  calculateDay(){
    if(isValid = true){
        //selecting my inputs values into a single variable
        let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
        console.log(birthday);

        let bDay = new Date(birthday);

        let ageDifference = Date.now() - bDay;
        let ageDate = new Date(ageDifference);

        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();

    //then the output should be 
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYear;
    } else{
        isValid = false;
        output_day.textContent = "";
        output_month.textContent = "";
        output_year.textContent = ""; 
    }
}