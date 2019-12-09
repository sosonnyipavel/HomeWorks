window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabCOntent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabCOntent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabCOntent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // it's timer
    let deadline = '2019-12-03';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };

    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);

            function updateZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = updateZero(t.hours);
            minutes.textContent = updateZero(t.minutes);
            seconds.textContent = updateZero(t.seconds);
            
            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        infoBtn = document.querySelector('.info');
    
        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
     
    infoBtn.addEventListener('click', function(event){
        if (event.target && event.target.classList.contains('description-btn')){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });
    

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        formContact = document.querySelector('form'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        function sendForm(elem){

            elem.addEventListener('submit', function (event) {
                event.preventDefault();
                elem.appendChild(statusMessage);
            
                let formData = new FormData(elem);
                let obj = {};
                formData.forEach (function (value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
            
            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            
                    request.onreadystatechange = function () {
                        if(request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(json);
                });
            }
            
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            
            postData (formData)
                .then (() => statusMessage.innerHTML = message.loading)
                .then (() => statusMessage.innerHTML = message.sucsess)
                .catch (() => statusMessage.innerHTML = message.failure)
                .then (clearInput);
            });
        
        }
        sendForm(form);
        sendForm(formContact);

    //Slider

    let sliderIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots= document.querySelectorAll('.dot');
    
        showSLides(sliderIndex);
    
    function showSLides(n){
        if(n > slides.length){
            sliderIndex = 1;
        }
        if (n < 1){
            sliderIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n){
        showSLides(sliderIndex += n);
    }
    function currentSlide(n){
        showSLides(sliderIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });
    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length + 1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

    //Calculate

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;
        persons.addEventListener('change', function(){
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if(restDays.value == '' || persons.value == ''){
                totalValue.innerHTML = 0;
            }else{
                totalValue.innerHTML = total;
            }
        });
        restDays.addEventListener('change', function(){
            daysSum = +this.value;
            total = (daysSum * personsSum) * 4000;

            if(persons.value == '' || restDays.value == ''){
                totalValue.innerHTML = 0;
            }else{
                totalValue.innerHTML = total;
            }
        });
        place.addEventListener('change', function(){
            if (restDays.value == '' || persons.value == ''){
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
});