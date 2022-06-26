// for(let i=0;i<=10;i++){
//   console.log(i);
// }



const myState = ["Rajasthan","Delhi","Asam","nagar",55,"pune"]

for(let i=0;i<=myState.length;i++){
    if(typeof myState[i] ==="string") continue;
    console.log(myState[i]);
}