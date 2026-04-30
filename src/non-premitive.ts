// array, object 

let bazarList : string[] = ["eggs", "milk", "sugar"];
bazarList.push("meat");
console.log(bazarList);

let mixedArr: (string | number)[] = ['eggs', 12 , 'milk', 2 ,'sugar',1];
console.log(mixedArr);

// tuple
let coordinate: [number, number, number] = [20,30,25];
let destination:[string, string, string] = ['Dhaka', 'Chattagram', '3hrs']



// reference type : object 
const user : {
    x : "x" ; //fixed value (literal type)
    readonly isMarried : boolean; //access modifier
    firstName :string ;
    middleName?: string; //optional
    lastName: string
} = {
    x : 'x',
    isMarried : false,
    firstName : 'Mirazul',
    // middleName : 'Islam',
    lastName : 'Shourov'

}

console.log(user?.lastName);