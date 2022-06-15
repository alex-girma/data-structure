/**
 * NOTE: Linear Search
 *        - Go through every single element of the array and search for the given element.
 *        - JS examples: indexOf | includes | find | findIndex => O(n)
 */
const linearSearch = function (array, val) {
	for (let index = 0; index < array.length; index++) {
		if (val === array[index]) return index;
	}
	return -1;
};
console.log(linearSearch([1, 2, 3, 4, 5], 5));


/**
 * NOTE: Binary Search
 *        - Binary search only works on sorted arrays
 *        - It is a much faster form of search.
 *        - Rather than eliminating one element at a time we eliminate half of the remaining elements at a time
 *        - Divide and conquer
 *        - => O(log n)
 */

const binarySearch = function (array, val) {
	let left = 0;
	let right = array.length - 1;
	let middle = Math.floor((left + right) / 2);
	while (array[middle] !== val && left <= right) {
		if (array[middle] > val) right = middle - 1;
		else left = middle + 1;
		middle = Math.floor((left + right) / 2);
	}
	return array[middle] === val ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

const naiveStringSearch = function (string, word) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < word.length; j++) {
			if (string[i + j] !== word[j]) break;
			if (j === word.length - 1) count++;
		}
	}
	return count;
};

console.log(naiveStringSearch("onvomgomgomg", "omg"));

const array = [];

for (let i = 0; i < 50; i++) {
	array.push(Math.floor(Math.random() * 100));
}

/**
 * NOTE: Bubblesort
 *        - A sorting algorithm where the largest values bubble up to the top!
 */

const bubbleSort = function (array) {
	let noSwaps;
	for (let i = array.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				console.log("bubble");
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return array;
};

//console.log(bubbleSort(array));

/**
 * NOTE: Selection sort
 *        - Go through array and put smallest value at the start of the array
 */

const selectionSort = function (array) {
	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		if (i !== min) [array[min], array[i]] = [array[i], array[min]];
	}
	return array;
};

// console.log(selectionSort(array));

const insertionSort = function (array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j > 0; j--) {
			console.log("inser");

			if (array[j] > array[j - 1]) break;
			if (array[j] < array[j - 1]) [array[j], array[j - 1]] = [array[j - 1], array[j]];
		}
	}
	return array;
};

console.log(insertionSort(array));
