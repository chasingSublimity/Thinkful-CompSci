function bitShift(decimalNumber, shiftDirection, shiftAmount) {
	const operation = [decimalNumber, shiftDirection, shiftAmount];
	return eval(operation.join(''));
}

bitShift(null);


function doubleInt(int) {
	return int << 1;
}

function quadroupleInt(int) {
	return int << 2;
}

function divideByTwoAndRoundDown(int) {
	return Math.ceil(int >> 1);
}

function exponentiallyIncrementTwoByN(n) {
	return 2 << n;	
}

function calculateMortonNumber(bin1, bin2) {
	// dafuq?
}

doubleInt(null);
quadroupleInt(null);
divideByTwoAndRoundDown(null);
exponentiallyIncrementTwoByN(null);
calculateMortonNumber(null);