window.addEventListener('DOMContentLoaded', () => {

    'use sctrict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

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

    function getTimeRemaining(endtime) {
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
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateTime, 1000);

        function updateTime() {
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
    }

    //modal window

    let container = document.querySelector('body'),
        overlay = document.querySelector('.overlay');

    container.addEventListener('click', (event) => {
        function setParameters(a, b) {
            overlay.style.display = a;
            document.body.style.overflow = b;
        }
        if (event.target.classList == 'description-btn' || event.target.classList == 'more') {
            setParameters('block', 'hidden');
        } else if (event.target.classList == 'popup-close') {
            setParameters('none', '');
        }
    });



    setClock('timer', deadline);
});