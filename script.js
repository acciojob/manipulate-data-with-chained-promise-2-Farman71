function manipulateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.filter((num) => num % 2 === 0));
            }, 1000);
        });
    })
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.map((num) => num * 2));
            }, 2000);
        });
    });
}

manipulateData()
    .then((data) => {
        document.getElementById('output').innerText = data.join(",");
    });