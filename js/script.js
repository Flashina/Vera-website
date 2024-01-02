const checkreplace = document.querySelector('.replace-me');

if (checkreplace !== null) {
    const replace = new ReplaceMe(checkreplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true,
    });
}