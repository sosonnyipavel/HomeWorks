'use strict'
let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    bodyBackground = document.querySelector('body'),
    divTitle = document.querySelector('.title'),
    adbBlock = document.querySelector('.adv'),
    promptAnswer = document.querySelector('.prompt');

    // поменляти местами
menu.insertBefore(menuItem[2], menuItem[1]);
let newItem = document.createElement("li");
newItem.classList.add("menu-item");
newItem.textContent = "Пятый элемент";
menu.appendChild(newItem);
bodyBackground.style.background = 'url(../img/apple_true.jpg)';
divTitle.textContent = "Мы продаем только подлинную технику Apple";
adbBlock.remove();
let answerPromt = prompt("Как ты относишся к технике Apple?");
promptAnswer.textContent = answerPromt;
