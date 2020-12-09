# Пример организации тестов к лекции по курсу "Разработка интернет-приложений"

В репозитории есть:

- пример работы с Jest (`calculator.ts` и `calculator.spec.ts`);
- пример моков внешних библиотек на Jest (`age.service.ts` и `age.service.spec.ts`);
- пример E2E-тестов на [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (`age.service.ts` и `age.service.spec.ts`).

Установка зависимостей - `npm i`.

Запуск тестов - `npm test`.

Использованные API и проекты:

- для сервиса определения возраста - [agify.io](https://agify.io/).
- для тестов на Selenium - [the-internet](http://the-internet.herokuapp.com/).
