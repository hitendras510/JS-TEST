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


//q3,
let i=1;
while(i<16){
    if(i%2!==0) console.log(i);
    i++;
}