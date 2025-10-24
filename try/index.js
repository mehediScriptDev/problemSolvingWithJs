const numbers =[1, 2, 3];
const nam ='John Doe';

for(nmbr of numbers){
    console.log(nmbr);
}

for(letter of nam){
    console.log(letter);
    
}

// for in loop
 const a = 'popularity';
 const b = 'polularity';
const languages= {
    first: 'arabic',
    second : 'english',
    third: 'bangla',
    b
}
languages[a] = 'urdu';

console.log(languages);



for(oneLang in languages){
    console.log(oneLang,languages[oneLang])
}

console.log(Object.keys(languages));
console.log(Object.values(languages));
console.log(Object.entries(languages));


