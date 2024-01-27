const isLeader = true;

// if(isLeader === true){
//     console.log("Leader has came");
// }
// else{
//     console.log("Don't give him the access");
// }

// const isPassed = false;
// if(!isPassed){
//     console.log("You should skill up yourself");
// }
// else{
//     console.log("You should continue study");
// }

// First conditional task
// const burgerPrice = 500;
// const cokePrice = 30;

// if(burgerPrice > 500){
//     cokePrice = 0;
//     console.log(cokePrice);
// }
// else{
//     console.log(cokePrice);
// }

// Second conditional task

const weight = 50;
const height = 1.58496;
const bmi = weight / (height)*(height);

if(bmi < 18.5){
    console.log("You are underweight");
}
else if(bmi >= 18.5){
    console.log("You are normal")
}
else if(bmi <= 24.9){
    console.log("You are normal");
}
else if(bmi >= 25){
    console.log("You are overweight")
}
else if(bmi <= 29.9){
    console.log("You are overweight");
}
else{
    console.log("You are obese");
}
