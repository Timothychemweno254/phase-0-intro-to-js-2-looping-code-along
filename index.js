// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--; // Decrease the number by 1 each time
    }
  }
  
  function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  