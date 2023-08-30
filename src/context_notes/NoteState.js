
import NoteContext from "./notecontext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"; // Replace with your backend URL
    const [note, setNote] = useState([]);

    const getnotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    auth_token: localStorage.getItem('token')
                },
            });
            const notes = await response.json();
            setNote(notes);
        } catch (error) {
            console.error(error);
        }
    };

    const addnote = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    auth_token: localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag }),
            });
            const newNote = await response.json();
            setNote([...note, newNote]);
        } catch (error) {
            console.error(error);
        }
    };


    const editNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        console.log(json)
    
         let newNotes = JSON.parse(JSON.stringify(note))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag; 
            break; 
          }
        }  
        setNote(newNotes);
      }
    
    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                auth_token: localStorage.getItem('token')
            }
        });
        console.log("deletingstarted")
        const json = response.json();
        const newnotes = note.filter((note) => { return note._id !== id });
        setNote(newnotes);
    };

    return (
        <NoteContext.Provider value={{ note, addnote, editNote, deletenote, getnotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;


