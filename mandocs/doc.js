var User = {
    name : "",
    getUserName : function () {
        console.log(`user name is ${this.name}`);
    },
};

var pinki = Object.create(User);
console.log(pinki);