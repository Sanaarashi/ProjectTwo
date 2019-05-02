window.addEventListener('DOMContentLoaded', () => {

    let btns = document.querySelectorAll('.btn'),
        btnUp = document.querySelector('.btn-up'),
        box = document.querySelector('.box');

    btns.forEach((elem) => {
        elem.addEventListener('click', () => {
            let t = setInterval(scrollToBot, 17),
                pos = 0;

            function scrollToBot() {
                if (pos == 200) {
                    clearInterval(t);
                    pos = 0;
                } else {
                    scrollBy(0, 1);
                    pos++;
                }
            }
            scrollBy(0, 200);
        });
    });

    btnUp.addEventListener('click', () => {
        function scrollToTop() {
            if (document.documentElement.scrollTop == 0) {
                cancelAnimationFrame(scrollToTop);
            } else {
                requestAnimationFrame(scrollToTop);
                document.documentElement.scrollTop--;
            }
        }
        scrollToTop();
    });
});