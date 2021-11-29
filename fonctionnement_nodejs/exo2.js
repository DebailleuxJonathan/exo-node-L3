const path = require('path');
const fs = require('fs')
const ss = require('simple-statistics')

const csvToJson = require('convert-csv-to-json');

const filepath = process.argv[2] ? process.argv[2] : ""
const columname = process.argv[3] ? process.argv[3] : ""
let json;

if (!findFile(filepath)) {
    console.log('File does not exists')
} else {
    if (path.extname(filepath) === '.csv') {
        console.log(path.basename(filepath))
        json = csvToJson.getJsonFromCsv(filepath);
        json.forEach((element, index) => {
            if (checkLine(Object.values(element))) {
                json.splice(index, 1)
            }
        })
        max(columname)
    }
    else {
        console.log('Erreur de path')
    }
}

function findFile(filepath) {
    if (fs.existsSync(filepath)) {
        return true
    }
    else {
        return false;
    }
}

function max(columname) {
    let tab = []
    for (let element of json) {
        tab.push(parseInt(element[columname]))
    }
    console.log(`Max ${columname} : ${ss.max(tab)} `)
}

function checkLine(line) {
    tab = ['String', 'Float', 'Int', 'Categorical']
    for (let element of line) {
        if (tab.includes(element)) {
            return true
        }
    }
    return false
}