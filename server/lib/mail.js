/**
*
* Mail Credentials
* MAIL_URL
*
**/

SMTP = {
  username: 'bebertz93@gmail.com', // eg: email@gmail.com
  password: 'B3b3rtz93.203040ph', // eg: mypassword
  server:   'smtp.gmail.com', // eg: smtp.gmail.com
  port: 465
}

console.log('')

process.env.MAIL_URL = 'smtp://' + encodeURIComponent(SMTP.username) + ':' + encodeURIComponent(SMTP.password) + '@' + encodeURIComponent(SMTP.server) + ':' + SMTP.port;
