const money = -10;
if (money > 300) {
    console.log('bro you are rich!!!');
}
else{
    if(money > 100){
        console.log('tui gorib o na boro lok o na')
    }
    else {
        if (money > 0){
            console.log('dosto kola kha calcium bara')
        }
        else {
            console.log('tui amar bondhu na!')
        }
    }
}


//------Restaurant-------
const age = 62;
const price = 500;

if (age <= 12) {
    console.log('You can eat for free');
}
else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(age >= 50){
    // 25% discount
}
else if(age >=40){
    // 10% discount
}
else {
    console.log('Pay', price)
}