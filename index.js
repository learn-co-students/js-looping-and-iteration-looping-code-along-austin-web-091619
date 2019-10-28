// Code your solutions in this file
function writeCards(arrNames, strEvent) {
    const cards = [];
    for(let i=0; i < arrNames.length; i++){
        cards.push(`Thank you, ${arrNames[i]}, for the wonderful ${strEvent} gift!`);
    }
    return cards;
}
function countDown(startNum){
    let i = startNum;
    while( i >= 0){
        console.log(i);
        i--;
    }
}