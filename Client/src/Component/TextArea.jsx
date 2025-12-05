import React, { useEffect, useState } from 'react'

function TextArea({note, setNote}) {
    
    
    useEffect(()=> {
        const getNotes = ()=> {
            const savedNote = localStorage.getItem("note")
            if(!savedNote) return ""
            setNote(savedNote)
        }
        getNotes()
    }, [])

    const handleChange = (e) => {
       setNote(e.target.value)
    }

    useEffect(()=> {
        const timeout = setTimeout(()=> {
            localStorage.setItem("note", note);
        }, 1000)

        return () => clearTimeout(timeout)
    }, [note])

  return (
    <textarea
    placeholder='go ahead start typing....'
    className='outline-3 h-full px-2 mx-2 text-xl font-playwrite md:mx-10'
    name='note'
    onChange={handleChange}
    value={note}></textarea>
  )
}

export default TextArea