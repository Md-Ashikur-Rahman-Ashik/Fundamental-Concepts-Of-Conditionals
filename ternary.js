const age = 20;

// if(age >= 18){
//     console.log("You can vote");
// }
// else{
//     console.log("It's not for you");
// }

// Writing the above code in ternary
// age >= 18 ? console.log("You can vote") : console.log("It's not for you");

let price = 500;
const isLeader = true;

if(isLeader == true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price);

price = isLeader === true ? 0 : price + 100;
// console.log(price);

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}


// Optional section
price = isLeader === true?
                         price > 1000? 
                         price / 2: 0
                         : price + 1000;
console.log(price);