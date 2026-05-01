// object destructuring

const user = {
    id: 123,
    name: {
        firstName : 'Mirazul',
        middleName : 'Islam',
        lastName : 'Shourov'
    },
    gender : "male",
    favouriteColor : 'Black',
}

// const {name : Shourov} = user ;
// const Shourov = user?.name?.lastName;
// const { name: {middleName: myMiddleName}} = user;

// console.log(myMiddleName);



// array destructuring

const friends : string [] = ['Shuvro', 'Adib', 'Prashant'];
// const myBestFriend = friends[0];
// const [ myBestFriend , A, B] = friends;
const [myBestFriend , ,] = friends;
const [, A ,] = friends //Adib
console.log(myBestFriend , A);