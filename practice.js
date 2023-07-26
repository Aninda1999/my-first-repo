let persons = [
  {fname: "Aninda", lname: "Das"},
  {fname: "Ishrak", lname: "Srabon"}
]

function createPerson(person) {
    setTimeout(function() {
        persons.push(person);
   }, 4000); 
 }

createPerson({fname:"Tasnimul", lname:"Hasan"})

setTimeout(function(){
  let output =''
persons.forEach(item => {
  output += `<li>${person.fname} ${person.lname}</li>`
});
document.getElementById('output').innerHTML = output
},5000);