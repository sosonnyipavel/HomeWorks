'use strict';

var money = +prompt("Ваш бюджет на месяц?");
var date = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for ( let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else{
        console.log ("bad result");
        i--;
    }
}

///// Цикл while

/*
var j = 0;
while ( j < 2 ){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else{
        console.log ("bad result");
        j--;
    }
    j++;
}
*/

///// Цикл do while
/*
var k = 0;
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    k++;

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else{
        console.log ("bad result");
        k--;
    }
    k++;
} while(k < 2);
*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}