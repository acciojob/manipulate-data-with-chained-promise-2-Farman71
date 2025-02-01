let resolveData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000); // Resolving initial data after 3 seconds
});

let evenData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let evenNum = data.filter(e => e % 2 === 0);
            // Update the output with even numbers
            document.getElementById("output").innerText = `Even numbers: ${evenNum.join(", ")}`;
            resolve(evenNum);
        }, 1000);  // 1-second delay to filter even numbers
    });
};

let multiplyData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let multiplyNum = data.map(e => e * 2);
            // Update the output with multiplied numbers
            document.getElementById("output").innerText = `Multiplied numbers: ${multiplyNum.join(", ")}`;
            resolve(multiplyNum);
        }, 2000);  // 2-second delay to multiply even numbers by 2
    });
};

// Chaining the promises
resolveData
    .then(data => {
        console.log("Initial data:", data);
        return evenData(data);  // Filter out even numbers
    })
    .then(data => {
        console.log("Even numbers:", data);
        return multiplyData(data);  // Multiply even numbers by 2
    })
    .then(data => {
        console.log("Final result:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
