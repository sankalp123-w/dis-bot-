
const replies = ['🚂🌈💖', 'Choo choo!', 'Ding! 🛎', 'Never forget this dot!'];

module.exports = function(msg, args) {
  if (msg.author.bot) {
    return;
}
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};
