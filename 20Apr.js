function number(){
    let num=parseInt(prompt("Enter Your Number"));
    let numrev=num.toString().split('').reverse().join('');
    document.write("This is the reverse order of the number====>"+numrev);

}

// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vow=prompt("Enter Your Word");
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
//     document.write("This is the number of the vowels in the word you entered"+vowelsCount);
// }

// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }


// console.log(
//     "The Number of vowels in -" +
//         " hammad khalid" +
//         getVowels(
//             "hammad khalid"
//         )
// );

function vow(){
let str=prompt("Enter Your Word");
let counter=0;
let vowels=['a','e','i','o','u'];
for(ch of str)
{
    if (vowels.includes(ch)){
        counter++;
    }
}
document.getElementById("count").innerHTML=counter;
// document.write(counter);
}

function myform(){
    let firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lname").value;
    let password=document.getElementById("pass").value;

    localStorage.setItem("First Name",firstname);
localStorage.setItem("Last Name",lastname);
localStorage.setItem("Password",password);

}
