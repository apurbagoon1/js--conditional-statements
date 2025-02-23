/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 25; 
const isStudent = true; 
const regularFare = 800;

let ticketFare;

if (age < 10) {
    ticketFare = 0;
} 
else if (isStudent) {
    ticketFare = regularFare - (regularFare * 50 / 100); // 50% discount
} 
else if (age >= 60) {
    ticketFare = regularFare - (regularFare * 15 / 100); // 15% discount
}
else {
    ticketFare = regularFare;
}

console.log('Ticket Fare:', ticketFare);
