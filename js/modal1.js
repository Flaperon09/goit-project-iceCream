const close = document.getElementsByClassName('close');
const openBtn = document.getElementsByClassName('proba-open');
Array.from(close, closeButton => {
    closeButton.addEventListener('click', e => e.target.parentNode.parentNode.style.opacity = 0);
});
Array.from(openBtn, openButton => {
    openButton.addEventListener('click', e => {
        let modalId = e.target.getAttribute('data-id');
        document.getElementById(modalId).style.opacity = 1;
    });
});

// https://www.youtube.com/watch?v=whApre_lHMQ