//ARRAY FUNCTIONS
const array = [10,42,-2,30,0,23,7,5,14,-41]

//Min Max Functions
//Method 1 with Math function

function Min(array) {
    return Math.min(...array)
}

function Max(array) {
    return Math.max(...array)
}

function minMax(array) {
    let minAndMax = []
    return [Math.min(...array), Math.max(...array)]
     
}
let [min, max] = minMax(array)

//Method 2

function Min2(array) {
    let min = Infinity
    for (let i of array) {
        if (i<min) {
            min=i
        }
    }
    return min
}

function Max2(array) {
    let max = -Infinity
    for (let i of array) {
        if (i>max) {
            max=i
        }
    }
    return max
}

function minMax2(array) {
    let min = Infinity
    let max = -Infinity
    for (let i of array) {
        if (i>max) {
            max=i
        }
        else if(i<min){
            min = 1
        }
    }
    return [min,max]

}
console.log("Minimum is " + Min(array))
console.log("Maximum is " + Max(array))
console.log(`Minimum is: ${min} and Maximum is ${max}`)
//console.log("Minimum is " + Min2(array))
//console.log("Maximum is " + Max2(array))
//console.log(minMax2(array))

//SUM OF ARRAY
function sumofArray(array) {
    let sum = 0
    for (let i in array) {
        sum += array[i]
    }
    return sum
}

function sumofArray1(array) {
    let sum = 0
    for (let i of array) {
        sum += i
    }
    return sum
}
console.log(`The sum of [${array}] is ` + sumofArray(array))
//console.log(`The sum of [${array}] is ` + sumofArray1(array))

/**
 * 
 * @param {Array} array 
 * @returns {Array} Return an array of prime number
 */
function filterArray(array) {
    let pair = [];
    for (let i = 0; i < array.length; i++) {
        let cpt = 0;
        for (let j = 1; j <= array[i]; j++) {
            if (array[i]%j==0) {
                cpt++;
            }
        }      
        
        if (cpt == 2) {
            pair.push(array[i])
        }
    }

    return pair;
}
console.log(`The prime numbers are: ` + filterArray(array))