"use client"
/* eslint-disable */

import { useEffect, useState } from "react"

export default function Page() {
  const [responseData, setResponseData] = useState()
  
  const handleFetch = async () => {
    const result = await fetch('https://konpormi.vercel.app/api/getData')
    const data = await result.json()
    setResponseData(data.data)
  }

  // axios -> library
  

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
      <h1 className="text-4xl">{responseData}</h1>

      <button onClick={handleFetch}>Fetch Api</button>
    </div>
  )
}