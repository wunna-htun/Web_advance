function add100() {
    let result = 0
    for (let i = 0; i <= 1000; i++) {
        result += i;

    }
    return result;

}

async function add100later() {

    let result = await add100()
    console.log(result);

}


console.log("some process");
add100later();
console.log("more process");