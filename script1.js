"use strict";

if (4 == 9) {
   console.log("Ok!");
} else {
    console.log("Error");
}

const num = "50";

// if (num<49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok!");
// }
// (num === 50) ? console.log('Ok!') : console.log("Error");


switch (num) {
        case "49":
            console.log("Неверно");
            break;
        case 100:
            console.log("Неверно");
            break;
        case "50":
            console.log("В точку");
            break;
        default:
            console.log("Не в этот раз");
            break;
}

// 2.14 Циклы
// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

2.15 