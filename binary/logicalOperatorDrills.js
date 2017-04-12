function isEven(int) {
	const binNum = int.toString(2);
	const lastNumber = binNum.slice(-1);
	if (lastNumber === '1') {
		return false;
	} else {
		return true;
	}
}

function printOutputs(num1, num2, operator) {
	const operation = [num1, num2, operator];
	console.log(eval(operation.join('')));
}


isEven(null);
printOutputs(null);
