// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckedOut, isDiscarded) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numPages = numPages;
    this.numCheckedOut = numCheckedOut;
    this.isDiscarded = isDiscarded;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, isbn, numPages, numCheckedOut, isDiscarded)
    }
    dispose(currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.isDiscarded = "Yes";
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, isbn, numPages, numCheckedOut, isDiscarded)
    this.thrownOut = false 
    }
    thrownOut() {
        if (this.numCheckedOut > 100) {
            this.isDiscarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let topSecretShuttleBuildingManual = new Book("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000", 1147, 1, "No")


// Code exercises 4 & 5 here:
prideAndPrejudice.dispose(2024);