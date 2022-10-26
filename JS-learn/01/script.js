// var time = 3;
// var speed1 = 12;
// var speed2 = 14;

// const calcDist = function(time, speed1, speed2) {
//     return speed1 * time + speed2 * time;
// }

// console.log(calcDist(3, 12, 14));

// const buySomeBread = function(eggs) {
//     return eggs ?  10 :  1;
    
// }

// console.log(buySomeBread(false));

// const washNextItem = function(itemsLeft) {
//     itemsLeft--;
//     console.log('В раковине осталось ' + itemsLeft + ' предметов');
//     if (itemsLeft > 0) {
//         washNextItem(itemsLeft);
//     }
// }

// const washNextItem = function(j) {
//     for (var i = j; i > 0; i--) {
//         console.log('В раковине осталось ' + (i - 1) + ' предметов');
//     }
// }

// const washNextItem = function(j) {
//     while (j--) {
//         console.log('В раковине осталось ' + j + ' предметов');
//     }
// }

// washNextItem(10);

//var words = ['Старки', 'Аррены', 'Талли', 'Ланнистеры', 'Грейджои', 'Баратеоны', 'Тиреллы', 'Мартеллы'];



const parser = (str) => {
    const arr = [];
    const parts = str.toString().split(', ');
    return parts;
}

const randomWord = () => {
    const words = parser(document.getElementById("inp").value)
    let i = j = document.getElementById("inputNumber").value;
    const articleDiv = document.querySelector("div.article");
    while (articleDiv.firstChild) {
        articleDiv.removeChild(articleDiv.firstChild);
    }

    while (j-- > 0 && j < words.length) {
        let index = Math.floor(Math.random() * words.length);


        const elem = document.createElement("p");
        const elemText = document.createTextNode(i - j + ' - ' + words[index]);


        elem.appendChild(elemText);
        
        articleDiv.appendChild(elem);


        if (index !== -1) {
            words.splice(index, 1);
        }
    }
}
