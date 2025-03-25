//REVERSE STRING FUNCTIONS

//Method 1 
/** 
 * @param {String} str 
 * @returns {String} Reverse a string
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}

//Method 2
/**
 * @param {String} str 
 * @returns {String} Reverse a string
 */

function reverseString2(str) {
    reverse = ""
    for (let i = str.length-1; i >= 0; i--) {
         reverse+= str[i];
    }

    return reverse;
}

console.log("Reverse string: " + reverseString("Sylvestre"))
//console.log(reverseString2("Sylvestre"))

//COUNT CHARACTER FUNCTION

//Method 1
/**
 * @param {String} str  
 * @returns {Number} Return the number of characters in a string
 */
function countCharacter(str) {
   return count = str.length
}

//Method 2
/**
 * @param {String} str  
 * @returns {Number} Return the number of characters in a string
 */
function countCharacter2(str) {
    let total = 0
    for (let i in str) {
        total++
    }
    return total;
}
console.log(countCharacter("Anticonstitutionnellement")) 
//console.log(countCharacter2("Anticonstitutionnellement")) 

//IN CASE IF YOU WANT TO COUNT THE DISPLAY OF EACH CHARACTER IN A SENTENCE
/**
 * @param {String} str Display the number of appearance of a character
 */
function countCharacter3(str) {
    let arr = []
    for (let i of str) {
        let cpt = 0
        if (!arr.includes(i)) {
            for (let j of str) {
                if(i==j){
                    cpt++
                }
            }

        }            
        arr.push[i] 
        console.log(`The letter ${i} appears  ${cpt}` )
    }

}
console.log(countCharacter3("Anticonstitutionnellement")) 

//CAPITALIZE WORD FUNCTION
/**
 * 
 * @param {String} str 
 * @returns {String}  Capitalizes the first letter of each word in a sentence
 */
function capitalizeWord(str) {
    sentenceWords = str.split(' ')
    newSentence = ''
    sentenceWords.forEach(function (word) {
        newSentence+= word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
      });
      
    return newSentence.trim();
}
console.log(capitalizeWord("fureur contre ferveur prendra les armes mais le combat sera court car l'antique valeur dans le coeur des italiens n'est pas morte."))