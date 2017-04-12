function removeNumbersLessThanFive(array) {
	var filteredArray = [];
	var index = 0;
	for (var i=0; i<=array.length; i++) {
		if (array[i] >= 5) {
			filteredArray[index] = i;
			index++;
		}
	}
	return filteredArray;
}

function mergeSortedArrays(arr1, arr2) {
	let mergedArray = arr1.concat(arr2);

	return mergedArray.sort((a,b) => {
		return a-b;
	});
}

function doObscureMathOnAnArray(array) {
	let returnArray = [];
	array.forEach(number => {
		let index = array.indexOf(number);
		let newArray = array.slice(0, index).concat(arr.slice(index + 1, array.length));
		for (var i=newArray.length-1; i>0; i--) {
			newArray.splice(i, 0, '*');
		}
		let result = eval( newArray.join( '' ) );
		returnArray.push( result );
	});
	return returnArray;
}