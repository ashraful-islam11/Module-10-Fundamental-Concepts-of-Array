// todo:        Module no - 10-3        topic: Array Length, Index, Get and Set by Index

const products = ['book', 'notBooks', 'pen', 'pencil', 'practicalNots'];
const fruits= ['mango', 'orange', 'apple', 'grape', 'waterMalone'];

// Array.length:

const totalProducts = products.length;
console.log('total products number: ',totalProducts);

const totalFruits = fruits.length;
console.log('total fruits number is :',totalFruits);
console.log('তাহলে আমরা শিখলাম length property use করে , একটা array এর ভেতরে কত গুলো data আছে তা বের করা,');


// index: 
console.log('index use করে, কোন নির্দিষ্ট data কে get and set করা যায়। আর array তে index শুরু হয়  0 থেকে');

// get index: 

console.log('get index:-----');

const phone = ['Redmi', 'realme', 'nokia', 'samphony', 'i-phone','vivo', 'inPhonix'];

console.log(phone[0]);
console.log(phone[1]);
console.log(phone[2]);
console.log(phone[4]);
console.log(phone[6]);
console.log(phone[5]);


// set index in Array: 
console.log('set index in Array -----');

const fifaWorldCupTeam = ['Spain', 'argentina','England','France','Norway' , 'brazil', 'germany',' Egypt', 'portugal']; 
console.log(fifaWorldCupTeam);


console.log(fifaWorldCupTeam[0]= 'Spain-Lamin-yamal');
console.log(fifaWorldCupTeam[1] = 'Argentina - Messi');
console.log(fifaWorldCupTeam[2] = 'England -hary ken');
console.log(fifaWorldCupTeam[5] = 'Brazil - Neymar');
console.log(fifaWorldCupTeam[7] = 'Egypt - sala');
console.log(fifaWorldCupTeam[8] = 'portugal -  Ronaldo ');
console.log(fifaWorldCupTeam[3] = 'france -  M bappe ');


console.log('Module summery: we can , get and set use index in Array.   and we find array total length use length property');