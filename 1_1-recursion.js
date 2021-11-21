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


// .2

function reverseStringLibFuncs(string) {
	// if (!isStringValid(string)) {
	// 	return -1;
	// }

	return string.split('').reverse().join('');
}

// console.log('reverseStringLibFuncs(hello): ', reverseStringLibFuncs('hello'));
// console.log('reverseStringLibFuncs(Hannah): ', reverseStringLibFuncs('Hannah'));

// 

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

// 

function reverseStringRecursive(string) {
	const res = [];
	// if (!isStringValid(string)) {
	// 	return -1;
	// }

	for (let i = string.length - 1; i >= 0; -- i){
		res.push(string.charAt(i));
	}

	return res
}

// console.log('reverseStringRecursive(hello): ', reverseStringRecursive('hello'));
// console.log('reverseStringRecursive(Hannah): ', reverseStringRecursive('Hannah'));