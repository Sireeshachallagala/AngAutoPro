console.log("typescript practice");
interface person{
    firstname :string;
    lastname:string;
    
} 

class student{
    //age : number;
    constructor (public firstname:string,public lastname:string,public age:number){
        
        let fullname = firstname+":"+lastname;
        age;
    }
}

function greeting(person:person){
    debugger;
    return "user "+person.firstname +" "+ person.lastname;
}
//let pname ={firstname:"siisha",lastname:"challagala"}
let user=new student("jane","M",20);
greeting(user);
console.log((user));