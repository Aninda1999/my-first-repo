let val

val = document.getElementById("sample-class")


//style

val.style.background = "#4444"
val.style.color = "#fffa"
val.style.padding = "5px"
val.style.textAlign = "center"

//change content

val.textContent = "Hello Bro"
val.innerText = "Yoo Broo"
val.innerHTML = "<i>Hate you</i>"

//document.queryselector

val = document.querySelector("#sample-class")
val = document.querySelector(".container")
val.style.background = "#deeb"

val = document.querySelector("ul li")
val = document.querySelector("li:last-child")
val = document.querySelector("li:nth-child(2)")
val.style.background = "red"
console.log(val)