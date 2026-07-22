// todo:        Module no - 10-6            topic: Array Traversal Using for and while Loop

/**   আজকের টপিক, array এর ভেতরে লুপ চালানো :
 *            
 * *  1. for of loop:  for of ভালোভাবে বুঝতে পারলেই ,এই ভিডিওর মেইন টপিক বোঝা হয়ে গেল। 
 * *  2. for loop:   normal for loop : এইটা optional.
 * *  3. while loop:  normal while loop:   এইটাও optional.
 *  
 * */ 


// for of loop: 
const numbers = [10,20,30,40,50,60,70];
const place = ['kashmir', 'sundorBan','coxsbazar', 'evereast','alaska'];

for( const number of numbers){
    console.log(number);
}


for(let myFavoritePlace  of place){
    console.log('My favorite palce is : ', myFavoritePlace);
}


// number variable এর ভেতরে numbers নামক  Array এর total value চলে আসে, for of করার কারনে। 


// normal for loop: optional. 

let productPrises =[ 15,25,35,45,55,65,75];
const productLength = productPrises.length;

for(let taka = 0; taka < productLength ;  taka++ ){
    console.log( 'productPrise index value of : ', taka);
    const originalTaka = productPrises[taka];
    console.log('original Taka value of :', originalTaka);
}


// normal while loop: optional .

let blackMoney = [ 99, 88, 77 , 66 ,55 , 44 , 33  , 22 , 11];
let blackMoneyIndex = blackMoney.length;
let whiteMoney = 0; 
while( whiteMoney < blackMoneyIndex ){
    //  console.log('blocMoney index value of :',blackMoneyIndex);

     const whiteMoneyCount = blackMoney[whiteMoney]
     console.log( 'white money  ',whiteMoneyCount);

     whiteMoney++;
}


/**
 * এই মডিউলে , হাইলি রেকমেন্ড থাকবে,  আমরা শুধু পরিচিত হই, Array er ভেতরেও loop চালানো যায়।
 *  
 * for of loop. ভালো ভাবে, বুঝতে হবে। 
 * normal for  loop : না বুঝলেও চলবে।
 * normal while loop:  না বুঝলেও চলবে।
 */


