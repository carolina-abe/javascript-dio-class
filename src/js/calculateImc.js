function calculateImc(weight, height) {
  var imc = weight / (height * height)
  console.log(imc.toFixed(2));

  if (imc < 18.5) {
      console.log('Under weight');
  } else if(imc >= 18.5 && imc < 25) {
      console.log('Normal weight');
  } else if (imc >= 25 && imc < 30) {
      console.log('Overweight');
  } else if (imc >= 30 && imc < 40) {
      console.log('Obese');
  } else if (imc >= 40) {
    console.log('Severe obesity');
  } else {
    console.log('Error when trying to calculate IMC.');
  }
}


calculateImc(65, 1.61)