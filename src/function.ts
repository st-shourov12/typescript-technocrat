//function


//arrow function , normal function
function add (num1 : number, num2 : number): number{
    return num1 + num2 ;

}
const sum = add(2,2);
console.log(sum);


// arrow function
const sub = (num1: number, num2: number):number => num1 - num2 ;
console.log(sub(12,5));


//object => function => method

const poorUser = {
    name : 'Shourov',
    balance : 0 ,
    addBalance (newBalance : number) : number {
        const totalBalance = this.balance + newBalance ;
       return totalBalance
    }
}

console.log(poorUser.addBalance(2500))
