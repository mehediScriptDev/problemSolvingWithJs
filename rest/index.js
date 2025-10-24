function sum (text,...rest){
    const result= rest.reduce((sum,currentValue)=> sum + currentValue,0);   
    console.log(`${text} ${result}`);
}

sum("the sum is" , 1,2,3,4,5,6,7,8,9,10);
