let form = document.querySelector('#book-form')
let booklist = document.querySelector('#book-list')
booklist.addEventListener('click', delbook)

class book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn= isbn;
    }
}

class UI{

    addtobooklist(book){
        let li = document.querySelector('#book-list')
        let row = document.createElement('tr')

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `
    li.appendChild(row)
    }

    showalert(messege, classname){
        let div = document.createElement('div');
        div.className = `alert ${classname}`
        div.appendChild(document.createTextNode(messege));
        let container = document.querySelector('.container');
        let form= document.querySelector('#book-form')
        container.insertBefore(div,form);
        
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000)
    }

    showsuccess(messege, classname){
        let div = document.createElement('div');
        div.className = `alert ${classname}`
        div.appendChild(document.createTextNode(messege));
        let container = document.querySelector('.container');
        let form= document.querySelector('#book-form')
        container.insertBefore(div,form);
        
        setTimeout(function(){
            document.querySelector('.success').remove()
        }, 3000)
    }

    remobook(target){
        if(target.hasAttribute("href")){
            if(confirm("Are you sure??"))
            {target.parentElement.parentElement.remove();
            }
        }
    }

}



//add eventlistener
form.addEventListener('submit', newbook)

function newbook(e) {
    let title = document.querySelector('#title').value,
    author =document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value
let ui = new UI()

    if(title === '' || author === '' || isbn === ''){
        ui.showalert("Please fill everything!!", "error"); 
    }

    else{
    let nbook = new book(title, author, isbn)
    ui.addtobooklist(nbook)
    ui.showsuccess("Successfully added book", "success")
}

    e.preventDefault();
}


//delete book
function delbook(e){
    let ett = e.target
    let Ui = new UI();
    Ui.remobook(ett);
    Ui.showsuccess("Book Removed!!", "success");
    e.preventDefault();
    console.log("Hello there");

}


    
