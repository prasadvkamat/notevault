import React, { useContext,useState, useEffect, useRef } from 'react';
import noteContext from '../context_notes/notecontext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const context = useContext(noteContext);
    const { note, getnotes , editNote } = context;
    useEffect(() => {
        getnotes()
    }, [])
    const ref = useRef(null)
    const refclose = useRef(null)

    const [notes, setNotes] = useState({id: "",etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNotes({ id: currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleclick = (e) => {
        console.log("Updating the note...", notes)
        // e.preventDefault();
        editNote(notes.id,notes.etitle,notes.edescription,notes.etag)
        refclose.current.click()
    }

    const onChange = (e) => {
        setNotes({ ...notes, [e.target.name]: e.target.value })
    }



    return (
        <>
            <h2 className="container d-flex justify-content-center funky-heading my-4">
                Your Written Creations - Dive into Your Notes
            </h2>
            <Addnote />

            {/* Button trigger modal */}
            <button
                style={{ display: 'none' }}
                ref={ref}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Launch demo modal
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body"><div className="container card my-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label d-flex justify-content-center funky-label">
                                        🔥 Title Your Creativity
                                    </label>
                                    <input
                                        type="text"
                                        id="etitle"
                                        name="etitle"
                                        className="form-control"
                                        value={notes.etitle}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="edescription" className="form-label d-flex justify-content-center funky-label">
                                        ✨ Share Your Awesome Thoughts
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="edescription"
                                        name="edescription"
                                        rows="3"
                                        value={notes.edescription}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label d-flex justify-content-center funky-label">
                                        add tags
                                    </label>
                                    <input
                                        type="text"
                                        id="etag"
                                        name="etag"
                                        className="form-control"
                                        value={notes.etag}
                                        onChange={onChange}
                                    />
                                </div>

                                
                            </form>
                        </div></div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                ref={refclose}
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleclick}>
                                Save changes to note
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container d-flex justify-content-center">
                <div id="noteitem-container" className='row my-4'>
                    {note.map((note) => {
                        return <Noteitem key={note._id} note={note} updateNote={updateNote} />
                    })}
                </div>
            </div>
        </>
    );
};

export default Notes;

// import Noteitem from "./Noteitem";
// import Addnote from "./Addnote";

// const Notes = () => {
//     const context = useContext(noteContext);
//     const ref = useRef(null);
//     const { note, getnotes, editNote } = context;
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedNote, setSelectedNote] = useState(null);
//     const [updatedNote, setUpdatedNote] = useState({
//         _id: "",
//         title: "",
//         description: "",
//         tag: "",
//     });

//     useEffect(() => {
//         getnotes();
//     }, []);

//     const openUpdateModal = (note) => {
//         setSelectedNote(note);
//         setUpdatedNote({
//             _id: note._id,
//             title: note.title,
//             description: note.description,
//             tag: note.tag,
//         });
//         // ref.current.click(); // Trigger modal open
//         setIsModalOpen(true);
//     };

//     const handleUpdate = async () => {
//         await editNote(
//             updatedNote._id,
//             updatedNote.title,
//             updatedNote.description,
//             updatedNote.tag
//         );
//         // ref.current.click(); // Trigger modal close
//         setIsModalOpen(false);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedNote((prevNote) => ({
//             ...prevNote,
//             [name]: value,
//         }));
//     };

//     return (
//         <>
//             <h2 className="container d-flex justify-content-center funky-heading my-4">
//                 Your Written Creations - Dive into Your Notes
//             </h2>
//             <Addnote />

//             {/* Button to trigger modal */}
//             <button
//                 ref={ref}
//                 style={{ display: "none" }}
//                 data-bs-toggle="modal"
//                 className="btn btn-primary"
//                 data-bs-target="#updateModal"
//                 onClick={() => setIsModalOpen(true)}
//             />

//             {/* Modal */}
//             <div
//                 className="modal fade"
//                 id="updateModal"
//                 tabIndex={-1}
//                 aria-labelledby="updateModalLabel"
//                 aria-hidden="true"
//             >
//                 {/* ... (modal content) ... */}
//                 <div className="modal-body">
//                     {selectedNote && (
//                         <div>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={updatedNote.title}
//                                 onChange={handleInputChange}
//                             />
//                             <textarea
//                                 name="description"
//                                 value={updatedNote.description}
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="text"
//                                 name="tag"
//                                 value={updatedNote.tag}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                     )}
//                 </div>
//                 <div className="modal-footer">
//                     <button
//                         type="button"
//                         className="btn btn-secondary"
//                         data-bs-dismiss="modal"
//                         onClick={() => setIsModalOpen(false)}
//                     >
//                         Close
//                     </button>
//                     <button
//                         type="button"
//                         className="btn btn-primary"
//                         onClick={handleUpdate}
//                     >
//                         Save Changes
//                     </button>
//                 </div>
//             </div>

//             <div className="container d-flex justify-content-center">                 <div id="noteitem-container" className='row my-4'>
//                 {note.map((note) => {
//                     return <Noteitem key={note._id} note={note} updatenote={openUpdateModal} />
//                 })}
//             </div>
//             </div>
//         </>
//     );
// };

// export default Notes;
