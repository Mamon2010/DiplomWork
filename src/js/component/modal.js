function modal() {
    let desingBtn = document.querySelectorAll('.button-design'),
        consultationBtn = document.querySelectorAll('.button-consultation'),
        popupDesing = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation');
        

    function showModal(btn, popup) {
        btn.forEach( item => {
            item.addEventListener('click', function() {
                popup.style.display = 'block';
                hideModal(popup);
            });
        });
    }
    
    showModal(desingBtn, popupDesing);
    showModal(consultationBtn, popupConsultation);

    function hideModal(popup) {
        let close = popup.querySelector('.popup-close');
        close.addEventListener('click', function() {
            popup.style.display = '';
        });
    }
}

module.exports = modal;