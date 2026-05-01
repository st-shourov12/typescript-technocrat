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
console.log(userInfo);