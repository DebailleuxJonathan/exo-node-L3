const crypto = require('crypto');
const tab = []

function moneyMachine() {
    let result = '';

    for (let i = 0; i < 7; i++) {
        let random = crypto.randomInt(0, 7);
        switch (random) {
            case 0:
                result += '♠';
                break;
            case 1:
                result += '♥';
                break;
            case 2:
                result += '♦';
                break;
            case 3:
                result += '♣';
                break;
            case 4:
                result += '@';
                break;
            case 5:
                result += '|';
                break;
            case 6:
                result += '*';
                break;
            case 7:
                result += '+';
                break;
        }
    }

    return result;
}

for (let i = 0; i < 100; i++) {
    tab.push(moneyMachine())
}


function countOccurences(countElement, count) {
    Object.values(countElement).forEach(value => {
        if (value >= 3) {
            count++
        }
    })
    return count;
}

function probability(tab) {
    let count = 0
    let countElement = {}

    tab.forEach(element => {
        element.split('').forEach(character => {
            countElement[character] = countElement[character] ? countElement[character] + 1 : 1
        })
        count = countOccurences(countElement, count);
        countElement = {}
    })
    console.log(tab);
    console.log(`${count} est le nombre de fois qu'on a trouvé 3 fois le même symbole sur 100`);
}

probability(tab);

