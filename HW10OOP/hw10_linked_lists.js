// hw10_linked_lists.js
// CIST 0265 — Week 10 Homework: Linked Lists

// ─── Provided Node + LinkedList classes (do not modify constructor names) ─────
class Node {
 constructor(value) {
this.value = value;
this.next = null;
 }
}

class LinkedList {
 constructor() {
this.head = null;
this.size = 0;
 }

 append(value) {
const newNode = new Node(value);
if (!this.head) {
this.head = newNode;
 } else {
let current = this.head;
while (current.next) current = current.next;
current.next = newNode;
 }
this.size++;
 }

 toArray() {
const result = [];
let current = this.head;
while (current) {
result.push(current.value);
current = current.next;
 }
return result;
 }
}

// ════════════════════════════════════════════
// EXERCISE 1 — Linked List Traversal & Search
// ════════════════════════════════════════════
const numbers = new LinkedList();
numbers.append(10);
numbers.append(20);
numbers.append(30);
numbers.append(40);

// TODO 1a: Return the number of nodes in the list by traversal,
// not by using list.size.
function countNodes(list) {
// YOUR CODE HERE
    let count = 0;
    let current = list.head;
    while (current !== null) {
        count++;
        current = current.next;
    }
return count;
}
// TODO 1b: Return true if target exists in the list, false otherwise.
function containsValue(list, target) {
// YOUR CODE HERE
    let current = list.head;
    while (current !== null) {
        if (current.value === target) return true;
        current = current.next;
    }
return false;
}
// TODO 1c: Return the sum of all node values in the list.
function sumList(list) {
// YOUR CODE HERE
    let sum = 0;
    let current = list.head;
    while (current !== null) {
        sum += current.value;
        current = current.next;
    }
return sum;
}
// ════════════════════════════════════════════
// EXERCISE 2 — Insertions / Deletions 
// ════════════════════════════════════════════

// TODO 2a: prepend(list, value)
// Insert a new node at the front of the list.
function prepend(list, value) {
// YOUR CODE HERE
    const newNode = new Node(value);
    newNode.next = list.head;
    list.head = newNode;
    list.size++;
}

// TODO 2b: removeFirst(list)
// Remove and return the first node's value.
// Return null if the list is empty.
function removeFirst(list) {
// YOUR CODE HERE
    if (list.head === null) return null;
    const value = list.head.value;
    list.head = list.head.next;
    list.size--;
    return value;
}

// TODO 2c: insertAfter(list, target, value)
// Insert value immediately after the first occurrence of target.
// Return true if inserted, false if target not found.
function insertAfter(list, target, value) {
// YOUR CODE HERE
    let current = list.head;
    while (current !== null) {
        if (current.value === target) {
            const newNode = new Node(value);
            newNode.next = current.next;
            current.next = newNode;
            list.size++;
            return true;
        }
        current = current.next;
    }
    return false;
}

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Reverse a Linked List 
// ════════════════════════════════════════════
// Reverse the list in-place and return the list.
// Example: 10 -> 20 -> 30 becomes 30 -> 20 -> 10
function reverseList(list) {
// YOUR CODE HERE
function reverseList(list) {
    // YOUR CODE HERE
    let prev = null;
    let current = list.head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    list.head = prev;
    return list;
    }
}


module.exports = {
 Node,
 LinkedList,
 countNodes,
 containsValue,
 sumList,
 prepend,
 removeFirst,
 insertAfter,
 reverseList
};