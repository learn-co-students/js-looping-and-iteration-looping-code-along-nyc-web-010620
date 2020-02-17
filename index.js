// Code your solutions in this file

function writeCards(arr){
  const t_arr = []
  for(let i = 0; i < arr.length; i++){
    t_arr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
  }
  return t_arr
}

function countDown(num){
 while(num >= 0){
   console.log(num)
   num --; 
 } 
}