let re
let test 

re = /^[0-9]{4}$/

test = "4v.b4b.aa44@eastdelta.com.bd"



let email = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/
//re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;


console.log(email.test(test))