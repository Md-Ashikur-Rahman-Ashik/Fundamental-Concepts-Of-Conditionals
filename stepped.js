// const price = 5000;

// if(price >= 5000){
//     const discountAmount = price * 10 / 100;
//     // console.log(discountAmount);
//     const payAmount = price - discountAmount;
//     // console.log(payAmount);
// }
// else if(price > 2500){
//     const discountAmount = price * 5 / 100;
//     // console.log(discountAmount);
//     const payAmount = price - discountAmount;
//     // console.log(payAmount);
// }
// else{
//     // console.log(price);
// }

const age = 44;
const price = 500;
if(age <= 12){
    console.log("You can have free food.");
}
else if(age >= 40){
    console.log("You have got 10% discount. Now you will pay:");
    const discount = price * 10 / 100;
    const discountAmount = price - discount;
    console.log(discountAmount);
}
else if(age >= 50){
    console.log("You have got 25% discount. Now you will pay:");
    const discount = price * 25 / 100;
    const discountAmount = price - discount;
    console.log(discountAmount);
}
else if(age >= 60){
    console.log("You have got 50% discount. Now you will pay:");
    const discount = price * 50 / 100;
    const discountAmount = price - discount;
    console.log(discountAmount);
}
else{
    console.log("You will have to pay:");
    console.log(price);

}