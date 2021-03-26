// Only change code below this line

let fifteenArray = [];
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (let i = 1; i < 6; i++) {
        let x = i;
        yield x;
    }
}

function* insideGenerator2() {
    for (let i = 10; i < 16; i++) {
        let x = i;
        yield x;
    }
}

function* insideGenerator3() {
    for (let i = 6; i < 10; i++) {
        let x = i;
        yield x;
    }
}

const iterator = myGenerator();
for (let i = 0; i < 16; i++) {
    let x = iterator.next();
    if (x.done === true) {
        fifteenArray.push('undefined!');
    } else {
        fifteenArray.push(x.value);
    }
}

console.log(fifteenArray.join('#, '));
console.log(fifteenArray);

// Only change code above this line
module.exports = { fifteenArray, myGenerator };