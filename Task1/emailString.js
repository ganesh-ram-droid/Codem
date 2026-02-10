
let email = "mganeshram@gmail.com"
//extracting username
let userName  =email.substring(0,email.indexOf("@"))
//extracting domain
let domain = email.substring(email.indexOf("@")+1)
console.log(`UserName is ${userName} and domain name is ${domain}`);

