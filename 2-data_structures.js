// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


function solution(S){
	let round = 0;
	let square = 0;
	let curly = 0;
	let is_valid = true;

	for (let i = 0; i < S.length && is_valid; ++i){
		switch (true) {
			case S.charAt(i) === '(':
				++ round;
				continue;
			case S.charAt(i) === ')': 
				round != 0 ? -- round : is_valid = false;
				continue;
			case S.charAt(i) === '[':
				++ square;
				continue;
			case S.charAt(i) === ']':
				square != 0 ? -- square : is_valid = false;
				continue;
			case S.charAt(i) === '{':
				++ curly;
				continue;
			case S.charAt(i) === '}':
				curly != 0 ? -- square : is_valid = false;
				continue;
		}
	}

	return is_valid && (round == square == curly == 0);
}


// console.log("solution(''): ", solution(''));
// console.log("solution('()'): ", solution('()'));
// console.log("solution('[]'): ", solution('[]'));
// console.log("solution('('): ", solution('('));
// console.log("solution(')'): ", solution(')'));
// console.log("solution('())'): ", solution('())'));


function Queue(capacity) {
	this.q = [];
	this.capacity = capacity;
	this.enque = function (x) {
		-- this.capacity;
		this.q.push(x);
		return this.capacity;
	};
	this.deque = function () {
		++ this.capacity;
		return this.q.shift();
	};
	this.isEmpty = function () {
		return this.q.length === 0 ? true : false;
	};
	this.contains = function (x) {
		return this.q.includes(x) == true 
		? true
		: false;
	}; 
	this.isFull = function () {
		return this.capacity === 0 ? true : false;
	};
}	

const testQ = new Queue(5);
console.log("testQ.isEmpty(): ", testQ.isEmpty());
console.log("testQ.isFull(): ", testQ.isFull());
console.log("testQ.enque(1): ", testQ.enque(1));
console.log("testQ.isEmpty(): ", testQ.isEmpty());
console.log("testQ.enque(2): ", testQ.enque(2));
console.log("testQ.enque(3): ", testQ.enque(3));
console.log("testQ.enque(4): ", testQ.enque(4));
console.log("testQ.enque(5): ", testQ.enque(5));
console.log("testQ.isFull(): ", testQ.isFull());
console.log("testQ.contains(1): ", testQ.contains(1));
console.log("testQ.contains(): ", testQ.deque());
console.log("testQ.contains(1): ", testQ.contains(1));


// console.log("testQ.(): ", testQ.());

// function Queue(capacity) {
// 	this.q = [];
// 	this.capacity = capacity;
	// this.contains = ; 
	// this.addToStart = ;
	// this.addToEnd = ;
	// this.isEmpty = function () {
	// 	return this.q.length === 0 ? true : false;
	// };
	// this.isFull = ;
	// this.removeFirst = ;
// }	



// function contains(x) {
		
// }

function linkedList() {
	this.node = {
		data: undefined,
		next: null
	};
	this.capacity = capacity;
	this.addAfter = function (data) {
		-- this.capacity;
		this;
		return this.capacity;
	};
	this.deque = function () {
		++ this.capacity;
		return this.q.shift();
	};
	this.isEmpty = function () {
		return this.q.length === 0 ? true : false;
	};
	this.contains = function (x) {
		return this.q.includes(x) == true 
		? true
		: false;
	}; 
	this.isFull = function () {
		return this.capacity === 0 ? true : false;
	};
}


// addToStart(x)
// addToEnd(x)
// isEmpty()
// isFull()
// removeFirst(x) - removes first element that equals x