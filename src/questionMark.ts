// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null / undefined
// ?. optional chaining

const eligible =  (age : number) => {
    // if (age >= 21) {
    //     console.log("You are eligible");
        
    // }else{
    //     console.log("Grow up bro");
    // }

    const result = age >= 21 ? 'You are eligible' : "Cry more" ;
    // console.log(result);
}

eligible(20);


// nulish coalescing

// const  userTheme = undefined ; 
const userTheme = null ;
const selectedTheme = userTheme ?? "Light Theme" ;
// console.log(selectedTheme);


const isAuthenticated = null ;
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest" ;


const resultWithNulish = isAuthenticated ?? "You are guest" ;

console.log({resultWithTernary}, {resultWithNulish});
