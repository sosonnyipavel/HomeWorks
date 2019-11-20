'use strict';
let getButton = document.getElementById('start'),
    budgetbyClass = document.getElementsByClassName('budget-value'),
    daybudgetbyClass = document.getElementsByClassName('daybudget-value'),
    levelbyClass = document.getElementsByClassName('level-value'),
    expensesbyClass = document.getElementsByClassName('expenses-value'),
    optionalexpensesbyClass = document.getElementsByClassName('optionalexpenses-value'),
    incomebyClass = document.getElementsByClassName('income-value'),
    monthsavingsbyClass = document.getElementsByClassName('monthsavings-value'),
    yearsavingsbyClass = document.getElementsByClassName('yearsavings-value'),
    expencesItems = document.getElementsByClassName('expenses-item'),
    btnFirst = document.getElementsByTagName('button')[0],
    btnSecond = document.getElementsByTagName('button')[1],
    btnThird = document.getElementsByTagName('button')[2],
    optionalExpencesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


console.log(sum);