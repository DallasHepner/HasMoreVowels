// function that takes in a string, word
// have string compared to show if there are more vowles than non
// return true if has more, false if has less
// should only be expecting strings

const vowels = ["a", "e", "i", "o", "u"]
const consonates = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

function moreVowels(string) {
    let count = 0
    let count2 = 0

    for(let letter of string.toLowerCase()) {
        if(vowels.includes(letter)) {
            count ++
        }
    }
    for(let letter of string.toLowerCase()) {
        if(consonates.includes(letter))
        count2++
    }
    if(count > count2){
        return true
    }else {
        return false
    }
}

console.log(moreVowels("Dallas"))