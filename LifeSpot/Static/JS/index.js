/* 
* Функция для фильтации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*/
function filterContent() {
    // Сохраняем текст пользовательского запроса
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Находим контейнеры с видео, которые необходимо фильтровать 
    let elements = document.getElementsByClassName('video-container');

    // Пробегаем по контейнерам
    for (let i = 0; i < elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('h3').innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}

/* 
* Функция для проверки и сохранения данных пользователя
* Также блокирует доступ к сайту лицам, не подтвердивших свой возраст
*/
function handleSession() {
    let session = new Map();

    // сохраним UserAgent
    session.set("UserAgent", window.navigator.userAgent);

    // Запросить возраст пользователя и тоже сохранить
    session.set("age", prompt("Пожалуйста, введите Ваш возраст: "));

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        a = true + 20 + "name"
    }

    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}