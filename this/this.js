console.log(this);

var user ={
    firstName : "Hitesh",
    courseCount :5,
    getcountcourse :function(){
        console.log("Line no 7",this);
    },
};
user.getcountcourse();