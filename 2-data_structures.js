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


