// Code your solutions in this file
function writeCards(array, event) {
    let thankYouCards = []
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

function countDown(integer) {
    while (integer > 0) {
    console.log(integer);
    integer -= 1;
  }
  console.log(integer);
}