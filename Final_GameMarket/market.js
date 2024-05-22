// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [


    // {
//     firstName: "Лариса",
//     lastName: "Забелло",
//     age: "65",
//     subject: "Англійська мова",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/"
// },

// {
//     firstName: "Василь",
//     lastName: "Бабій",
//     age: "95",
//     subject: "Фізична культура",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/"
// },

// {
//     firstName: "Іван",
//     lastName: "Севрук",
//     age: "16",
//     subject: "Пенсія",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/sevruk-i-h/"
// },

// {
//     firstName: "Олена",
//     lastName: "Геча",
//     age: "32",
//     subject: "Історія",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/"
// },

// {
//     firstName: "Вікторія",
//     lastName: "Нелипович",
//     age: "35",
//     subject: "Математика",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/"
// },


  {
    email: "23a_bam@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Боровий Артур",
    gameName: "Дід проти москалів",
    game_github: "https://github.com/23a-bam/Phaser2ndGame",
    game_pages: "https://23a-bam.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
    forms: "https://forms.gle/sS7tuJWJuGDjmHB98",
    gamemarket_github: "https://github.com/23a-bam/GameMarket_Borovyi",
    gamemarket_pages: "https://23a-bam.github.io/GameMarket_Borovyi/",
    market_pages: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_gki@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Геча Кирило",
    gameName: "Магазин UkraineRog",
    game_github: "https://github.com/Kyrylooo/GameMarket_Surname",
    game_pages: "https://github.com/Kyrylooo/GameMarket_Surname/settings/pages",
    docs: "https://kyrylooo.github.io/Test1/",
    forms: "https://kyrylooo.github.io/Test1/",
    gamemarket_github: "https://github.com/Kyrylooo/Test1",
    gamemarket_pages: "https://kyrylooo.github.io/Test1/",
    market_pages: "https://kyrylooo.github.io/Test1/",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_gmo@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Громова Марина",
    gameName: "-",
    game_github: "https://github.com/Marina745/Phaser2ndGame",
    game_pages: "https://marina745.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
    forms: "https://forms.gle/4tsVxrHtBpkLLmdc6",
    gamemarket_github: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
    gamemarket_pages: "https://marina745.github.io/GameMarket_Hromova/market.html",
    market_pages: "",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_gayu@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Гуменюк Аріна",
    gameName: "-",
    game_github: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
    game_pages: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
    docs: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
    forms: "https://forms.gle/rNroPXhu2mFSxcHx8",
    gamemarket_github: "",
    gamemarket_pages: "",
    market_pages: "",
    finalGameMarketPage: ""
  },
  {
    email: "23a_dii@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Демидчук Ілля",
    gameName: "-",
    game_github: "https://github.com/zxcursed2008/Phaser2ndGame",
    game_pages: "https://zxcursed2008.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
    forms: "https://forms.gle/xs7rgVauTR9ryuNc7",
    gamemarket_github: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
    gamemarket_pages: "",
    market_pages: "",
    finalGameMarketPage: ""
  },
  {
    email: "23a_dyem@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Деркач Єлизавета",
    gameName: "Царівна жаба",
    game_github: "https://github.com/liska228/Phaser2ndGame",
    game_pages: "https://liska228.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
    forms: "https://forms.gle/XDzvrjzJhjq758XFA",
    gamemarket_github: "https://github.com/liska228/GameMarket_Derkach-",
    gamemarket_pages: "https://liska228.github.io/GameMarket_Derkach-/",
    market_pages: "https://liska228.github.io/GameMarket_Derkach-/market.html",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_yedv@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Євланов Данііл",
    gameName: "Пригоди Свинки Шмеппи 2",
    game_github: "https://github.com/Scoxxy/Phaser2ndGame",
    game_pages: "https://scoxxy.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_link",
    forms: "https://forms.gle/vWZ2hn9MopmMy5fc7",
    gamemarket_github: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
    gamemarket_pages: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/",
    market_pages: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html",
    finalGameMarketPage: "поки немає"
  },
  {
    email: "23a_bks@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Катя Булич",
    gameName: "Червона відьма",
    game_github: "https://github.com/katyablchh/Phaser2ndGame",
    game_pages: "https://katyablchh.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
    forms: "https://forms.gle/dxTCp9vfCCgZwyy97",
    gamemarket_github: "",
    gamemarket_pages: "",
    market_pages: "https://katyablchh.github.io/Phaser2ndGame/",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_kai@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Ковальов Андрій",
    gameName: "They alive",
    game_github: "https://github.com/Andre00785/Phaser1stGame",
    game_pages: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
    docs: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
    forms: "https://forms.gle/i7YyjwzaHp7QvXei8",
    gamemarket_github: "https://github.com/Andre00785/Game_Market_Kovalev",
    gamemarket_pages: "https://andre00785.github.io/Game_Market_Kovalev/",
    market_pages: "https://andre00785.github.io/Game_Market_Kovalev/market.html",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_kyuk@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Кожанов Юрій",
    gameName: "Catventure",
    game_github: "https://github.com/kyuk278937/Catventure",
    game_pages: "",
    docs: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
    forms: "https://forms.gle/NN9okEBmpsLw3AmX8",
    gamemarket_github: "https://github.com/kyuk278937/GameMarket",
    gamemarket_pages: "https://kyuk278937.github.io/GameMarket/",
    market_pages: "https://kyuk278937.github.io/-HomeAppliancesStore/",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_kmo@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Козлюк Марина",
    gameName: "Пригоди червоної шапочки",
    game_github: "https://github.com/Marykozl/Phaser2ndGame",
    game_pages: "https://marykozl.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1AZzV2iit4QmQfotZM68HmWo4OjG-5ikO",
    forms: "https://forms.gle/PdXpRXZrbn9ujeMH7",
    gamemarket_github: "https://github.com/Marykozl/GameMarket_Kozlyuk?hl=ru&authuser=0",
    gamemarket_pages: "https://marykozl.github.io/GameMarket_Kozlyuk/",
    market_pages: "https://marykozl.github.io/GameMarket_Kozlyuk/market.html",
    finalGameMarketPage: "-"
  },
  {
    email: "23a_kia@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Кравчук Іван",
    gameName: "Пригоди Свиноти",
    game_github: "https://github.com/maskenissen1/Phaser2ndGame-1",
    game_pages: "https://maskenissen1.github.io/Phaser2ndGame-1/",
    docs: "https://drive.google.com/drive/folders/1_qC1jSGlqtfs16m1_nriWvomLg51Ah25",
    forms: "https://forms.gle/S2YEZ1dn7tYTkrbF6",
    gamemarket_github: "https://github.com/maskenissen1/GameMarket_Kravchuk",
    gamemarket_pages: "https://maskenissen1.github.io/GameMarket_Kravchuk/",
    market_pages: "https://maskenissen1.github.io/GameMarket_Kravchuk/market.html",
    finalGameMarketPage: "/"
  },
  {
    email: "23a_lsa@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Лазаренко Софія",
    gameName: "Mavka",
    game_github: "https://github.com/SofiaLazarenko/Phaser2ndGame?authuser=0",
    game_pages: "https://sofialazarenko.github.io/Phaser2ndGame/?authuser=0",
    docs: "https://docs.google.com/document/d/1Dqe-8TcUA1YLj7mG-2IMBxHsPmlhkwfkEfrOTAb9Nvs/edit?usp=classroom_web&authuser=0",
    forms: "https://forms.gle/PgJv2LH1ZJjjS29V8",
    gamemarket_github: "https://github.com/SofiaLazarenko/GameMarket_Lazarenko?authuser=0",
    gamemarket_pages: "https://sofialazarenko.github.io/GameMarket_Lazarenko/index.html",
    market_pages: "https://sofialazarenko.github.io/GameMarket_Lazarenko/n/market.html?authuser=0",
    finalGameMarketPage: "-"
  }


    
    //     name: "Електрична Мотокоса 12 MS",
    //     price: "5499",
    //     discountPrice: "4497",
    //     couponPrice: "4395",
    //     photo: "https://hotline.ua/img/tx/319/3193450945.jpg"
    // },
    // {
    //     name: "Електричний тример 4 Limit",
    //     price: "4497",
    //     discountPrice: "3498",
    //     couponPrice: "3396",
    //     photo: "https://vitals.ua/image/cache/catalog/demo/sad-park/ezt-033s/ezt-033s-4-1000x1000.jpg"
    // },
    // {
    //     name: "Електрична газонокосарка 9",
    //     price: "4497",
    //     discountPrice: "3297",
    //     couponPrice: "3195",
    //     photo: "https://w7.pngwing.com/pngs/623/979/png-transparent-lawn-mowers-al-ko-kober-dalladora-others-mower-lawn-vehicle.png"
    // },
    // {
    //     name: "Ручний Оприскувач Limit 81",
    //     price: "2190",
    //     discountPrice: "1698",
    //     couponPrice: "1596",
    //     photo: "https://hecht.ua/content/images/18/478x480l50nn0/95145173888325.jpg"
    // }  ,
       


