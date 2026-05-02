const discountCalculator = (input : unknown) => {
    if (typeof input === 'number') {
        const discount = input * (10/100);
        const discountedPrice = input - discount ;
        
        console.log(discountedPrice);
    }else if (typeof input === 'string') {
        const splittedInput = input.split(" ");
        const [priceStr] = splittedInput;
        const price = Number(priceStr) ;
        const discount = price * (10/100);
        const discountedPrice = price - discount ;
        console.log(discountedPrice);
        
    } else {
        console.log('Wrong Input');
    }
}

discountCalculator(100);
discountCalculator('700 tk');
discountCalculator(null)