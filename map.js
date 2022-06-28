var mymap = new Map();

mymap.set(1 ,"Uno")
mymap.set(2 ,"dos")
mymap.set(3 ,"tres")
mymap.set(4 ,"cuatro")

console.log(mymap);

for(let key of mymap.keys()){
    console.log(`key is ${key}`);
}

for(let value of mymap.values()){
    console.log(`key is ${value}`);
}
