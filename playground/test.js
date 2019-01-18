// const mil = 7;
// const arr = Array(3);

// // console.log(mil[1]);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(i, element, JSON.stringify(arr));
    
// }

// console.time()

// ---------
const horse = {
    name: 'Topher',
    size: 'Large',
    skills: ['jpusting', 'racing'],
    age: 7
}

console.time('TEST');

const {name, age, skills} = horse;

console.log(skills[1]);

console.timeEnd('TEST');
