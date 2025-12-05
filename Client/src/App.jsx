import { useState } from 'react'
import Nav from './Component/Nav'
import TextArea from './Component/TextArea'

function App() {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const handleDelete = ()=> {
    localStorage.removeItem('note');
    setNote("")
  }

  return (
    <>
      <div className='flex flex-col gap-5 h-screen'>
        <Nav title={title} setTitle={setTitle} handleDelete={handleDelete}/>
        <TextArea note={note} setNote={setNote} />
      </div>

    </>
  )
}

export default App
