/**
 * 
 * définition de la fonction : on détermine ce que fait la fonction
 * 
 * @déscription : affiche une pyramide dans la console (terminal)
 * 
 * @param {number} nbBase nombre d'éléments VARIABLE qui sera à la base de la pyramide
 * @param {boulean} reverse valeur vrai/faux détermine si la pyramide est à l'endroit ou  à l'envers
 */
const showStars = (nbBase, reverse) => {
  // définit un string vide
  let str = ''
  if (!reverse) { // si on est à l'inverse de reverse, c'est à dire pyramide à l'endroit
    for (let i = 1; i <= nbBase; ++i) {
      str += '#'.repeat(i)
      if (i !== nbBase) { // tant que le tour de boucle n'est pas égal à nbBase alors on saute une ligne
        str += '\n'
      }
    }
  } else { // pyramide à l'envers
    for (let i = nbBase; i >= 1; --i) {
      str += '#'.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

// appel de la fonction : on utilise la fonction
const nbBase = 20
/**
 * la variable resultat va accueillir
 * le resultat de l'utilisation de la fonction showStars
 */
let resultat = showStars(nbBase, true)
console.log(resultat)