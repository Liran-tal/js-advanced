// .1

function countDown(num) {
	for (let index = 0; index <= num; index++) {
		console.log(index);
	}
}

// console.log('countDown(5):');
// countDown(5);

function countDownRec(num) {
	if (num > 0) {
		countDownRec(num - 1);
	}
	console.log(num);
	return;
}

// console.log('\ncountDownRec(5):');
// countDownRec(5);

function countDownInfiniteRec(num) {
	countDownInfiniteRec(num - 1);
	console.log(num);
}

// console.log('\ncountDownInfiniteRec(5):');
// countDownInfiniteRec(5);


// .2.1

function isStringValid(string) {
	let valid = true;
	let i = 0;
	while ((i < string.length) && valid === true){
		if ((string.charCodeAt(i) >= 128)) {
			valid = false;
		}
	}

	return valid;
}

function reverseStringLibFuncs(string) {
	if (!isStringValid(string)) {
		return -1;
	}

	return string.split('').reverse().join('');
}

// console.log('reverseStringLibFuncs(hello): ', reverseStringLibFuncs('hello'));
// console.log('reverseStringLibFuncs(Hannah): ', reverseStringLibFuncs('Hannah'));

// .2.2

function reverseStringLoop(string) {
	const res = [];
	if (!isStringValid(string)) {
		return -1;
	}

	for (let i = string.length - 1; i >= 0; -- i){
		res.push(string.charAt(i));
	}

	return res
}

// console.log('reverseStringLoop(hello): ', reverseStringLoop('hello'));
// console.log('reverseStringLoop(Hannah): ', reverseStringLoop('Hannah'));

// .2.3

function reverseStringRecursive(string) {
	let res = [];
	let counter = 0;

	if (!isStringValid(string)) {
		return -1;
	}

	res.push(reverseStringRec(string, res, counter));
	return res.join('')
}

function reverseStringRec(string, res, counter) {
	if (counter < string.length - 1) {
		res.push(reverseStringRec(string, res, counter + 1));
	}

	return string.charAt(counter);
}

// console.log('reverseStringRecursive(hello): ', reverseStringRecursive('hello'));
// console.log('reverseStringRecursive(Hannah): ', reverseStringRecursive('Hannah'));


// .3

function fibonacci(num){
	if (num < 0 || num > 30) {
		return -1;
	}

	return F(num);
}

function F(n) {
	let res = n
	if (n > 1) {
		return res = F(n - 1) + F(n - 2);
	}

	return res
}

// console.log('fibonacci(6): ', fibonacci(6));


// .4

// if (base == 0) return 0;
// if (base == 0 && num === 1) return 0;
// if (num == 0) return -1;
function findExp(base, num) {
	let exp = 0;
	if (num != base){
		exp = findExp(base, num / base)
	} 
	
	return ++ exp; 
}

// console.log(findExp(4, 16));
// console.log(findExp(2, 1024));
// console.log(findExp(5, 125));


//.5

const array = [1,2,4,6,8,10,56];

function search(array, num) {
	
	return binSearchRec(array, num, 0, array.length - 1);
}

function binSearchRec(array, num, start, end){
	let mid = Math.floor(start + (end - start) / 2);
	if (start <= end) {
		if (num === array[mid]) {
			return mid;
		} 
		if (num > array[mid]) {
			return binSearchRec(array, num, mid + 1, end);
		} 
		if (num < array[mid]) {
			return binSearchRec(array, num, start, mid - 1);
		}
	}
	
	return -1;
}

// console.log("search(10): ", search(array, 10))
// console.log("search(1): ", search(array, 1))
// console.log("search(56): ", search(array, 56))
// console.log("search(7): ", search(array, 7))


// .7

function decodeString(string) {
		if (string === '') {
			return string
		}
		
		/\d+/
}

function parseSubString(num, str) {
	if (num < 2) {
		return str;
	}

	return  str + parseSubString(num - 1, str);
}

// console.log("parseSubString(3, a): ", parseSubString(3, 'a')) // aaa
// console.log("parseSubString(2, bc): ", parseSubString(2, 'bc')) // bcbc

// console.log("decodeString(3[a]2[bc]): ", decodeString('3[a]2[bc]')) // aaabcbc
// console.log("decodeString(3[a2[c]]): ", decodeString('3[a2[c]]')) // accaccacc
// console.log("decodeString(2[abc]3[cd]ef): ", decodeString('2[abc]3[cd]ef')) // abcabccdcdcdef
// console.log("decodeString(abc3[cd]xyz): ", decodeString('abc3[cd]xyz')) // abccdcdcdxyz

// const new_str = '';
// let start = 0;
// let chars = 0;
// for	(let i = 0; i < string.length; ++ i){
// 	if (/[0-9]/.includes(string.charAt((i)))) {
// 		for ()
// 	}
// }