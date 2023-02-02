module.exports = function check(str, bracketsConfig) {
	let cfb = bracketsConfig.flat();
	let oB = cfb.filter((item, i) => i % 2 === 0);
	let cB = cfb.filter((item, i) => i % 2 === 1);

	let brackets = str.split('');

	let cache = [];
	let stack = [];

	for (let i = 0; i < brackets.length; i++) {
		o: for (let j = 0; j < oB.length; j++) {
			if (oB[j] === cB[j]) {
				if (brackets[i] === cache[cache.length - 1]) {
					stack.pop();
					cache.pop();
				} else {
					stack.push(brackets[i]);
					cache.push(brackets[i]);
				}
				break o;
			} else if (brackets[i] === oB[j]) {
				stack.push(brackets[i]);
				break o;
			} else if (brackets[i] === cB[j]) {
				let index = cfb.indexOf(cB[j]);
				let tmp = cfb[index - 1];
				if (tmp !== stack.pop()) return false;
				break o;
			}
		}
	}

	return stack.length === 0 ? true : false;
};
