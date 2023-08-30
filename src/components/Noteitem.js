// import React, { useContext } from 'react';
// import noteContext from '../context_notes/notecontext';

// const Noteitem = (props) => {
//     const context = useContext(noteContext);
//     const { deletenote } = context;
//     const { note, updateNote } = props
//     return (
//         <div className='col-md-4'>
//             <div className="card text-bg-success mb-3">
//                 <div className="card-header">{note.title}</div>
//                 <div className="card-body">
//                     <p className="card-text">
//                         {note.description}
//                     </p>
//                     <i className="fa-solid fa-trash-can mx-2" onClick={() => { deletenote(note._id); props.showAlert("Note deleted","danger");} }></i>
//                     <i className="fa-solid fa-pen-to-square mx-2"  onClick={() => { updateNote(note) }}></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Noteitem

import React, { useContext } from 'react';
import noteContext from '../context_notes/notecontext';
import "../context_notes/Cardstyle.css"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deletenote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-4'>
            <div className="card custom-card mb-4">
                <div className="card-header custom-header">{note.title}</div>
                <div className="card-body">
                    <p className="card-text">
                        {note.description} Lorem ipsum dolor sit amet.
                    </p>
                    <div className="btn-group">
                        <button
                            className="btn btn-danger btn-sm  "
                            onClick={() => { deletenote(note._id); props.showAlert("Note deleted", "danger"); }}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => { updateNote(note); }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noteitem;

