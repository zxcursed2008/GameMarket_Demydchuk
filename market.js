//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js')


//Визначення масиву товарів
let itemsArray = [
    'Газоноосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N'
]

// Отримання елементу з ідентифікатором items
let itemsDiv =document.getElementById("items"); 
//Перевірка існування знайденого блоку 
if (itemsDiv) { 

    //Виведення елементів масиву
itemsArray.forEach((item, index)=>{
    itemsDiv.innerHTML +=`<div class = "item"></div>`
    console.log(item)
})
    //Вивід знайденого елементу 
    console.log(itemsDiv) 
    //Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // conlose.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML:', itemsDiv.innerHTML)
    //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    for (let i =0; i<=3; i++){
        itemsDiv.innerHTML += `<div class = "item"></div>`
    }
} else {
    //Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено')
} 


//Виведення елементів масиву
itemsArray.forEach((item)=>{
    itemsDiv.innerHTML +=`<div class = "item"></div>`
    console.log(item)
})
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