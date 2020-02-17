// Code your solutions in this file
function writeCards(names, eventName) {
    const cards = []

    for(let i = 0; i < names.length; i++) {
        let name = names[i]
        let card = `Thank you, ${name}, for the wonderful ${eventName} gift!`
        cards.push(card)
    }

    return cards
}

function countDown(num) {
    let i = num
    
    while (i >= 0) {
        console.log(i)

        i--
    }
}