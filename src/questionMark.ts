// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

const eligible =  (age : number) => {
    // if (age >= 21) {
    //     console.log("You are eligible");
        
    // }else{
    //     console.log("Grow up bro");
    // }

    const result = age >= 21 ? 'You are eligible' : "Cry more" ;
    console.log(result);
}

eligible(20);

