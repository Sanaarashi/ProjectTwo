'use strict';

let div = document.createElement('div');

function showTime() {
    let timeNow = new Date(),
        hours = timeNow.getHours(),
        mins = timeNow.getMinutes(),
        secs = timeNow.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }
    div.innerHTML = hours + ":" + mins + ":" + secs;
    document.body.appendChild(div);
}

let autoReload = setInterval(showTime, 1000);