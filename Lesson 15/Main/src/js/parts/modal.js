export let modal = () => {
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
};