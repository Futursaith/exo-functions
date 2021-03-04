const add = (nb1, nb2) => {
  return (nb1 + nb2)
}
console.log(add(10, 20))

const sub = (nb1, nb2) => {
  return (nb1 - nb2)
}
console.log(sub(20, 10))

const mul = (nb1, nb2) => {
  return (nb1 * nb2)
}
console.log(mul(10, 20))

const div = (nb1, nb2) => {
  return (nb1 / nb2)
}
console.log(div(20, 10))

const calc = (nb1, nb2, operator) => {
  switch (operator) {
    case '+':
      return add(nb1, nb2)
      break;
    case '-':
      return sub(nb1, nb2)
      break;
    case '*':
      return mul(nb1, nb2)
      break;
    case '/':
      return div(nb1, nb2)
      break;
  }
}
console.log(calc(10, 20, '+'))