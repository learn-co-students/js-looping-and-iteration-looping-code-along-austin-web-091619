// Code your solutions in this file


function writeCards(name, type) {
    let arr = []
    for (let i = 0; i < name.length; i++) {
        arr.push(`Thank you, ${name[i]}, for the wonderful ${type} gift!`)
    }
    return arr
}

function countDown(num) {
    for ( let i = num; i > -1; i--) {
        console.log(i)
    }
}