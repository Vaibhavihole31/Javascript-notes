var user ={
    firstName : "Pinki",
    lastName : "Hole",
    role : "Admin",
    loginCount: 55,
    couserlist :[],
    buycourse:function (courseName){
      this.couserlist.push(couserlist);
    },
    getcoursecount : function(){
        return `${this.firstName} is enrolled in total of ${this.couserlist.length} courses`;

    },
};

var couserlist = true ;
console.log(user.getcoursecount());
user.buycourse("React Js courses");
user.buycourse("Angular Js courses");
console.log(user.getcoursecount());

// console.log(user.lastName);

// user.loginCount=5;
// console.log(user.loginCount);

// console.log(user);
// console.table(user);



