// spread operator

const friends: string[] =['Rahim','Karim'];
const schoolFriends: string[] = ['Rintu', 'Chintu', 'Pintu'];
const collegeFriends: string[] = ['Xacks', 'Snacks', 'Packs'];

friends.push(...schoolFriends);

console.log(friends);

const user: {
    name : string ;
    phone : number
} = {
    name : 'Shourov',
    phone: 1906000000
}
const otherInfo: {isMarried : boolean ; jobStatus : string} = {
    isMarried : false ,
    jobStatus : 'bekar'
}

const userInfo = {...user , ...otherInfo};
console.log(`User information ${userInfo}`);

// rest operator
// const sendInvite = (friend1 : string , friend2: string, friend3 : string)  => {
//     console.log(`Welcome ${friend1}`);
//     console.log(`Welcome ${friend2}`);
//     console.log(`Welcome ${friend3}`);
// };

// sendInvite('Mintu', 'Pintu', 'Chintu');

const sendInvite = (...guys : string[]) => {
    guys.forEach((guy:string) => console.log(`Send Invitation to ${guy}`));
}

sendInvite('Gulti', 'Multi', 'Sokina')
