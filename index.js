function breakingRecords(scores) {
  let min = 0;
  let max = 0;
  let counterMin = 0;
  let counterMax = 0;

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      min = scores[i];
      max = scores[i];
    }

    if (min < scores[i]) {
      min = scores[i];
      counterMin++;
    }
    
    if (min >= scores[i]) {
      max = scores[i];
      counterMax++;
    }
  }

  return [counterMin, counterMax];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
