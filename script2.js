//function to calculate how many slices of pizza
function sharePizza(totalSlices, totalPeople) {
    const slicesPerPerson = totalSlices / totalPeople;
    const formattedSlices = slicesPerPerson.toFixed(2); // toFixed(2) formats the number to two decimal places
    return `Each person gets ${formattedSlices} slices of pizza; from our ${totalSlices} slice pizza`;
  }
  
  // Test cases
  console.log(sharePizza(8, 2));  // Output: Each person gets 4 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3));  // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(21, 20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(10, 3));
