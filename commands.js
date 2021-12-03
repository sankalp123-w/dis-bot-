

const fetch = require('node-fetch');

const gif = require('./commands/gif.js');
const choochoo = require('./commands/choochoo.js');

const commands = { choochoo, gif };

module.exports = async function(msg) {
  if (msg.author.bot){return;}
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
      command = command.substring(1);
      commands[command](msg, tokens);
    
  }else{

    API_URL = 'https://api-inference.huggingface.co/models/sankalpjha1/mr.bot_haary';

// log out some info

// when the bot receives a message
// need async message because we are making HTTP requests
    // ignore messages from the bot itself
    if (msg.author.bot) {
      
        return;
    }
    // form the payload
    
    const payload = {
        inputs: {
            text: msg.content
        }
    };
    // form the request headers with Hugging Face API key
    const headers = {
        'Authorization': 'Bearer ' + process.env.HUGGINGFACE_TOKEN
    };
    
    // set status to typing
    msg.channel.startTyping();
    // query the server
    const response = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: headers
    });
    const data = await response.json();
    let botResponse = '';
    if (data.hasOwnProperty('generated_text')) {
        botResponse = data.generated_text;
    } else if (data.hasOwnProperty('error')) { // error condition
        botResponse = data.error;
    }
    // stop typing
    msg.channel.stopTyping();
    // send message to channel as a reply
    msg.reply(botResponse);
}


};
