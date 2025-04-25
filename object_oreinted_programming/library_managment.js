class Item{
    constructor(id, title){
        this.id = id;
        this.title = title;
        this.status = "available";
    }

    get title() {
        return this._title;
    }

    borrow() {
        if (this.status == "available"){
            this.status = "borrowed";
            console.log(`${this.title} is successfully borrowed.`);
        }else {
            console.log("Item is already borrowed.");
        }
    }

    returnItem() {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log(`${this.title} is returned and ${this.status}.`)
        } else {
            console.log(`${this.title} was not borrowed.`);
        }
    }

    set title(newTitle){
        if (newTitle.trim() === ""){
            console.log("Title should not be empty.")
        }else {
            this._title = newTitle;
            console.log(`${this._title} has been updated`)
        }
    }


    
}

class Book extends Item{
    constructor(id, title, author, pages){
        super(id, title);
        this.author = author;
        this.pages = pages;
    }

    get summary(){
        return `${this.title} by ${this.author} with ${this.pages} pages.`;
    }
}

//const a = new Item("1","adi")
const book1 = new Book(1, `wings of fire`, `adi`, '100' );
const book2 = new Book(2, "Atomic Habits", "James Clear", 270);

console.log(book1.summary);
book1.borrow();
book1.returnItem();
console.log(book2.summary);
book2.returnItem();
book2.title = "";
book2.title = "Deep work";
console.log(book2.title);