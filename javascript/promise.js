function add100() {
    let result = 0

    for (let i = 0; i <= 1000; i++) {
        result += i;

    }

    return result;

}

function add1000later() {


    // return new Promise( done => {
    //     done( add1000() ) })

    return new Promise((resolve, reject) => {
        let result = add100()

        if (result) {
            resolve(result)
        }

        else reject()
    })
}

console.log("some process");

// console.log(add100());

// add1000later().then(result=> console.log(result))


add1000later()
    .then(result => result + 1000)
    .then(result => console.log(result))
    .catch(() => console.log("error"))
console.log("more process");