// 'use strict'
// // Exercise 1: Remove the comma
// let myString = 'hello,this,is,a,difficult,to,read,sentence';
// console.log(myString);
// myString = myString.replace(/,/g, " ");
// console.log(myString);

// // Exercise 2: The even/odd reporter
for (let i = 1; i < 20; i++) {
    if (i%2) {
        console.log(`The number ${i} is odd`)
    } else {
        console.log(`The number ${i} is even`)
    }    
}
for (let i = 1; i < 20; i++){
    console.log("The number " + i + " is " +(i%2 ? "odd" : "even") + "!");
}

// Exercise 3: The recipe card
const Ash = {
    title: 'Ash',
    servings : 3,
    ingredients : ['250g meat', 'grocery','salt']
}
// solution 1
for (let keys of Object.keys( Ash )) console.log(keys);
for (let values of Object.values( Ash )) console.log(values);
for (let entry of Object.entries( Ash )) console.log(entry.join(' : '));

// solution 2
for(let key in Ash){
    console.log(`${key} : ${Ash[key]}`)};
// solution 3
Object.keys(Ash).forEach(element=>console.log(`${element}: ${Ash[element]}`));


// Exercise 4: The reading list

const books = [
    {
    title: 'Life',
    author: 'Adam',
    alreadyRead: true
},
    {
    title: 'love',
    author: 'Eva',
    alreadyRead: true
},
    {
    title: 'Hope',
    author: 'Enwer',
    alreadyRead: false
}
]

books.forEach(book => {
console.log(`the ${book.title} by ${book.author}`)
    if (book.alreadyRead) {
        console.log(`You already read the "${book.title}"`)
    } else {
       console.log(`You still need to read the "${book.title}"`)
    } 
});


// Exercise 5: Who wants a drink?

// //solotion one
const drinkTray = [];
const drinkType = ["cola", "lemonade", "water"]
for (let index = 0; index < 5; index++) {
    drinkTray.push(drinkType[index])

    if (drinkTray.length >= 5) {
        drinkTray.pop(3);
        drinkTray.pop(4);
        drinkTray.push(drinkType[0],drinkType[1]);  
    }
}

console.log(`Hey guys I brought ${drinkTray}`)

// solution2
// const drinkTray = [];
// const drinkType = ["cola", "lemonade", "water"]
// for (let index = 0; index < 5; index++) {
//     drinkTray.push(drinkType[index])

//    for (let index = 0; index < drinkTray.length; index++) {
//        if (drinkTray[index] === undefined) {
//             drinkTray.push(drinkType[index-2]); 
//          drinkTray.splice(index, 1)
//        }   
//    }

// }

// console.log(`Hey guys I brought ${drinkTray}`)

// solution3
// const drinkTray = [];
// const drinkTypes = ['cola', 'lemonade', 'water'];
// for (let i = 0; i <5; i++){
//     drinkTray.push(drinkTypes[i % drinkTypes.length]);
// }
// console.log (`Hey guys, I brought a ${drinkTray.join()}`);


// PROJECT: Grade calculator
function convertor(dgree) {
 let gradePrecentage = Math.round((dgree / 100) * 100); 
 let grade;
 if (gradePrecentage >= 90 && gradePrecentage <= 100) {
 grade = 'A';
 } else if (gradePrecentage >= 80 && gradePrecentage <= 89) {
 grade = 'B';
 } else if (gradePrecentage >= 70 && gradePrecentage <= 79) {
 grade = 'C';
 } else if (gradePrecentage >= 60 && gradePrecentage <= 69) {
 grade = 'D';
 } else if (gradePrecentage >= 50 && gradePrecentage <= 59) {
 grade = 'E';
 } else {
 grade = 'F';
 }
 console.log(`You got a ${grade} (${gradePrecentage}%)!`); 
}
convertor(89);
