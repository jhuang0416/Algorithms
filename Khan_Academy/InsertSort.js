/*
 Date: 02/17/2017
 Program: Insertion Sort: Insert value before an index
 Author: Jenny Huang

 Write a insert program that does the following criteria:

 The insert function takes three parameters as inputs: array, rightIndex, and value.

 Before the insert function is called:
 * the elements from array[0] to array[rightIndex] are sorted in ascending order.

 After calling the insert function:
 * value and the elements that were previously in array[0] to array[rightIndex], should be sorted in ascending order
 * and stored in the elements from array[0] to array[rightIndex+1].

 In order to do this, the insert function will need to make room for value by moving items that are greater than value
 to the right. It should start at rightIndex, and stop when it finds an item that is less than or equal to value, or
 when it reaches the beginning of the array. Once the function has made room for value, it can write value to the
 array.

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

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log("Array after inserting 2:  " + array);
//Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
console.log("Array after inserting 9:  " + array);
//Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
console.log("Array after inserting 6:  " + array);
//Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);

