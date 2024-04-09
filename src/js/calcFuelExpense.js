function calcFuelExpense (fuelType, kilometerPerLitre, kilometers) {
  switch(fuelType) {
    case 'ethanol':
      var fuelPrice = 3.19;
      break;
    case 'gasoline':
      var fuelPrice = 5.17;
      break;
    case 'diesel':
      var fuelPrice = 5.92;
      break;
    default:
      console.log('Fuel type invalid.');
  }

  var litresConsumed = kilometers / kilometerPerLitre
  var totalSpent = litresConsumed * fuelPrice

  console.log(totalSpent.toFixed(2))

  return totalSpent.toFixed(2)
}

calcFuelExpense('diesel', 12, 150)