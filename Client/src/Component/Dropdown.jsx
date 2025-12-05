import React from 'react'
import { LuSun } from "react-icons/lu";

function Dropdown({tools}) {
  return <>
    <div className="absolute top-30 right-15 mt-2 bg-gray-800 shadow-sm border-3 w-70 z-50 flex flex-col">
      {tools.map((tool)=>(
        <button className="w-full text-left px-4 py-2 hover:bg-gray-600">
          {tool.icon}
        </button>
      ))}
      
    </div>
  </>
}

export default Dropdown