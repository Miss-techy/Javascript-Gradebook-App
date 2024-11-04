//Get the total average score
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}


//Get the student's grade
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//Get the passing grade score
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}


//Send the student a messagewith the grade score
function studentMsg(totalScores, studentScore) {
  if(hasPassingGrade(studentScore) == true) {
    return "Class average:" + " " + getAverage(totalScores) +
 ". " + "Your grade:" + " " +  getGrade(studentScore) + "." + " " + "You passed the course."
  } else{
    return "Class average:" + " " + getAverage(totalScores) +
 ". " + "Your grade:" + " " +  getGrade(studentScore) + "." + " " + "You failed the course." ;
  }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
