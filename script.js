function manipulateData() {
    return new Promise((resolve) => {
        resolve([1, 2, 3, 4]);
    })
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNum = data.filter((num) => num % 2 === 0);
                document.getElementById('output').innerText = evenNum.join(", ");
                resolve(evenNum);
            }, 1000);
        });
    })
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNum = data.map((num) => num * 2);
                document.getElementById('output').innerText = multipliedNum.join(", ");
                resolve(multipliedNum);
            }, 2000);
        });
    });
}

manipulateData();