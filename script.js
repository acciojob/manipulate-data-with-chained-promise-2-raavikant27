function manipulateArray() {
  // Step 1: Initial Promise with 3-second delay
  const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });

  initialPromise
    .then((array) => {
      // Step 2: Filter even numbers after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = array.filter(num => num % 2 === 0);
          document.getElementById('output').textContent = evenNumbers.join(',');
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Step 3: Multiply even numbers by 2 after 2 more seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = evenNumbers.map(num => num * 2);
          document.getElementById('output').textContent = multiplied.join(',');
          resolve(multiplied);
        }, 2000);
      });
    });
}

// Call the function when page loads
manipulateArray();
