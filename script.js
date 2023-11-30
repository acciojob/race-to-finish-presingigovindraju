// Add your promises to the array promises
window.promises = [
  new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 5 resolved"), Math.random() * 5000 + 1000)),
];

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
  .then(result => {
    // Print the result to the div with id "output"
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch(error => console.error(error));
