if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const loadingElement = document.getElementById('loading');
    const contentElement = document.getElementById('content');

    // Эмуляция задержки загрузки данных
    setTimeout(() => {
        loadingElement.style.display = 'none';
        contentElement.style.display = 'block';
    }, 3000);
});
