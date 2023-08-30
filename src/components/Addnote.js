
import React, { useState, useContext } from 'react';
import noteContext from '../context_notes/notecontext';
import "../context_notes/Addnote.css"
const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addnote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  

  const handleclick = (e) => {
    e.preventDefault();

    if (note.title.length < 3) {
      props.showAlert("Title must be at least 3 characters long", "danger");
    } else if (note.description.length < 5) {
      props.showAlert("Description must be at least 5 characters long", "danger");
    } else {
      addnote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "" });
      props.showAlert("Notes added successfully", "success");
    }
}



  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div className="add-note-container">
      <h3 id="home_title" className="container d-flex justify-content-center"  style={{ marginTop: '35px' }}>
        Elevate Your Ideas with Note-vault: Dive into Your Securely Synced Notes
      </h3>
      <div className="container card my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label d-flex justify-content-center funky-label">
              🔥 Title Your Creativity
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              minLength={5}
              value={note.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="description" className="form-label d-flex justify-content-center funky-label">
              ✨ Share Your Awesome Thoughts
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              minLength={5}
              rows="3"
              value={note.description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label d-flex justify-content-center funky-label">
              add tags
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className="form-control"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <div className="container d-flex justify-content-center">
            <button type="button" className="btn btn-success my-2 funky-button" onClick={handleclick}>
              🚀 Save My Brilliance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addnote;

