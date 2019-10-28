function writeCards( names, birthday ) {
    let Cards = []
    for ( let i = 0; i < names.length; i++ ) {
      Cards.push( `Thank you, ${names[i]}, for the wonderful ${birthday} gift!` )
    }
    return Cards
  }

function countDown( number ) {
    while ( number > 0 ) {
      console.log( number );
      number -= 1;
    }
    console.log( number );
  }
  