document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    const allButton = document.querySelector('.all-button');
    const singleItems = document.querySelectorAll('.single');

    allButton.addEventListener('click', function() {
        singleItems.forEach(item => item.style.display = 'block');
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            singleItems.forEach((item, i) => {
                item.style.display = i === index || index === 0 ? 'block' : 'none';
            });
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
