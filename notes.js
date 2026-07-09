let notes = JSON.parse(localStorage.getItem("notes")) || [];

showNotes();

function saveNote() {

    let note = document.getElementById("note").value;

    if(note.trim() === ""){
        alert("Barreeffama galchi!");
        return;
    }

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note").value = "";

    showNotes();
}

function showNotes(){

    let list = document.getElementById("notesList");

    list.innerHTML = "";

    notes.forEach(function(note,index){

        list.innerHTML += `
            <li>
                ${note}
                <br><br>
                <button onclick="deleteNote(${index})">🗑️ Haqi</button>
            </li>
        `;
    });
}

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();
}