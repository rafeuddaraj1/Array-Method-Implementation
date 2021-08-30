// forEach Method Implementation
function forEach(arr,callBack) {
    for (let i = 0; i < arr.length; i++){
        callBack(arr[i],i,arr)
    }
}
const arr = [1, 2, 3, 4, 5, 6]
forEach(arr, function (value, index, arr) {
    console.log(value,index,arr)
})