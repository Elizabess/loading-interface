setTimeout(() => {
    document.getElementById('loading-container').innerHTML = 
        `<h1> Не удалось загрузить данные</h1>
        <p>Проверьте подключение и обновите страницу.</p>`;
}, 5000); // Эмуляция задержки в 5 секунд