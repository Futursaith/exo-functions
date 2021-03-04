
const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return nb_monocycle * 1 + nb_moto * 2 + nb_voiture * 4 + nb_limousine * 6
}
console.log(countWheels(10, 20, 7, 2))
console.log(countWheels(2, 3, 4, 5))
