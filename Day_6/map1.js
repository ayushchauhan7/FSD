let ar = [1, 2, 45, 2, 3, 34];
let newar = ar
    .filter((x) => x % 2 === 0)
    .map((x) => x * 2)
    .reduce((x, y) => x + y, 0);

// let newar = ar.map((x) => x * 2);
// let newar = ar.filter(x => x % 2 == 0).map((x) => x * 2);
// let sum = ar.reduce((x, y) => x + y, 0);
console.log(newar);