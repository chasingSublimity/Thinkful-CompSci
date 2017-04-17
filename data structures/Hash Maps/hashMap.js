class HashMap {
	constructor(initialCapacity=8) {
		this.length = 0;
		this._slots = [];
		this._capacity = initialCapacity;
		this._deleted = 0;
	}

	get(key) {
		const index = this._findSlot(key);
		if (this._slots[index] === undefined) {
			throw new Error('Key error');
		}
		return this._slots[index].value;
	}

	set(key, value) {
		const loadRatio = (this.length + this._deleted + 1) / this._capacity;
		if (loadRatio > HashMap.MAX_LOAD_RATIO) {
			this._resize(this._capacity * HashMap.SIZE_RATIO);
		}

		const index = this._findSlot(key);
		this._slots[index] = {
			key,
			value,
			deleted: false
		};
		this.length++;
	}

	remove(key) {
		const index = this._findSlot(key);
		const slot = this._slots[index];
		if (slot === undefined) {
			throw new Error('Key error');
		}
		slot.deleted = true;
		this.length--;
		this._deleted++;
	}

	_findSlot(key) {
		const hash = HashMap._hashString(key);
		const start = hash % this._capacity;

		for (let i=start; i<start + this._capacity; i++) {
			const index = i % this._capacity;
			const slot = this._slots[index];
			if (slot === undefined || (slot.key == key && !slot.deleted)) {
				return index;
			}
		}
	}

	_resize(size) {
		const oldSlots = this._slots;
		this._capacity = size;
		// Reset the length - it will get rebuilt as you add the items back
		this.length = 0;
		this._deleted = 0;
		this._slots = [];

		for (const slot of oldSlots) {
			if (slot !== undefined && !slot.deleted) {
				this.set(slot.key, slot.value);
			}
		}
	}

	static _hashString(string) {
		let hash = 5381;
		for (let i=0; i<string.length; i++) {
			hash = (hash << 5) + hash + string.charCodeAt(i);
			hash = hash & hash;
		}
		return hash >>> 0;
	}
	
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

// returns an object of character frequencies
function getCharFreq(str) {
	const charFreq = {};
	for (let i=0;i<str.length;i++) {
		// if the selected character is not in the object, 
		// initialize it is a key with a value of zero
		charFreq[str[i]] = charFreq[str[i]] || 0;
		// increment frequency
		charFreq[str[i]]++;
	}
	return charFreq;
}

function isPalindromePermutationPossible(str) {
	let charFreq = getCharFreq(str);
	let charFreqSum = 0;
	// for each character, loop through and sum the remainder of 
	// its frequency / 2. This counts the amount of non-doubled characters
	for (let char in charFreq) {
		charFreqSum += charFreq[char] % 2;
	}
	// palindromes cannot have more than one non-doubled character
	return charFreqSum < 2;
}

function groupAnagrams(words) {
	// alphabetically sorts the characters in each word 
	// and maps them to an array ex: 'blake' would return 'abekl'.
	// the array itself is then sorted alphapetically
	const sortedWordsArray = (words.map(word => word.split('').sort().join(''))).sort();
	let containerArray = [];
	let previousWord;
	let anagramArray = [];
	sortedWordsArray.forEach(word => {
		if (word === previousWord || !previousWord) {
			anagramArray.push(word);
		} else {
			containerArray.push(anagramArray);
			anagramArray = [word];
		}
		previousWord = word;
	});
	return containerArray;
}



isPalindromePermutationPossible(null);
groupAnagrams(null);