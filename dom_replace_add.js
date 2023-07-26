let olitem = document.createElement('li');
olitem.className = 'xyx'
olitem.id = 'abc';
olitem.appendChild(document.createTextNode ('Django'))

document.querySelector('ol').appendChild(olitem)


//add link
let ulitem = document.createElement('li')
let atag = document.createElement('a')
atag.appendChild(document.createTextNode("Instagram"))
atag.setAttribute('href', 'https://www.Instagram.com')
ulitem.appendChild(atag)
document.querySelector('ul').appendChild(ulitem)

console.log(ulitem)

// Replacing Elements

//parent = oldHeading.parentElement;





let newh = document.createElement('h3')
newh.appendChild(document.createTextNode('Heading'))

let oldh = document.querySelector('h3')
let parent = oldh.parentElement;

parent.replaceChild(newh, oldh)

console.log(newh);
console.log(oldh);
console.log(parent);

// Remove element

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

//console.log(link); 