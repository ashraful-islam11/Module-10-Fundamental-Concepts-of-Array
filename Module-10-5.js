// todo:    Module no - 10-5        topic: All About Basic Array Methods, isArray

const table = ['book', 'pen', 'notBook', 'scale', 'pencil', 'mouse', 'keyboard'];


// 1. includes : যে কোন variable , বা Array এর ভেতরের সেই নির্দিষ্ট মান আছে কিনা তা সিওর হঊয়ার জন্য  includes method use করা হয়।  true or false return দিবে. 

const findBook = table.includes('book');
console.log(findBook);
console.log(table.includes('pen'));

    // condition diye includes test : 
if(table.includes('pen')){
    console.log('i have a pen');
}else{
    console.log("i don't have a pen");

}


// concat : concat  যেটা করে, একটা Array এর ভেতরে  আরেকটা array কে জোর করে, বসিয়ে দেয় বা সাজায়। 

const num = [ 10,20,30,40,50,45,35,25,15];
const num2= [ 60,70,80];
const num3 = [90,100];

const swap = num.concat(num2,num3);
console.log(swap);

console.log(num2.concat(num3));
console.log(num3.concat(num));



// indexOf :  array er ভেতরের যেকোন value er index দেখার জন্য indexof method use korte hoy. true= index. false = -1.

const findIndex = num.indexOf(40);
console.log(findIndex);
console.log(num.indexOf(25));
console.log(num.indexOf(100));// false: num array er vetore value nei , ty false , output : -1. 


// join: Array er all value এক সাথে নিয়ে আসবে। join kore dibe.

const bloodLine = ['Roman', 'roc','jay', 'jimi', 'fatu'];

console.log(bloodLine.join(''));
console.log(bloodLine.join(','));
console.log(bloodLine.join(' '));
console.log(bloodLine.join(' ,'));


// isArray: এই ভেরিয়েবল আসলেই Array কিনা , তা চেক করার জন্য isArray method use kora hoy. সঠিক হলে, true. ভুল হলে false.


const age = [12,23,44,55,66,77,80];
const myBrothers= ['Tanvir', 'Abir', 'Abutoha', 'hasibul', 'Akash', 'faruk','habibur','rafi','tajim'];
const me ='Ashraful';

const thisIsArray = Array.isArray(age); // true;
console.log(thisIsArray);
console.log(Array.isArray(myBrothers)); // true;
console.log(Array.isArray(me ));        // false ;




//slice: slice() কোনো array থেকে একটা অংশ কেটে (copy করে) নতুন array তৈরি করে।

const fruits =['apple', 'mango', 'orange','banana'];
const flowers = ['rose', 'lily', 'sunFlowers']
// const fruitsBox = fruits.slice(start , end);
const fruitsBox = fruits.slice(1 , 3);
console.log(fruitsBox);

const flowersBox = flowers.slice(0,2);
console.log(flowersBox);
