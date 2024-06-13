document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-mode-btn');
    const app = document.querySelector('.app');

    toggleBtn.addEventListener('click', function() {
        if (app.classList.contains('light-mode')) {
            app.classList.remove('light-mode');
            app.classList.add('dark-mode');
        } else {
            app.classList.remove('dark-mode');
            app.classList.add('light-mode');
        }
    });
});
