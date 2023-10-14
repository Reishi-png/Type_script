//factory method
class Book {
    constructor() {}

    private status: string

    
    public order() {
        console.log('new book order')
    }
}

class Shop {
    constructor() {}

    
    public createBook() {
        const book = new Book()

        return book
    }

    
    public orderBook() {
        
    }

    
    public orderBoardGame() {
        
    }
}

const shop = new Shop()

const bookNumber1 = shop.createBook()
bookNumber1.order()