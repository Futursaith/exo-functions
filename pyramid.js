const showStars = (nbBase, reverse) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += '#'.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += '#'.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}
const nbBase = 20

let str2 = showStars(nbBase, false)
console.log(str2)