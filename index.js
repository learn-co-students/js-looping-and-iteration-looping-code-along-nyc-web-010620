// Code your solutions in this file

function writeCards(names, adjective) {
    let thankYous = []
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${adjective} gift!`)
        console.log(thankYous)
    }
    return thankYous
}

function countDown(num) {

    while (num >= 0) {
        console.log(num)
        --num
    }

}