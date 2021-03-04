const biggest = (tab) => {
  let bignb = 0
  for (i = 0; i < tab.length; i++) {
    if (bignb < tab[i]) {
      bignb = tab[i]
    }
    return bignb
  }
}

console.log(biggest([99, 100, 101, 1]))