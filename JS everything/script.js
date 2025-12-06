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
// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0) console.log(`${i} is divisible by both 3 and 5`);
// }



//q6
// for(i=1;i<=100;i++){
//     console.log(i);
//     if(i%7===0) break;
// }

//q7
// let count = 0;
// for(let i = 1; i<101;i++){
//     if(i%2==1){
//         count++;
//         console.log(i);
//     }
//     if(count === 5)break;
// }

//q8 rest operator
// function abcd(a,b,c,...val){
//     console.log(a,b,c,val);
// }
// abcd(1,2,3,4,5);

// //q9 spread operator
// let arr = [1,2,3,4,5];
// let arr2 = [...arr];
// console.log(arr2);

//q10 use rest parameter to accept any nim of scores and return the total
// function score(...scores){
// let total = 0;
// scores.forEach(function(val){
//     total += val;
// });
// return total;
    
// }
// console.log(score(10,20,30,40,50)); 

//q11
function findMax(...numbers){
    return Math.max(...numbers);
}
console.log(findMax(1,2,3,4,5));