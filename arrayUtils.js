const biggest = (tab) => {
  let bignb = tab[0]
  for (i = 0; i < tab.length; i++) {
    if (bignb < tab[i]) {
      bignb = tab[i]
    }
  }
  return bignb
}

console.log(biggest([99, 100, 101, 1]))



const sortAscend = (tab) => {
  return tab.sort((a, b) => a - b)
}

console.log(sortAscend([99, 110, 101, 1]))



const makeUnique = (tab) => {
  return [...new Set(tab)]
}
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))