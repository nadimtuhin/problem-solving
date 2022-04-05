function sum(arr) {
  return arr.reduce((p, carry) => p+carry, 0);
}

function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays
      if (left[0] < right[0]) {
          arr.push(left.shift())
      } else {
          arr.push(right.shift())
      }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2

  // Base case or terminating case
  if(array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}


function echoCarSeatPlanner(P, S) {
  const totalSeats = sum(S); // O(N)
  let totalPeople = sum(P); // O(N)

  if (totalSeats === totalPeople) return P.length;

  S = mergeSort(S); // O(N logN)

  for (let i=S.length-1; i>0; i--) { // O(N)
    if (S[i] >= totalPeople) {
      return S.length - i;
    }

    totalPeople -= S[i];
  }

}

module.exports = { echoCarSeatPlanner }
