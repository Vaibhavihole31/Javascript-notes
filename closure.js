// function init(){
//     var firstname = "pinki"
//     function sayFirstname(){
//         console.log(firstname);
//     }
//    return sayFirstname();
// }

// var value = init();


function Add(V){
    return function(R){
        return V+R
    };
}

var add22 = Add(3);
console.log(add22(22));