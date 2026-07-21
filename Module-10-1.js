// todo:            Module no - 10.1        topic:  Store More Than One Value in a Variable Using Array

/** *
 * * পূর্বে আমরা যা শিখেছিলাম একটু recap করি :
 * 
 * 1. variable : what is variable. how to declare variable.  and variable types: const , let and var. 
 * 
 * 2. condition:  
 *      * greater than: > .
 *      * less than:    < .
 *      * double equal: == .
 *      * treePule equal: ====.
 *      * greater than or equal: >=. 
 *      * less than or equal : <=. 
 *      * not equal : !=.
 *      * not double equal : !==. 
 *      
 * 3. loops: 
 *  *. for loop .
 *  *. while loop.
 *  *. do while loop.
 * 
 * */

// todo:                 Module - 10 is start : 

// normal variable: 
const player = ' rakib'; // এই ভেরিয়েবল এ শুধু ১ টা মাত্র মান রাখা যায়। আমার যদি অনেক মান রাখতে হয় তবে কি করব ? 

// এই problem solve করার জন্য , javaScrip এ আছে Array .

// array: একাধিক বিভিন্ন ধরনের মান এক জায়গায় স্টর করে রাখার জন্য array use করতে হয়। 

const players = ['rakib', 'shakbi', 'rofik', 'shofik',];
console.log(players); 

const age = [ 24, 32, 35, 34];
console.log(age);

const isRich = [ true, true, false, true];
console.log(isRich);