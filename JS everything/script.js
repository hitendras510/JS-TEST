// if(true){
//     var a = 12;
//     let b = 13;
// }
// console.log(a); //12
// console.log(b); // reference error becoz let respects block

//q1 EARLY RETURN PATTERN
// function getGrade(score){
//     if(score >= 90 && score<=100) return 'A';
//     if(score >= 80 && score<=89) return 'B';
//     if(score >= 70 && score<=79) return 'C';
//     if(score >= 60 && score<=69) return 'D';
//     if(score >= 33 && score<=59) return 'E';
//     if(score >= 0 && score<=32) return 'A';
//     return "Invalid marks";
// }

// console.log(getGrade(54));

//q2, print even num using for loop

// for(i=0;i<=10;i++){
//     if(i%2===0) console.log(i);
// }


//q3,print odd using while
// let i=1;
// while(i<16){
//     if(i%2!==0) console.log(i);
//     i++;
// }

//q4, print multiplication table of 5
// for(let i=1;i<=10;i++){
//     console.log(`5*${i}=`,5*i);
// }

//q4taking inpt from user
// let num = prompt("Enter a number");
// for(i=1; i<=num;i++){
//     if(num%2===0) console.log(`${num} is even`);
//     if(num%3===0) console.log(`${num} is odd`);

// }


//q5,
for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0) console.log(`${i} is divisible by both 3 and 5`);
}