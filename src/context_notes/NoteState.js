// import NoteContext from "./notecontext";
// import { useState } from "react";

// const NoteState = (props) => {
//     const host = "http://localhost:5000";
//     const [note, setNote] = useState([]);

//     // getallnotes first
//     const getnotes = async () => {
//         const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'auth_token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//             }
//         });
//         const json = await response.json();
//         console.log(json)
//         setNote(json);
//     };

//     // add a note
//     const addnote = async (title, description, tag) => {
//         // TODO: API Call
//         // API Call 
//         const response = await fetch(`${host}/api/notes/addnote`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//           },
//           body: JSON.stringify({title, description, tag})
//         });
//         console.log("Adding a new note");
//         const Note = {
//             "_id": "64e30fbae8ss726175c0cccc16fbe",
//             "user": "64e25556a71f76d271sscddc1c",
//             "title": title,
//             "description": description,
//             "tag": tag,
//             "date": "2021-09-03T14:20:09.668Z",
//             "__v": 0
//         };
//         setNote(note.concat(Note));
//     };

//     // delete a note
//     const deletenote = async (id) => {
//         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//             method: 'DELETE',
//             headers: {
//               'Content-Type': 'application/json',
//               "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//             }
//           });
//           const json = response.json();
//           console.log(json)
//         const newnotes = note.filter((note) => { return note._id !== id });
//         setNote(newnotes);
//     };

//     // update a note
//     const editNote = async (id, title, description, tag) => {
//         // API Call
//         const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//             },
//             body: JSON.stringify({ title, description, tag })
//         });
//         const json = response.json();

//         // Logic to edit in client
//         for (let index = 0; index < note.length; index++) {
//             const element = note[index];
//             if (element._id === id) {
//                 element.title = title;
//                 element.description = description;
//                 element.tag = tag;
//             }
//         }
//     };

//     return (
//         <NoteContext.Provider value={{ note, addnote, deletenote, editNote, getnotes }}>
//             {props.children}
//         </NoteContext.Provider>
//     );
// };

// export default NoteState;

// import React, { useState } from 'react';
// import NoteContext from './notecontext';

// const NoteState = (props) => {
//     const host = "http://localhost:5000";
//     const [note, setNote] = useState([]);

//     const getnotes = async () => {
//         try {
//             const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'auth_token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//                 }
//             });
//             const notesData = await response.json();
//             setNote(notesData);
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     const addnote = async (title, description, tag) => {
//         try {
//             const response = await fetch(`${host}/api/notes/addnote`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//                 },
//                 body: JSON.stringify({ title, description, tag })
//             });

//             console.log("Adding a new note");
//             const newNote = await response.json();
//             setNote([...note, newNote]);
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     const deletenote = async (id) => {
//         try {
//             await fetch(`${host}/api/notes/deletenote/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//                 }
//             });

//             const newNotes = note.filter((noteItem) => noteItem._id !== id);
//             setNote(newNotes);
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     const editNote = async (id, title, description, tag) => {
//         try {
//             await fetch(`${host}/api/notes/updatenote/${id}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04"
//                 },
//                 body: JSON.stringify({ title, description, tag })
//             });

//             const updatedNotes =   note.map((noteItem) => {
//                 if (noteItem._id === id) {
//                     return { ...noteItem, title, description, tag };
//                 }
//                 return noteItem;
//             });
//             setNote(updatedNotes);
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     return (
//         <NoteContext.Provider value={{ note, addnote, deletenote, editNote, getnotes }}>
//             {props.children}
//         </NoteContext.Provider>
//     );
// };

// export default NoteState;
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
                    auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04", // Replace with actual token
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
                    auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04", // Replace with actual token
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
        try {
            // Similar to your addnote function but with PUT request
        } catch (error) {
            console.error(error);
        }
    };

    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjU1NTZhNzFmNzZkMjcxY2RkYzFjIn0sImlhdCI6MTY5MjU1NjMxNn0.VkS9iIC5LjTH4ChYA3QV-zjmxj99qQ5vTB37Mpg5l04", 
            }
          });
          console.log("deletingstarted")
          const json = response.json();
          console.log(json)
          console.log("deleting done")
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


