const getUser = ( input : string | null) => {
    if (input) {
        console.log(`From DB :${input}`);
    }else{
        console.log(`From DB :All User`);
    }
}

getUser('Shourov')  // From DB :Shourov
getUser(null) //From DB :All User