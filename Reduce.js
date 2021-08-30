// Reduce Method Implementation

function reduce(arr, callBack, accumulator) {
    for (let i = 0; i < arr.length; i++){
        accumulator = callBack(accumulator,arr[i],i,arr)
    }
    return accumulator
}
