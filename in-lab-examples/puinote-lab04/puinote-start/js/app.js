class Notecard {
    constructor(imageURL, title, body, elementID) {
        console.log('create a new notecard');
        // console.log("new note", imageURL, title, body)
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;

        this.element = document.querySelector(elementID);

        this.updateElement();

        // delete notes
        const btnDelete = this.element.querySelector('.icon-delete');
        btnDelete.onclick = this.deleteNote.bind(this);
    }

    updateElement() {
        console.log('updating html');

        const noteImageElement = this.element.querySelector('.notecard-thumbnail');
        const noteTitleElement = this.element.querySelector('.note-title');
        const noteBodyElement = this.element.querySelector('.note-body');

        noteImageElement.src = this.noteImageURL;
        noteTitleElement.innerText = this.noteTitle;
        noteBodyElement.innerText = this.noteBody;
    }

    deleteNote() {
        console.log(this);
        this.element.remove();
    }
}

// const notecardOne = new Notecard("test-image", "test-title", "this-body")

const notecardOne = new Notecard(
    'assets/warhol-frog.png',
    'This is the first note',
    'here is some body text for the first note',
    '#notecard-one'
)

const notecardTwo = new Notecard(
    'assets/warhol-orangutan.png',
    'This is the Second Note',
    'And here is some body text for the second note! What could be next?',
    '#notecard-two'
  )
  
const notecardThree = new Notecard(
    'assets/warhol-eagle.png',
    'This is the Third Note',
    'Yep, you guessed it, here is some body text for the third note.',
    '#notecard-three'
  )