// todo:        Module no : 10-8.       topic: Sort slice and splice an Array.


/**
 *    আজকে এখুন মেইন কিছু টপিক দেখব- যার মধ্যে থাকবে। 
 * *    1. slice. 
 * *    2. splice.
 * *    3. sort.
 */

const number = [ 11, 22, 33, 44, 55, 66, 77, 88];

console.log('main Array: ', number);

// slice:  slice  কপি করে নিয়ে আসে এবং নতুন Array  বানায়। কত index থেকে শুরু হবে, এবন কত index এর আগে শেষ হবে ।
console.log('slice: ');
const slice = number.slice(1,6);
console.log(slice);


// splice : splice যেটা করে, মেইন array কে পরিবর্তন করতে,পারে। কত index থেকে শুরু হবে, এবং কয়টা  index  বাদ দিবে। , এতে আবার element add করা যায়। 

const splice= number.splice( 1, 3);
console.log('splice kora hoyeche',splice);
console.log('main array change korche',number);


const num= [12, 22, 33, 43, 21, 35, 41,81,90];
console.log('main Array', num);


// just splice: 
const justSplice= num.splice(0, 3);
console.log(justSplice);


const spliceAdd =num.splice( 0, 3, 888, 999 ,777);
 console.log('splice and add ', spliceAdd);

 console.log('main Array',num);




 //* sort:  যদি Array তে থাকা ,value গুলো,  number  এ হয়  এবং ১ সংখ্যার হয়, তাহলে sort use করলে,সিরিয়াল ভাবে সাজানো যাবে,  নাম্বার গুলো যদি  একাধিক সংখ্যায় হয়, তাহলে, sort করলে্‌, একটু প্রব্লেম করবে, তবে এর সমাধান আছে, আর যদি value গুলো string এ হয় তাহলে, sort korle  সিরিয়ালি আসবে। তাহলে sort করা জাক। 
 
 const studentId= [1,9,6,7,4,5,3,2,8];
 const doubleNumber = [ 1,2,3,44,55,66,2,3,6,7,9,8]
 const brothers =['hasibul','faruk','ashraful','akash','habibur','tanvir','kurban','golap','ansar','tazim','rafin','toha'];

 const row = studentId.sort();
 console.log(row);

 const serialBrothers= brothers.sort();
 console.log(serialBrothers);

 const serialDouble = doubleNumber.sort();
 console.log(serialDouble);
