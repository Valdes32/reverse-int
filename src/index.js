module.exports = function reverse (n) {
	let numStr = n.toString();
  let reversedStr = numStr.split('').reverse().join('');
  let reversedNumber = parseInt(reversedStr, 10);
  return reversedNumber;
}
