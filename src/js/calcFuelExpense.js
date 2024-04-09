function calcFuelExpense (fuelPrice, kilometerPerLitre, kilometers) {
  var litresConsumed = kilometers / kilometerPerLitre
  var totalSpent = litresConsumed * fuelPrice
  
  console.log(totalSpent.toFixed(2))

  return totalSpent.toFixed(2)
}

calcFuelExpense(5.17, 12, 650)