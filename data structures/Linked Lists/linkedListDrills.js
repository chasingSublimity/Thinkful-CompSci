class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) {
			throw new Error('Index error');
		}
		const newNode = {
			value
		};
		if (index == 0) {
			newNode.next = this.head;
			this.head = newNode;
		}
		else {
			// Find the node which we want to insert after
			const node = this._find(index - 1);
			newNode.next = node.next;
			node.next = newNode;
		}
		this.length++;
	}

	_find(index) {
		let node = this.head;
		for (let i=0; i<index; i++) {
			node = node.next;
		}
		return node;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		return this._find(index).value;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}

		if (index == 0) {
			this.head = this.head.next;
		}
		else {
			// Find the node before the one we want to remove
			const node = this._find(index - 1);
			node.next = node.next.next;
		}
		this.length--;
	}
}

function findLinkedListLength(linkedList) {
	let searching = true;
	let i = 0;
	// iterate through linkedList with ._find() and increment i until 
	// the last item is reached and null is returned by ._find()
	while (searching) {
		if (linkedList._find(i) === null) {
			searching = false;
		} else {
			i++;
		}
	}
	return i;
}

function findMiddleElement(linkedList) {
	const length = findLinkedListLength(linkedList);
	// divide by two and round up to the nearest whole number
	const middleElement = Math.ceil(length/2);
	return linkedList._find(middleElement);
}

function findThirdFromLastElement(linkedList) {
	const thirdFromLastIndex = (findLinkedListLength(linkedList)) - 2;
	return linkedList._find(thirdFromLastIndex);
}

function reverseLinkedList(linkedList) {
	const reversedLinkedList = new LinkedList;
	const length = findLinkedListLength(linkedList);
	for (var i=0;i<=length;i++) {
		let node = linkedList._find(length-i);
		reversedLinkedList.insert(0, node);
	}
	return reversedLinkedList;
}

function checkIfLinkedListHasCycle(linkedList) {
	// dafuq?
}

findLinkedListLength(null);
findMiddleElement(null);
findThirdFromLastElement(null);
reverseLinkedList(null);
checkIfLinkedListHasCycle(null);