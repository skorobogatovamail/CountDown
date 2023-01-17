const items = document.querySelectorAll('.countdown__number');


function getCountTime() {
    // текущий год
    const currentYear = new Date().getFullYear();

    // Дата отсчета
    const countDownDate = new Date(currentYear+1, 0, 1, 0, 0).getTime();   

    // получить текущее время
    const currentDate = new Date().getTime();
    // найти разницу времени
    let distance = countDownDate - currentDate;

    // создаем переменные в милисекундах
    const oneDay    = 24 * 60 * 60 * 1000;
    const oneHour   = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    // разница в переменных
    let days    = Math.floor(distance / oneDay);
    let hours   = Math.floor((distance % oneDay)/ oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / oneSecond);

    // массив с переменными
    let values = [days, hours, minutes, seconds];
    console.log(values);

    // меняем текст на странице
    items.forEach(
        function(i, idx) {
            i.innerHTML = values[idx];
        }
    );
}

let countDown = setInterval(getCountTime, 1000);

getCountTime();