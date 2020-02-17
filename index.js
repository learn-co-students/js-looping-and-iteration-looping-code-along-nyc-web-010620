const name=['Lisa', 'Kaitlin', 'Jan']
const event_name = 'surprise'

function writeCards(name, event_name){
    let newArray = []
for (let i=0; i < name.length; i++) {
newArray.push(`Thank you, ${name[i]}, for the wonderful ${event_name} gift!`);
    }   
return newArray;
}

function countDown(){
    let coundown=10;
    while (coundown>=0){
        console.log(coundown--);
    }
}