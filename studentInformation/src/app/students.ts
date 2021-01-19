export class students{
    id:number;
    regDate:string;
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    pEmail:string;
    sEmail:string;
    city:string;
    address:String;
    gender:string;
    qualification:string;
    contactNo:number;
    description:string;
    desiredId:string;
    password:string;
    rpassword:string;
    uResume:string;
    uImage:string;

}
export const STUDENTS:students[]=[
    {id:1,regDate:'12-20-2018',firstName:'John',lastName:'Hopkins',dateOfBirth:'12-27-1984',address:'',contactNo:3242342110,city:'Baltimore',gender:'Male',pEmail:'john_hopkins@gmail.com',sEmail:'',description:'',qualification:'MBBS',desiredId:'',password:'',rpassword:'',uImage:'',uResume:''},
    {id:2,regDate:'12-17-2018',firstName:'Robert',lastName:'Hawkins',dateOfBirth:'12-21-1992',address:'',contactNo:6432112540,city:'vancouer',gender:'Male',pEmail:'robert_hawkins@gmail.com',sEmail:'',description:'',qualification:'Btech',desiredId:'',password:'',rpassword:'',uImage:'',uResume:''}
] ;