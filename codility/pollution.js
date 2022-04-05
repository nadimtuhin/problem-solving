function sum(arr) {
  return arr.reduce((p, carry) => p+carry, 0);
}

function pollution(A) {
  let totalPollution = sum(A);

  // goal is to get half of the current total pollution
  const requiredPollution = totalPollution/2;

  // no filter at first
  let filters = 0;

  // apply filters until we have reduced pollution to at least half
  while(totalPollution > requiredPollution) {
    // we will apply filter on the most populated factory right now
    let maxIndex = A.indexOf(Math.max(...A)); // O(N) inside a loop
    let currentlyMostPolluted = A[maxIndex];

    // apply filter and increase filter count
    A[maxIndex] = currentlyMostPolluted/2; filters++;

    /**
     * calculate new total pollution
     * we could use sum(A) here,
     * but lets use the previous total pollution as a cache
     */
    totalPollution = totalPollution - currentlyMostPolluted/2;
  }

  return filters;
}


module.exports = { pollution }
