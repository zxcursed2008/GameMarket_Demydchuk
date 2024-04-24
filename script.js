document.addEventListener("DOMContentLoaded", function() {
    // Створюємо кнопку
    var myButton = document.createElement("button");
    myButton.textContent = "Пограти у гру";
    myButton.id = "myButton";

    // Додаємо кнопку перед закриваючим тегом </body>
    document.body.appendChild(myButton);

    // Додаємо обробник подій для кнопки
    myButton.addEventListener("click", function() {
        window.location.href = "https://zxcursed2008.github.io/Phaser2ndGame/";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Отримуємо координати кнопки
    var buttonRect = myButton.getBoundingClientRect();

    // Виводимо координати кнопки в консоль
    console.log("Координати кнопки:");
    console.log("Верхня межа: " + buttonRect.top);
    console.log("Ліва межа: " + buttonRect.left);
    console.log("Нижня межа: " + buttonRect.bottom);
    console.log("Права межа: " + buttonRect.right);
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо стиль кнопки, щоб вона розташовувалася праворуч
    myButton.style.position = "fixed"; // Встановлюємо фіксовану позицію
    myButton.style.right = "860px"; // Встановлюємо відстань від правого краю екрану
    myButton.style.top = "400px"; // Необов'язково, встановлюємо відстань від верхнього краю екрану
});



document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо розміри кнопки
    myButton.style.width = "300px"; // Встановлюємо ширину кнопки
    myButton.style.height = "120px"; // Встановлюємо висоту кнопки
});



document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо розміри кнопки
    myButton.style.width = "300px"; // Встановлюємо ширину кнопки
    myButton.style.height = "120px"; // Встановлюємо висоту кнопки

    // Додаємо обробник подій для кнопки
    myButton.addEventListener("click", function() {
        window.location.href = "https://zxcursed2008.github.io/Phaser2ndGame/";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо розмір тексту кнопки
    myButton.style.fontSize = "34px"; // Встановлюємо розмір тексту
});



document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо текст кнопки
    myButton.textContent = "Пограти у гру";
});



document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Прибираємо контур у кнопки
    myButton.style.border = "none";
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Заокруглюємо кути кнопки
    myButton.style.borderRadius = "40px"; // Встановлюємо радіус заокруглення
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо колір кнопки
    myButton.style.backgroundColor = " pink "; // Встановлюємо колір фону кнопки
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Змінюємо шрифт тексту кнопки
    myButton.style.fontFamily = "Times New Roman, sans-serif"; // Встановлюємо шрифт тексту кнопки
});


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за ідентифікатором
    var myButton = document.getElementById("myButton");

    // Додаємо обробник події для наведення курсору на кнопку
    myButton.addEventListener("mouseover", function() {
        // Змінюємо масштаб кнопки на 1.1 при наведенні
        this.style.transform = "scale(1.1)";
    });

    // Додаємо обробник події для відведення курсору від кнопки
    myButton.addEventListener("mouseleave", function() {
        // Змінюємо масштаб кнопки на 1 при відведенні курсору
        this.style.transform = "scale(1)";
    });
});


