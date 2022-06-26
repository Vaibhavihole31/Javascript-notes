var User = function(firstname , courseCount){
this.firstname = firstname;
this.courseCount = courseCount;
this.getCourseCount = function(){
    console.log(`Course count is : ${this.courseCount}`);
};
};

    User.prototype.getFirstname = function(){
    console.log(`Your firstname is ${this.firstname}`);
}; //inject user object  

var pinki = new User("pinki",5);
// console.log(pinki);
// console.log(pinki.firstname);
pinki.getCourseCount();
pinki.getFirstname();

// var sam = new User("sam",5)
// console.log(sam);