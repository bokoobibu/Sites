// Функция которая обрабатывает запрос формы при нажатии на кнопку с ID - #formSubmit
document.querySelector('#formSubmit').onclick = function() {
    // Переменные хранящие поля ввода для сбора данных о пользователе
    let userName = document.querySelector('#userName');
    let userTelephone = document.querySelector('#userTelephone');
    let userPassword = document.querySelector('#userPassword');
    /* Условие при котором если поле ввода имени пользователя пустое, или его длина меньше 2 или больше 17, то результат
    обработает запрос при котором рамка поля ввода окрасится красным и запрос на отправку не выполнится */
    if(userName === '' || userName.value.length < 2 || userName.value.length > 17) {
        userName.style.border = '4px red solid';
        return false;
    }
    /* Условие которое выполняет запрос на отправку если пользователь ввел свое имя правильно */
    else {
        userName.style.border = '';
    }
    /* Условие при котором если поле ввода телефона пользователя пустое, или его длина меньше или больше 11, то результат
    обработает запрос при котором рамка поля ввода окрасится красным и запрос на отправку не выполнится */
    if(userTelephone === '' || userTelephone.value.length < 11 || userTelephone.value.length > 11) {
        userTelephone.style.border = '4px red solid';
        return false;
    }
    /* Условие которое выполняет запрос на отправку если пользователь ввел свой телефон правильно */
    else {
        userTelephone.style.border = '';
    }
    /* Условие при котором если поле ввода пароля пользователя пустое, или его длина меньше 8 или больше 32, то результат
    обработает запрос при котором рамка поля ввода окрасится красным и запрос на отправку не выполнится */
    if(userPassword === '' || userPassword.value.length < 8 || userPassword.value.length > 32) {
        userPassword.style.border = '4px red solid';
        return false;
    }
    /* Условие которое выполняет запрос на отправку если пользователь ввел свой пароль правильно */
    else {
        userPassword.style.border = '';
    }
}