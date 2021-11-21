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

function reverseStringLibFuncs(string) {
	// if (!isStringValid(string)) {
	// 	return -1;
	// }

	return string.split('').reverse().join('');
}

// console.log('reverseStringLibFuncs(hello): ', reverseStringLibFuncs('hello'));
// console.log('reverseStringLibFuncs(Hannah): ', reverseStringLibFuncs('Hannah'));

// .2.2

function reverseStringLoop(string) {
	const res = [];
	// if (!isStringValid(string)) {
	// 	return -1;
	// }

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
	// if (!isStringValid(string)) {
	// 	return -1;
	// }
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

function F(n) {
	let res = n
	if (n > 1) {
		return res = F(n - 1) + F(n - 2);
	}

	return res
}

console.log('F(4): ', F(6));

