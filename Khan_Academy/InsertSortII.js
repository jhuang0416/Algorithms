/*
 Date: 02/21/2017
 Program: Challenge-Implement Insertion Sort
 Author: Jenny Huang

 Assignment:

 Insertion sort loops over items in the array, inserting each new item into the subarray before the new item.

 Write insertion sort, making use of the insert function that was written in the previous challenge.

 Once implemented, uncomment the Program.assertEqual() at the bottom to verify that the test assertion passes.

 */

var insert = function(array, rightIndex, value) {
    var key;

    for(key = rightIndex + 1; value < array[rightIndex]; key--, rightIndex--){

        var temp = array[key + 1];

        array[key + 1] = array[rightIndex];
        array[rightIndex] = array[key];
        array[key] = array[key + 1];
        array[key + 1] = temp; }

    return array;
};

var insertionSort = function(array) {
    for (var i= 0; i< array.length; i++) {
        insert(array, i, array[i + 1]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);



