const students = [
    {id:21, name : "omar sunny"},
    {id:31, name : "manna"},
    {id:41, name : "mahiya mahi"},
    {id:71, name : "deepjol"}
]
const output = [];
for(let i = 0; i<students.length; i++){
    const element = students[i];
    const name = element.name;
    output.push(name);
}
console.log(output);


const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id >40);
console.log(bigger);
const bigger1 = students.find(s => s.id >40);
console.log(bigger1);