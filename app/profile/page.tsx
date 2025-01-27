"use client"

import { useEffect, useState } from "react"


export default function Page() {
  const [participants, setParticipants] = useState()



  const handleFetch = async () => {
    const result = await fetch('/api/getData')
    const data = await result.json()
    setParticipants(data.data)
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
      <h1 className="text-4xl">{participants}</h1>

      <button onClick={handleFetch}>Fetch Participants</button>
    </div>
  )
}