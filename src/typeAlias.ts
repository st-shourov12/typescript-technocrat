// const user1 : {
//     id : number ;
//     name : {
//         firstName : string;
//         lastName : string
//     };
//     gender : 'male' | 'female' ;
//     address : {
//         division : string;
//         district : string;
//         upzila : string;
//     }
// } = {
//     id : 1906139715,
//     name : {
//         firstName: 'Miraz',
//         lastName : 'Shourov'
//     },
//     gender : 'male',
//     address : {
//         division : 'Mymenshingh',
//         district : 'Mymenshingh',
//         upzila : 'Haluaghat'
//     }
// }


// const user2 : {
//     id : number ;
//     name : {
//         firstName : string;
//         lastName : string
//     };
//     gender : 'male' | 'female' ;
//     address : {
//         division : string;
//         district : string;
//         upzila : string;
//     }
// } = {
//     id : 1906139715,
//     name : {
//         firstName: 'Ajgor',
//         lastName : 'Shuvro'
//     },
//     gender : 'male',
//     address : {
//         division : 'Dhaka',
//         district : 'Gazipur',
//         upzila : 'Kapasia'
//     }
// }


type User = {
    id : number ;
    name : {
        firstName : string;
        lastName : string
    };
    gender : 'male' | 'female' ;
    address : {
        division : string;
        district : string;
        upzila : string;
    }
} ;

const user1 : User = {
    id : 1906139715,
    name : {
        firstName: 'Miraz',
        lastName : 'Shourov'
    },
    gender : 'male',
    address : {
        division : 'Mymenshingh',
        district : 'Mymenshingh',
        upzila : 'Haluaghat'
    }
}

console.log(user1);

