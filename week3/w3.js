// Exercise 1: You are amazing, Noer!
function giveCompliment (name){
    const compliments = ["good","nice","the best","awesome","fantastic","perfect","great","smart", "clever","genius"]
    const compliment = compliments[Math.floor(Math.random() * compliments.length)]
    return `"You are ${compliment}, ${name}`
}

console.log(giveCompliment ("noer"))
console.log(giveCompliment ("noer"))
console.log(giveCompliment ("noer"))

// Exercise 2: Dog years

function calculateDogAge(number){
const humanYears = number
const dogYears = humanYears *7
    return `Your doggie is (${dogYears}) years old in dog years!`
    
}
 console.log(calculateDogAge(1)) 
 console.log(calculateDogAge(2)) 
 console.log(calculateDogAge(3)) 



//  Exercise 3: Be your own fortune teller

const jobs = ['writer','doctor','developer','boss','president'];
const locations = ['Kashgar','Urumqi','Amsterdam','London', 'Istanbul'];
const girls = ['patime','patigul','patemhan','pati','fatime'];
const children = [1,2,3,4,5];
  
  
 function tellFortune(jobTitle,location,fiance,numChild){

const myjob= jobTitle[Math.floor(Math.random()*jobs.length)]
const myCity= location[Math.floor(Math.random()*locations.length)]
const myWife= fiance[Math.floor(Math.random()*girls.length)]
const myChildren= numChild[Math.floor(Math.random()*children.length)]
     return `You will be a ${myjob} in ${myCity}, married to ${myWife} with ${myChildren} kids.`
 }
console.log(tellFortune(jobs,locations,girls,children)) 
console.log(tellFortune(jobs,locations,girls,children)) 
console.log(tellFortune(jobs,locations,girls,children)) 


// Exercise 4: Shopping at the supermarket

const shoppingCart = ['bananas','milk']

function addToShoppingCart (item) {
    shoppingCart.push(item)
    if (shoppingCart.length >3) {
        shoppingCart.shift()
    }
    for (let index = 0; index < shoppingCart.length; index++) {
        console.log(`you bought ${shoppingCart}`)
    }
}

addToShoppingCart('chocolate');
addToShoppingCart('waffles'); 
addToShoppingCart('tea'); 


// Exercise 5: Total cost is ...

// // You want to buy a couple of things from the supermarket to prepare for a party.
//  After scanning all the items the cashier wants to give you the total price, but the machine is broken! 
//  Let's write her a function that does it for her instead!

// Create an object named cartForParty with 5 properties. Each property should be a grocery item 
// (like beers or chips) and hold a number value (like 1.75 or 0.99)
// Write a function called calculateTotalPrice
// It takes 1 argument: an object that contains properties that only contain number values
// Loop through the object and add all the number values together
// Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
// Call the function 1 time, giving it the object cartForParty as an argument


const cartForParty = {
    "apple": 1.89,
    "pear":1.5,
    "banana":1.19,
    "chips":2.25,
    "pepsi":0.60
}

function calculateTotalPrice(obj){
let total =0;

for (item in obj) {
     total += obj[item]
    }
return total}

console.log(calculateTotalPrice(cartForParty))



// PROJECT: Credit Card Validator


 function validator(num){
   const valid = num;
   if(num.length = 16){
     return 'long'
   }
   if(typeof num !== 'number'){
    return 'false'
   }


  
 }
 const num = 12345678987654323;
 const srr = num.toString();
 console.log(num)

 if(srr[15]%2 === 0){
    console.log  (`it is odd `, num)
   }else(console.log('nol'))

 console.log(validator(1234567898765432))

'use strict'
function creditCardValidator(num) {
//   check the type
  if (typeof num !== "number") {
    return false;
  }
//   check 16 digits
  const string = num.toString();
  if (string.length !== 16) {
    return false;
  }

//    check sum of all the digits must be greater than 16
  let sum = 0;
  string.split("").forEach(e => (sum += Number(e)));
  if (sum < 17) {
    return false;
  }
//    check The final digit must be even
  if (string.charAt(15) % 2 !== 0) {
    return false;
  }
//    check if it only one type of number
  const arr = string.split("").filter(e => Number(e) !== sum / 16);
  if (arr.length === 0) {
    return false;
  }
  return true;
}
console.log(creditCardValidator(121231423));
console.log(creditCardValidator(4444444444444446));
console.log(creditCardValidator(1111111111111110));
