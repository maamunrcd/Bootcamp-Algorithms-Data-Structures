// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // let result= [];
    // for (const item of array) {
    //    let lastItem = result[result.length-1];
    //    if(!lastItem || lastItem.length === size) {
    //        result.push([item]);
    //    } else {
    //         lastItem.push(item)
    //    }
    // }
    // return result;

    // let result = [];
    // let copyArray = [...array];
    // while (copyArray.length > 0) {
    //     result.push(copyArray.splice(0, size));
    // }
    // return result;

    // let result = [];
    // for (let i = 0; i < array.length; i += size) {
    //     let chunk = array.slice(i, i + size);
    //     result.push(chunk);
    // }
    // return result;

    if(array.length <= size) {
        return [array];
    }
    //const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return [array.slice(0, size), ...chunk(array.slice(size), size)]
}

module.exports = chunk;
