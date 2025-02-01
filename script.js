//your JS code here. If required.
// Function to return a promise that resolves with an array of numbers after 3 seconds
       function getNumbers() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Function to filter out odd numbers
        function filterOddNumbers(numbers) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter(num => num % 2 === 0);
                    updateOutput(`Filtered Even Numbers: ${evenNumbers.join(', ')}`);
                    resolve(evenNumbers);
                }, 1000);
            });
        }

        // Function to multiply even numbers by 2
        function multiplyEvenNumbers(numbers) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const multipliedNumbers = numbers.map(num => num * 2);
                    updateOutput(`Multiplied Even Numbers: ${multipliedNumbers.join(', ')}`);
                    resolve(multipliedNumbers);
                }, 2000);
            });
        }

        // Function to update the text of the HTML element with the specified ID
        function updateOutput(text) {
            document.getElementById('output').innerText = text;
        }

        // Chain the promises
        getNumbers()
            .then(numbers => {
                // Filter out odd numbers
                return filterOddNumbers(numbers);
            })
            .then(evenNumbers => {
                // Multiply even numbers by 2
                return multiplyEvenNumbers(evenNumbers);
            });