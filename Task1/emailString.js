
let email = "2315006@nec.edu.in"
//extracting username
let userName  =email.split("@")[0]
//extracting domain
let domain = email.split("@")[1].split(".")[0]
console.log(`UserName is ${userName} and domain name is ${domain}`);

