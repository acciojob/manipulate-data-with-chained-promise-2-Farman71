let resolveData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]);
            }, 3000);  // Resolve after 3 seconds
        });

        // Function to filter out even numbers
        let evenData = data => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let evenNum = data.filter(e => e % 2 == 0);
                    document.getElementById("output").innerText = evenNum.join(", "); // Display even numbers
                    resolve(evenNum);
                }, 1000);  // After 1 second
            });
        };

        // Function to multiply even numbers by 2
        let multiplyData = data => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let multiplyNum = data.map(e => e * 2);
                    document.getElementById("output").innerText = multiplyNum.join(", "); // Display doubled values
                    resolve(multiplyNum);
                }, 2000);  // After 2 seconds
            });
        };

        // Chain the promises: Resolve initial data -> filter evens -> multiply by 2
        resolveData
            .then(data => {
                console.log(data);  // Log initial data
                return evenData(data);  // Filter even numbers
            })
            .then(data => {
                console.log(data);  // Log even numbers
                return multiplyData(data);  // Multiply even numbers by 2
            })
            .then(data => {
                console.log(data);  // Log final data
            })
            .catch(error => {
                console.error(error);
            });