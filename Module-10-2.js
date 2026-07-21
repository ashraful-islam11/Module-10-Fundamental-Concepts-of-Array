// todo:        Module no - 10-2        topic: Array Animated video

/**
 *  Array Animated text : 
 * 
 * ১. JS ছাড়া সব ধরনের Programming language-এ একই ধরনের একাধিক মান স্টোর করার জন্য Array ব্যবহার করা হয়।

 *২. Array সাধারণত একজন কারিগরের টুলবক্স এর মতো। যার ভেতরে অনেকগুলো ও বিভিন্ন ধরনের সরঞ্জাম থাকে। টুলবক্স এর প্রতিটি ঘর হলো Array এর Index, (Array এর index ০ থেকে শুরু হয়)

 * ১. একাধিক মান একত্রে স্টোর করে: অনেক সময় প্রোগ্রামে আমাদের একাধিক সমান জিনিস একসাথে চলাকালীন স্টোর করতে হয়। অ্যারে এই কাজে আমাদের help করে।

 * ২. অর্গানাইজ করা: Array আপনাকে মানগুলো সাজিয়ে রাখতে দেয়। এতে প্রয়োজনে সহজে কোন নির্দিষ্ট মান খুঁজে পাওয়া যায়।

 * ৩. মানগুলোতে লুপ চালানো যায়: অ্যারের সবগুলো মানের উপর একবারে লুপ চালিয়ে প্রতিটি মানের সাথে কাজ করা যায়।
 */

 // * Array syntax: 

 const fruits = ['mango', 'orange', 'banana'];
 const prise = [ 20, 100, 12];


 console.log(fruits);
 console.log(prise);

 // আমরা চাইলে Array er প্রতিটা value কে দেখতে পারি:  index ধরে ধরে , আর index এর মান শুরু হয় - 0 থেকে. 

 const firstFruits = fruits[0];
 console.log(firstFruits);

 const orangePrise =prise[1];
 console.log(orangePrise);


 // আবার আমারা চাইলে , Array er ভেতরে কত গুলো  value আছে তা দেখতে পারি  length property use করে। 
 const products = ['book', 'notBook', 'pen', 'pencil'];


 const totalFruits = fruits.length;
 console.log(totalFruits);


 const totalProducts = products.length;
 console.log(totalProducts);


 // Module summery : আমারা যা যা শিখলাম তা হলো ঃ 1. how to declare Array. 2. index property. 3. length property. 

 