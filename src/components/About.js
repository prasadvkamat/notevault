import React from 'react'
import NoteContext from '../context_notes/notecontext'
import { useContext } from 'react'

function About() {
  const a = useContext(NoteContext)
    return (
    <div> this is About{a.name}{a.class}</div>
  )
}

export default About