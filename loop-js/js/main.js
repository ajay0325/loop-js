// var a = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i <=a.length; i++) {
//     console.log(i);
// }


var num =prompt('enter the number');
let rem;
let a = 0;
var temp = num;
var l = num.length;
console.log(l);

while (temp!=0) {
    rem = temp%10;
    a = a + rem**l;
    temp = Math.floor(temp/10);
}

if (a==num) {
    
    console.log("armstrong number");

} else {
    
    console.log("not a armstrong number");

}
