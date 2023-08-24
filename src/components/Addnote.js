import React, { useState, useContext } from 'react';
import noteContext from '../context_notes/notecontext';

const Addnote = () => {
  const context = useContext(noteContext);
  const { addnote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" });
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h3 id="home_title" className="container d-flex justify-content-center my-3">
        "Note-vault: Elevate Your Ideas - Store and Sync Notes Securely"
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
              rows="3"
              value={note.description}
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
    </>
  );
};

export default Addnote;
