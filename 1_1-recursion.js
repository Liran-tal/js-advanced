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

console.log(findExp(4, 16));
console.log(findExp(2, 1024));
console.log(findExp(5, 125));


//.5

const array = [1,2,4,6,8,10,56];

function search(array, num) {
	
	return binSearchRec(array, num, 0, array.length - 1);
}

function binSearchRec(array, num, start, end){
	let mid = Math.floor(start + (end - start) / 2);
	if (num === array[mid]) {
		return mid;
	} else if (num > array[mid]) {
		start = mid + 1;
	} else {
		end = mid - 1;
	}

	return binSearchRec(array, num, start, end);
}

// console.log("search(10): ", search(array, 10))
// console.log("search(10): ", search(array, 2))