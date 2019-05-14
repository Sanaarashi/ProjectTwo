window.addEventListener('DOMContentLoaded', () => {


    'use sctrict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //timer

    let deadline = new Date('2019-05-27 00:10:00');

    let getTimeRemaining = (endtime) => {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            secs = Math.floor((time / 1000) % 60),
            mins = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor((time / (1000 * 60 * 60)));




        return {
            'total': time,
            'hours': hours,
            'minutes': mins,
            'seconds': secs
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');


        let updateTime = () => {
            let time = getTimeRemaining(endtime);

            if (time.seconds < 10) {
                time.seconds = "0" + time.seconds;
            }

            if (time.minutes < 10) {
                time.minutes = "0" + time.minutes;
            }

            if (time.hours < 10) {
                time.hours = "0" + time.hours;
            }

            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if (time.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }

        let timeInterval = setInterval(updateTime, 1000);
    };

    setClock('timer', deadline);

    //modal window

    let container = document.querySelector('body'),
        overlay = document.querySelector('.overlay');

    let setParameters = (a, b) => {
        overlay.style.display = a;
        document.body.style.overflow = b;
    };

    container.addEventListener('click', (event) => {
        if (event.target.classList == 'description-btn' || event.target.classList == 'more') {
            setParameters('block', 'hidden');
        } else if (event.target.classList == 'popup-close') {
            setParameters('none', '');
        }
    });

    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    document.body.addEventListener('submit', (event) => {
        sendFormData(event);
    });

    document.body.addEventListener('input', (elem) => {
        if (elem.target.getAttribute('type') === 'tel') {
            elem.target.value = '+' + elem.target.value.replace(/[^\d]/g, '').slice(0, 11);
            if (elem.target.value.length == 1) elem.target.value = '';
        }
    });


    let sendFormData = (event) => {
        event.preventDefault();
        event.target.appendChild(statusMessage);
        let formData = new FormData(event.target);

        let postData = (data) => {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');

                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status < 3 && request.status == 200) {
                            resolve();
                        }
                    } else {
                        reject();
                    }
                }

                request.send(data);
            });
        };
        let clearInputs = () => {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInputs);
    }

    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        } 

        slides.forEach( (item) => item.style.display = 'none' );
        dots.forEach( (item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //calculator
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        price = document.getElementById('price'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    price.addEventListener('input', (elem) => {
        if (elem.target.classList == 'counter-block-input') {
        elem.target.value = elem.target.value.replace(/(^[0]{1})/, '');
        }
    });

    price.addEventListener('input', function() {
        personsSum = +persons.value;
        daysSum = +restDays.value;
        

        total = (daysSum + personsSum)*4000;
        
        if (restDays.value === '' || persons.value === '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a //* this.options[this.selectedIndex].value();
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value !== '' && persons.value !== '') {
            totalValue.innerHTML = total * this.options[this.selectedIndex].value;
        }
    });
});