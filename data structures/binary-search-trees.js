// BSTs are data structures 
// which are used to store data whilst retaining 
// a sorted order

// Trees consist of nodes which are 
// linked to zero or more chid nodes
// root node is at top

// for binary trees, 
// each node can only have 0, 1, or 2 children

// for binary SEARCH trees, all the nodes in the left hand
// branch are guaranteed to have lower values than the node itself
// and nodes in the right hand branch are guaranteed to have
// a higer value than the node itself.

class BinarySearchTree {
	constructor(key=null, value=null, parent=null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	insert(key, value) {
		if (this.key == null) {
			this.key = key;
			this.value = value;
		} else if (key < this.key) {
			if (this.left == null) {
				this.left = new BinarySearchTree(key, value, this);
			}
			else {
				this.left.insert(key, value);
			}
		} else {
			if (this.right == null) {
				this.right = new BinarySearchTree(key, value, this);
			}
			else {
				this.right.insert(key, value);
			}
		}
	}

	get(key) {
		if (this.key == key) {
			return this.value;
		}
		else if (key < this.key && this.left) {
			return this.left.get(key);
		}
		else if (key > this.key && this.right) {
			return this.right.get(key);
		}
		else {
			throw new Error('Key Error');
		}
	}

	remove(key) {
		if (this.key == key) {
			if (this.left && this.right) {
				const successor = this.right._findMin();
				this.key = successor.key;
				this.value = successor.value;
				successor.remove(successor.key);
			} else if (this.left) {
				this._replaceWith(this.left);
			}	else if (this.right) {
				this._replaceWith(this.right);
			}	else {
				this._replaceWith(null);
			}
		}	else if (key < this.key && this.left) {
			this.left.remove(key);
		}	else if (key > this.key && this.right) {
			this.right.remove(key);
		} else {
			throw new Error('Key Error');
		}
	}

	_replaceWith(node) {
		if (this.parent) {
			if (this == this.parent.left) {
				this.parent.left = node;
			} else if (this == this.parent.right) {
				this.parent.right = node;
			}
			if (node) {
				node.parent = this.parent;
			}
		}	else {
			if (node) {
				this.key = node.key;
				this.value = node.value;
				this.left = node.left;
				this.right = node.right;
			} else {
				this.key = null;
				this.value = null;
				this.left = null;
				this.right = null;
			}
		}
	}

	_findMin() {
		if (!this.left) {
			return this;
		}
		return this.left._findMin();
	}
}



// interview questions

function findTreeHeight(tree) {
	let leftSide = tree.left;
	let rightSide = tree.right;
	if (leftSide) {
		return findTreeHeight(leftSide) + 1;
	}
	if (rightSide) {
		return findTreeHeight(rightSide) + 1;
	}
	return 1;
}

function isBST(tree) {
	let key = tree.key;
	let leftSide = tree.left;
	let rightSide = tree.right;
	if (leftSide) {
		if (leftSide.key > key) {
			// returns false because left side values
			// are always lower in BSTs
			return false;
		}
		// Recursively call isBST down the tree
		// boolean will bubble up.
		if (!isBST(leftSide)) {
			return false;
		}
	}
	// same logic as left side
	if (rightSide) {
		if (rightSide.key < key) {
			return false;
		}
		if (!isBST(rightSide)) {
			return false;
		}
	}
	return true;
}


