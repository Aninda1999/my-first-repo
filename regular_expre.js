let re = /My/i
let line = "My name is Aninda Das"

let val = re.exec(line)


val = line.match(re)
//console.log(re.source);


val = re.test(line)
//console.log(val);


val = line.replace(re, "Mucho")
//console.log(val);

val = line.search(re)
console.log(val);