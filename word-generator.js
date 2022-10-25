randomNum = (num) => {
    return Math.floor(Math.random() * num)
}

const words = {
    signs: ['Earth', 'Moon', 'Sun', 'Star'],
    fortune: ['outlook not good', 'bleak', 'bad', 'just give up', 'outlook good', 'Good news'],
    advice: ['Drink', 'Go out and eat', 'Kill your family', 'give up', 'dont read me']
}


let personalWisdom = []

for (let prop in words) {
    let index = randomNum(words[prop].length)

    switch (prop) {
        case 'signs':
            personalWisdom.push(`Your Sign right now is: ${words[prop][index]}!`)
            break
        case 'fortune':
            personalWisdom.push(`Your fortune is: ${words[prop][index]}!`)
            break
        case 'advice':
            personalWisdom.push(`You should: ${words[prop][index]}.`)
            break
        default:
            personalWisdom.push("There's not enough info!")
    }
}

function formater(wisdom) {
    const formatted = personalWisdom.join("\n")
    console.log(formatted)
}

formater(personalWisdom)