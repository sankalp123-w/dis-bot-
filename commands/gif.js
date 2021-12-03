

const fetch = require('node-fetch');

module.exports = async function(msg, args) {
  if (msg.author.bot) {
    return;
}
  let keywords = 'dead inside';
  if (args.length > 0) {
    keywords = args.join(' ');
  }
  let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
  msg.channel.send('GIF from Tenor: ... add topic after !gif (!gif example)' );
};
