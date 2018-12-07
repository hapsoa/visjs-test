

// var a = "I want apple";
// var b = "an";
// var position = 6;
// var output = [a.slice(0, position), b, a.slice(position)].join('');
// console.log(output);


let oneString = 'Wow that is good idea. yes How could I have seen you before, now know who you are.';

const countForProcess = parseInt(oneString.length / 30);

for (let i = 0; i< countForProcess; i++) {
    oneString = [oneString.slice(0, (((i + 1) * 30) + (i * 4))), '<br>', oneString.slice(((i + 1) * 30) + (i * 4))].join('');
}

console.log(oneString);
