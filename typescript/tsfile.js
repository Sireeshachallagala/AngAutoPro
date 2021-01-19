console.log("typescript practice");
var student = /** @class */ (function () {
    //age : number;
    function student(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        var fullname = firstname + ":" + lastname;
        age;
    }
    return student;
}());
function greeting(person) {
    debugger;
    return "user " + person.firstname + " " + person.lastname;
}
//let pname ={firstname:"siisha",lastname:"challagala"}
var user = new student("jane", "M", 20);
greeting(user);
console.log((user));
