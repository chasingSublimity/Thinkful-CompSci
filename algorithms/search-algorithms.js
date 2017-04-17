// Linear Search
// classic example is indexOf
// Best case: O(1) -- First item in array
// Worst case: O(n) -- item not present
// Best case: O(n) -- item in middle of array
function indexOf(array, value) {
	// iterate through array and return index of
	// the array element === value
	for (let i=0; i<array.length;i++) {
		if (array[i] == value)  {
			return i;
		}
	}
	// if not found, return negative one
	return -1;
}
// Binary Search
// faster search alg which only works on sorted arrays
// starts with middle down, then begins removing elements
// from search base.
// EX: Array(100) -> Start at 50, if high, drop to 25, 
// if low, rise to 75, etc.
// KNOWN AS THE DIVIDE AND CONQUER APPROACH
// Best Case: O(1) -- middle element
// Worst Case: O(log(n)) 
function binarySearch(array, value, start=0, end=array.length) {
	// if start/end === undefined, use beginning/end of array
	// if not, set to provided values

	// Ternery operators were provided by curriculum.
	// I think using default params makes more sense.
	// let start = (start === undefined) ? 0 : start;
	// let end = (end === undefined) ? array.length : end;

	// value hasnt been found if below evaluates true
	if (start > end) {
		return -1;
	}

	// pick element in the middle
	const index = Math.floor((start + end) / 2);
	const item = array[index];

	// return middle element if === value
	if (item == value) {
		return index;
	}
	// if item is less than value, recursively call binarySearch
	// with the same array, value, and end params 
	// and an incremented start parameter
	else if (item < value) {
		return binarySearch(array, value, index + 1, end);
	}
	// if item is greate than value, recursively call binarySearch
	// with the same array, value, and start params
	// and a decremented end parameter
	else if (item > value) {
		return binarySearch(array, value, start, index - 1);
	}
}



// There are are a few different ways of searching through trees.
// Most common are DFS and BFS
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
	// DFS -- traverse as far down as you can before back tracking
	// O(n) -- each node needs to be visited
	// left branch -> node -> right branch === in-order search
	// node -> branches === pre-ordering
	// branches -> node === post-order
	dfs(values=[]) {
		// in-order search
		if (this.left) {
			values = this.left.dfs(values);
		}
		values.push(this.value);
		if (this.right) {
			values = this.right.dfs(values);
		}
		return values;
	}

	bfs(values=[]) {
		// first-in-first-out queue (FIFO)
		const queue = [this];
		while (queue.length) {
			const node = queue.shift();
			values.push(node.value);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
		return values;
	}
}










indexOf(null);
binarySearch(null);