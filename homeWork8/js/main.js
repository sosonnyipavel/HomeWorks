'use strict';

let getButton = document.getElementById('start'),
    budgetbyClass = document.getElementsByClassName('budget-value')[0],
    daybudgetbyClass = document.getElementsByClassName('daybudget-value')[0],
    levelbyClass = document.getElementsByClassName('level-value')[0],
    expensesbyClass = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesbyClass = document.getElementsByClassName('optionalexpenses-value')[0],
    incomebyClass = document.getElementsByClassName('income-value')[0],
    monthsavingsbyClass = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsbyClass = document.getElementsByClassName('yearsavings-value')[0],
    expencesItems = document.getElementsByClassName('expenses-item'),
    btnFirst = document.getElementsByTagName('button')[0],
    btnSecond = document.getElementsByTagName('button')[1],
    btnThird = document.getElementsByTagName('button')[2],
    optionalExpencesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, date ;

    btnFirst.disabled = true;
    btnSecond.disabled = true;
    btnThird.disabled = true;

    getButton.addEventListener('click', function(){
            date = prompt("Введите дату в формате YYYY-MM-DD");
            money = +prompt("Ваш бюджет на месяц?");
            while(isNaN(money) || money == "" || money == null){
               money = +prompt("Ваш бюджет на месяц?");
            }
            appData.budget = money;
            appData.timeData = date;
            budgetbyClass.textContent = money.toFixed();
            year.value = new Date(Date.parse(date)).getFullYear();
            month.value = new Date(Date.parse(date)).getMonth() + 1;
            day.value = new Date(Date.parse(date)).getDate();
            btnFirst.disabled = false;
            btnSecond.disabled = false;
            btnThird.disabled = false;
    });
    
btnFirst.addEventListener('click', function(){
    let sum = 0;
    for ( let i = 0; i < expencesItems.length ; i++){
        let a = expencesItems[i].value,
            b = expencesItems[++i].value;
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else{
            i--;
        }
    }
    expensesbyClass.textContent = sum;
});
btnSecond.addEventListener('click', function(){
    for (let i = 0; i < optionalExpencesItems.length; i++) {
        let questionOptExpenses = optionalExpencesItems[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpensesbyClass.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnThird.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - +expensesbyClass.textContent) / 30).toFixed();
        daybudgetbyClass.textContent = appData.moneyPerDay;
        if(appData.moneyPerDay < 100) {
            levelbyClass.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelbyClass.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000){
            levelbyClass.textContent = "Высокий уровень достатка";
        } else {
            levelbyClass.textContent = "Произошла ошибка";
        }
    } else{
        daybudgetbyClass.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomebyClass.textContent = appData.income;
});

checkboxSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;

        monthsavingsbyClass.textContent = appData.monthIncome.toFixed(1);
        yearsavingsbyClass.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;

        monthsavingsbyClass.textContent = appData.monthIncome.toFixed(1);
        yearsavingsbyClass.textContent = appData.yearIncome.toFixed(1);
    }
});

    var appData = {
        budget: money,
        timeData: date,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };