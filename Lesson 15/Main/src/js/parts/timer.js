export let timer = () => {
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
};