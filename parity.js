const isOdd = (number) => {
  return number % 2 === 1
}

const isEven = (number) => {
  return isOdd(number)
}
console.log(isOdd(7))