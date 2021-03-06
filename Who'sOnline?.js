// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!
//
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
//
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

const whosOnline = (friends) =>
  friends.reduce((a,{username, status, lastActivity}) => {
  const frindsStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
  a[frindsStatus] ? a[frindsStatus].push(username) : a[frindsStatus] = [username];
  return a;
}, {})
