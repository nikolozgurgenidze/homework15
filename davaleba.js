let names = [
        {name: "nika"},
        {name:"gurgena"},
        {name:"giga"},
        {name:"lazare"},
        {name:'giorgi'},
    ]

names.pop();
names.push({name:"nagvela"});
names.shift()
names.unshift({name:"achi"})
console.log(names);

let addNumbers = []
for (let index = 1; index < 10000 ; index++) {
    addNumbers.push(index * index)
    
}
console.log(addNumbers)

const addNames = ['MY NAME IS JOHN'];
for (let index = 0; index < addNames.length; index++) {
    const element = addNames[index].toLowerCase();
    
    console.log(element)
    
}
let randomNumbers = []
for (let index = 0; index < 32; index++) {
    if (index % 2 === 0); 
    randomNumbers.push(index * index)