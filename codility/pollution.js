function pollution(A) {
  let totalPollution = A.reduce((p, carry) => p+carry, 0);
  let requiredPollution = (totalPollution/2);
  let filters = 0;

  while(totalPollution > requiredPollution) {
    filters++;

    let maxIndex = A.indexOf(Math.max(...A));
    A[maxIndex] = A[maxIndex]/2;

    totalPollution = A.reduce((p, carry) => p + carry, 0);
  }

  return filters;
}


module.exports = { pollution }
