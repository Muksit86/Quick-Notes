import React, { useEffect, useState } from 'react'
import { LuArchiveX, LuSave } from "react-icons/lu";

function Nav({handleDelete, title, setTitle}) {
  

  useEffect(()=> {
    const getTitle = ()=> {
      const saveTitle = localStorage.getItem("title")
        if(!saveTitle) return ""
          setTitle(saveTitle)
      }
      getTitle()
  }, [])

  useEffect(()=> {
    localStorage.setItem("title", title);
  }, [title])

  const handleDownload = ()=> {
    const note = localStorage.getItem('note')
    const title = localStorage.getItem('title')
    if(!note || !title) return

    const blob = new Blob([note], {type: 'text/plain'})
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${title}.txt`
    a.click()

    URL.revokeObjectURL(url)
  }

  return <>
    <div className='flex justify-between px-3 mt-5 sm:px-10 md:mt-10'>
        <input
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        placeholder='Title goes here..'
        className='focus:outline-0 w-10/12 text-2xl md:text-3xl font-playwrite text-gray-600'/>
        <div className='flex gap-2 md:gap-4'>
          <button onClick={handleDownload} className='bg-save px-3 md:px-5 py-1 md:py-2 hover:bg-blue-500 active:scale-103' ><LuSave size={30} className='text-white'/></button>
          <button onClick={handleDelete}   className='bg-delete px-3 md:px-5 py-1 md:py-2 hover:bg-red-500 active:scale-103'><LuArchiveX size={30} className='text-white'/></button>
        </div>
    </div>
  </>
}

export default Nav