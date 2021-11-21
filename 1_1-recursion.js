function countDown(num) {
	for (let index = 0; index <= num; index++) {
		console.log(index);
	}
}

console.log('countDown(5):');
countDown(5);

function countDownRec(num) {
	if (num > 0) {
		countDownRec(num - 1);
	}
	console.log(num);
	return;
}

console.log('\ncountDownRec(5):');
countDownRec(5);

function countDownInfiniteRec(num) {
	countDownInfiniteRec(num - 1);
	console.log(num);
}

console.log('\ncountDownInfiniteRec(5):');
countDownInfiniteRec(5);