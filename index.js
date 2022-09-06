function writeCards(names, event) {
    let messages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  };
  return messages;
}
console.log(messages);


function countDown(dec) {
    let i = 10
    while (i >= 0) {
        console.log(i--);
    }
        return dec;
    }
    console.log(countDown(10));
    
    
    

