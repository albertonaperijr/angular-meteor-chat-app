/**
*
* Mail Credentials
* MAIL_URL
*
**/

SMTP = {
  username: 'dumyiih@gmail.com', // eg: email@gmail.com
  password: 'dumyiih.com', // eg: mypassword
  server:   'smtp.gmail.com', // eg: smtp.gmail.com
  port: 465
}

process.env.MAIL_URL = 'smtp://' + encodeURIComponent(SMTP.username) + ':' + encodeURIComponent(SMTP.password) + '@' + encodeURIComponent(SMTP.server) + ':' + SMTP.port;
