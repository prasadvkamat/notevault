import React, { useContext, useEffect } from 'react';
import noteContext from '../context_notes/notecontext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const context = useContext(noteContext);
    const { note, getnotes } = context;
    useEffect(() => {
        
        getnotes()
    }, [])
    

    return (
        <>
            <h2 className="container d-flex justify-content-center funky-heading my-4">
                Your Written Creations - Dive into Your Notes
            </h2>
            <Addnote />
            <div className="container d-flex justify-content-center">
                <div id="noteitem-container" className='row my-4'>
                    {note.map((note) => {
                        return <Noteitem key={note._id} note={note} />
                    })}
                </div>
            </div>
            </>
    );
};

export default Notes;
