// let i = 0;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// let i=0;
// do {
//    console.log(i); 
//    i++;
// } while (i<=10);

// a1 = [10,20,30,40,50]
// a1.forEach((i) => (console.log(i)));

// const names = ["youtube","facebook","instagra","Amazon"]
// for(const n of names){
//     console.log(n);
// }

const symbols={
    yt:"Youtube",
    ig:"Instagram",
    fb:"facebook",
    icon:"learncodeonline"
};

for(const n in symbols){
    console.log(`key is : ${n} value is :${symbols[n]}`);
}
    
