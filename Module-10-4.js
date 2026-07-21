//todo:         Module no - 10.4        topic:  AddRemove Elements from Arrays Using push, pop, shift & unshift. 

/**
 * todays topic: 
 * 
 * * 1. push. 
 * * 2. pop .
 * * 3. shift.
 * * 4. unshift.
 */

// push: 

const friends = ['Rumi', 'Rakib', 'Alif', 'kalam', 'Sahariar', 'Rohan'];
console.log(friends);
console.log(friends.length);


//* push() → Adds one or more elements to the END of an array
    friends.push('Jibon');
    console.log(friends);

    friends.push('Khadimul');
    console.log(friends);

    friends.push('Toriqul');
    console.log(friends);

    console.log(friends.length); // length check. 

    friends.push('Rashid');
    console.log(friends);

    friends.push('parvez');
    console.log(friends);

    console.log('Friends array in do push than:', friends.length);


    //* pop() → Removes the LAST element from an array

    console.log('এখুন pop use করবো .');

    console.log(friends);

    const firstOut = friends.pop();
    friends.pop();      // array er end theke ekta value bad diye dibe. 
    console.log(friends);  
    console.log(friends.length);


    const secondOut= friends.pop()
    friends.pop()
    console.log(friends);
    console.log(friends.length);

    const thirdOut = friends.pop();
    friends.pop()
    console.log(friends);
    console.log(friends.length);

    const forthOut = friends.pop();
    friends.pop()
    console.log(friends);
    console.log(friends.length);

    // pop শুধু মুছেই ফেলে না। pop  return ও করে।
    console.log(friends);
    console.log(firstOut,secondOut, thirdOut,forthOut);


    //* shift() → Removes the FIRST element from an array

    console.log('Shift array er first value ke bad dey');

    const age = [10,20,30,40,50];

    console.log(age);
    console.log(age.length);

    // shift : 
    age.shift();
    console.log(age);

    age.shift();
    console.log(age);

    age.shift();
    console.log(age);


   //* unshift() → Adds one or more elements to the BEGINNING of an array 
    console.log('Unshift: array er first value add ');

    const brothers =[ 'jay', 'jimi', 'solo', 'fatu', 'jila'];
    console.log(brothers);
    console.log(brothers.length);


    brothers.unshift('Rock');
    console.log(brothers);

    brothers.unshift('Roman');
    console.log(brothers);


   



    