//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
    
]
// Отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");
// Перевірка існування знайденого блоку 
if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
        <div class="bober">
            <div class="item-title">${item.email}</div>
            <div class="item-title">${item.group}</div>
        </div>
        <div class="item-image">
        <img src="${item.image}"  class="item-image">
           
        <p><img src="${item.photo}" " class="item-image"></p>
            
        </div>
        <div class="parts-pay">
            <div><a href = "${item.game_github}" target=_blank>Market Github</
            a><div>
            <div><a href = "${item.game_pages}" target=_blank>Market Pages</
            a><div>
            <div><a href = "${item.docs}" target=_blank>Docs</
            a><div>
            <div><a href = "${item.forms}" target=_blank>Forms</
            a><div>
            <div><a href = "${item.gamemarket_github}" target=_blank>Gamemarket_github</
            a><div>
            <div><a href = "${item.gamemarket_pages}" target=_blank>Gamemarket_pages</
            a><div>
            <div><a href = "${item.market_pages}" target=_blank>Market_pages</
            a><div>
           
            
            
          
        
    </div>`;
});
} else {
// Вивід повідомлення про не знайдений блок 
console.log('Блок товарів не знайдено');
}



// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item,index) =>{
//     console.log(index + '-й елемент:',item)
// })
// //Сортування масиву
// itemsArray = itemsArray.sort()
// // Виведення в консоль масиву
// console.log(itemsArray)
// //Виведення в консоль елементів масиву
// for(let i = 0; i<itemsArray.length; i++){
//     console.log(itemsArray[i])
// }
// //Виведення в коносль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент: ', itemsArray[i])
// }
// Початковий показ вчителів
// displayTeachers(itemsArray);

// function displayTeachers(teachers) {
//     let sortedTeachers = teachers.slice(); // Клонування масиву
//     itemsDiv.innerHTML = ''; // Очистити вміст контейнера

//     sortedTeachers.forEach((teacher, index) => {
//         itemsDiv.innerHTML +=
//             `<div class="item">
//                 <h2>Вчитель № ${index + 1} з ${sortedTeachers.length}</h2>
//                 <p>${teacher.lastName} ${teacher.firstName}</p>
//                 <p><img src="${teacher.photo}" alt="${teacher.lastName} ${teacher.firstName}" class="item-image"></p>
//                 <p>Вік: ${teacher.age} </p>
//                 <p>Предмет: ${teacher.subject} </p>
//                 <p>Освіта: ${teacher.education} </p>
//                 <p>Звання: ${teacher.rank} </p>
//                 <p><a href="${teacher.url}" target="_blank">Профіль</a></p>
//             </div>`;
//     });
// }

// function sortByAge() {
//     let sortedByAge = itemsArray.slice().sort((a, b) => parseInt(a.age) - parseInt(b.age));
//     displayTeachers(sortedByAge);
// }

// function sortByLastName() {
//     let sortedByLastName = itemsArray.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
//     displayTeachers(sortedByLastName);
// }

// function sortBySubject() {
//     let sortedBySubject = itemsArray.slice().sort((a, b) => a.subject.localeCompare(b.subject));
//     displayTeachers(sortedBySubject);
// }
