function gradeAvarage(firstGrade, secondGrade, thirdGrade) {
  var gradeAvarage = (firstGrade + secondGrade + thirdGrade) / 3;
  console.log(gradeAvarage);

  if(gradeAvarage < 5 ) {
    console.log('Disapproved');
  } else if(gradeAvarage >= 5 && gradeAvarage <= 7){
    console.log('Recovery')
  } else {
    console.log('Approved')
  }
}

gradeAvarage(1, 2, 6)