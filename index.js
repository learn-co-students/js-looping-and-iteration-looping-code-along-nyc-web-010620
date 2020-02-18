// build a function named writeCards() that accepts two arguments: an array of string names, and an event name. 
// Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
// The condition should halt the for loop after the last name in the array is printed out in the loop body.
// Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift. 
// Collect the messages in an array and return this array.
function writeCards(arrayOfNames, eventName) {
   let returnArray = []
   for (let i = 0; i < arrayOfNames.length; i++) {
      returnArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`); 
   }
   return returnArray; 
}

// invokes console.log once for each number, counting down from the number provided to zero
function countDown(number) {
   for (let i = number; i >= 0; i--) {
      console.log(i); 
   }
}