// Reduce Method Implementation

function reduce(arr, callBack, accumulator = 0) {
    for (let i = 0; i < arr.length; i++){
        accumulator = callBack(accumulator,arr[i],i,arr)
    }
    return accumulator
}

const arr = [1, 2, 3, 4]
let sum = reduce(arr, (prev, curr) => {
    return prev + curr
})

const max = reduce(arr, (prev, curr) => {
    return Math.max(prev,curr)
}, arr[0])// do not forget only any array index provide. not Provide Array index return 0
const min = reduce(arr, function (prev, curr) {
    return Math.min(prev,curr)
}, arr[0])// not Provide Array index return 0

const min2 = reduce(arr, (curr, prev) => {
    return Math.min(prev,curr)
})// Return Value 0. But Why :-> not Provide Array index return 0

console.log(sum) // return Value 10
console.log(max) // return Value 4
console.log(min) // return Value 1
console.log(min2) // // return Value 0