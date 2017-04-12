
// Constant Time O(1)
function isEven(value){
	// function does not allow for an input > than 1
	// so it is Constant Time by default
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// Polynomial Time O(n^2)
function areYouHere(arr1, arr2) {
	// nested loops are indicative of
	// polynomial time
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// Linear Time O(n)
function doubleArrayValues(array) {
	// because the function operates one each element of
	// the array exactly once, the runtime is directly
	// proportional to the input
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Linear Time O(n)
function naiveSearch(array, item) {
	// the runtime is dependent solely upon the length 
	// of the array, so the runtime complexity is linear
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// Polynomial Time O(n^2) ?
function createPairs(arr) {
	// Unsure about this one, but again
	// the presence of nested loops leads me to guess
	// polynomial. I am not sure how to distinguish 
	// between polynomial and exponential time by 
	// reading the code
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}

// Linear Time O(n)
function generateFib(num) {
	// The for-loop iterations are equal to the input.
	// The runtime is determined solely by the number of iterations.
	// Therefore, the runtime complexity is linear.
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// Logarithmic Time O(log(n))
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  // the halving loop is indicative of Logarithmic Time
  // While the time will grow based on input, the the halving
  // loop propotional or exponential growth
  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
        minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
        maxIndex = currentIndex - 1;
    }
    else {
        return currentIndex;
    }
  }
  return -1;
}

// Constant Time O(1)
function findRandomElement(arr) {
	// function simply returns a single element, regadless of
	// array length. Since the runtime is always one, the
	// complexity is constant
  return arr[Math.floor(Math.random() * arr.length)];
}

// Linear Time O(n)
function isPrime(n) {
	// the variable runtime is determined solely by the
	// the iterations through the for loop, which is itself
	// equal to the input

  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}