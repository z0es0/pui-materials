console.log("Started Application.");



function updateElement() {
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');
  
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
  }

function submitNote() {
    console.log('this is where we will grab input and then update the notecard')
    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');

    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;

    updateElement();
}


const notecard = 
{
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-frog.png',
    element: null
};


notecard.element = document.querySelector('#notecard-one');
const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.onclick = submitNote
