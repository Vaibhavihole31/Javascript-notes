var getuserRole = function (name,Role)
{
    switch(Role)
    {
        case "admin":
          return `${name} is admin with all access`;
          break;

        case "subadmin":
            return`${name} is sub-admin with access to create and delete course `;
            break;

        default:
            return`${name} is a trial user`;
            break


    }
};

console.log(getuserRole("hitesh","testprep"));;

var getRole = getuserRole("sammy","user");

console.log(getRole);