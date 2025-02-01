let resolveData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 0);  // Resolve immediately
});

let evenData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let evenNum = data.filter(e => e % 2 === 0);
            document.getElementById("output").innerText = evenNum.join(", "); // Display even numbers
            resolve(evenNum);
        }, 1000);  // After 1 second
    });
};

let multiplyData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let multiplyNum = data.map(e => e * 2);
            document.getElementById("output").innerText = multiplyNum.join(", "); // Display doubled values
            resolve(multiplyNum);
        }, 1000);  // After 1 more second
    });
};

resolveData
    .then((data) => {
        console.log(data);  // Log initial data
        return evenData(data);  // Filter even numbers
    })
    .then((data) => {
        console.log(data);  // Log even numbers
        return multiplyData(data);  // Multiply numbers by 2
    })
    .then((data) => {
        console.log(data);  // Log final transformed data
    })
    .catch((error) => {
        console.error(error);
    });