const myRandom = (from, to) => {
    return Math.floor(Math.random() * ((to + 1) - from)) + from;
};

const calc = () => {
    danger(myRandom(0, 8));
    // danger(3);
};

const addParagraph = (str) => {
    const definitionDiv = document.getElementById("dangerDef");
    definitionDiv.removeChild(definitionDiv.firstChild);
    const elem = document.createElement("p");
    const elemText = document.createTextNode(str);
    elem.appendChild(elemText);
    definitionDiv.appendChild(elem);
};

const danger = (n) => {
    const mainImage = document.getElementById("image");
    switch (n) {
        case 0:
            addParagraph('Вы не встретили опасностей');
            mainImage.setAttribute("class", "default safe");
            break;
        case 1:
            addParagraph('На вас напало ' + digitToWord(myRandom(4, 8)) + ' одичалых');
            mainImage.setAttribute("class", "default odich");
            break;
        case 2:
            addParagraph('Вам встретился полярный медведь');
            mainImage.setAttribute("class", "default polar");
            break;
        case 3:
            addParagraph('На вас напала стая лютоволков');
            mainImage.setAttribute("class", "default wolf");
            break;
        case 4:
            addParagraph('На группу разведчиков напало ' + digitToWord((6 + myRandom(1, 6))) + ' диких лис');
            mainImage.setAttribute("class", "default fox");
            break;
        case 5:
            addParagraph('Разведчики вышли на берег замёрзшей речки');
            mainImage.setAttribute("class", "default river");
            break;
        case 6:
            addParagraph('В паутину попал разведчик номер ' + digitToWord(myRandom(1, 3)));
            mainImage.setAttribute("class", "default net");
            break;
        case 7:
            addParagraph('Разведчики вышли к огромной пещере');
            mainImage.setAttribute("class", "default cave");
            break;
        case 8:
            addParagraph('По пути вы встретили разъяренного мамонта');
            mainImage.setAttribute("class", "default mamonth");
            break;
        default:
            break;
    }
};

const digitToWord = (d) => {
    switch (d) {
        case 1: return 'один';
        case 2: return 'два';
        case 3: return 'три';
        case 4: return 'четыре';
        case 5: return 'пять';
        case 6: return 'шесть';
        case 7: return 'семь';
        case 8: return 'восемь';
        case 9: return 'девять';
        case 10: return 'десять';
        case 11: return 'одиннадцать';
        case 12: return 'двенадцать';
        case 13: return 'тринадцать';
        case 14: return 'четырнадцать';
        default: return d;
    }
};