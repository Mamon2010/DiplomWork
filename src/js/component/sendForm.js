function sendForm() {
    let popupConsultation = document.querySelector('.popup-consultation'),
        popupDesing = document.querySelector('.popup-design');

        function postForm(popup) {
            let form = popup.querySelector('form'),
                status = document.createElement('div'),
                textarea = form.querySelector('textarea'),
                input = form.querySelectorAll('input');

            function clearArea() {
                input.forEach(item => {
                    item.value = '';
                });
                textarea.value = '';
            }

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                form.appendChild(status);
                
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
                let formData = new FormData(form);
                request.send(formData);
        
                request.addEventListener('readystatechange', function() {
                    if (request.readyState > 4) {
                        status.textContent = 'загрузка';
                    } else if (request.readyState === 4 && request.status == 200) {
                        status.textContent = 'успех';
                    } else {
                        status.textContent = 'ошибка';
                    }
                });

                clearArea();     
            });
        }
        postForm(popupDesing);
        postForm(popupConsultation);
}

module.exports = sendForm;