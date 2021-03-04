const reverseStr = (msg) => {
  return msg.split('').reverse().join('')
}
const isPalindrome = (msg) => {
  return msg === reverseStr(msg);
}
console.log(reverseStr('Hello!'))
console.log(isPalindrome('Hello!'));

