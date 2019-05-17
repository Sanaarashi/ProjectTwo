export let form = () => {
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
                };

                request.send(data);
            });
        };
        let clearInputs = () => {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        };

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInputs);
    };
};