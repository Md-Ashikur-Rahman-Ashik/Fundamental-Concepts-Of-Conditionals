const price = 5000;

if(price >= 5000){
    const discountAmount = price * 10 / 100;
    console.log(discountAmount);
    const payAmount = price - discountAmount;
    console.log(payAmount);
}
else if(price > 2500){
    const discountAmount = price * 5 / 100;
    console.log(discountAmount);
    const payAmount = price - discountAmount;
    console.log(payAmount);
}
else{
    console.log(price);
}