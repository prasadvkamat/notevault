import React, {  useContext } from 'react';
import noteContext from '../context_notes/notecontext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deletenote } = context;
    const { note } = props
    return (
        <div className='col-md-4'>
            <div className="card text-bg-success mb-3">
                <div className="card-header">{note.title}</div>
                <div className="card-body">
                    <p className="card-text">
                        {note.description} Lorem ip
                    </p>
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deletenote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem