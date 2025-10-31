const checkingMaster = (pass,username,email)=>{
    if( pass.length <6 || pass.length >8 ){
        return console.log("Password must be at least 6 characters long and less than 8 characters long");
    }
    if(!email.includes("@")){
        return console.log("Email must be a valid email address");
    }
    if(username === ""){
        return console.log("Username cannot be null");
    }
}

// checkingMaster("mypassword","","useremail@.com");



const checkingMaster2 = (price)=>{
    if(price >=1000 ){
        const discountedPrice = price * 0.8;
        return console.log(`Discounted price is: ${discountedPrice}`);
    }
    return console.log(`${price} this price is not eligible for a discount`);
}

// checkingMaster2(-100);