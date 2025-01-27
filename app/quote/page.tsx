"use client"
/* eslint-disable */

import { useEffect, useState } from "react"

export default function Page() {
  const [quote, setQuote] = useState()
  
  const handleFetch = async () => {
    const result = await fetch('https://nxttt.vercel.app/api/generateQuote')
    const data = await result.json()
    setQuote(data.quote)
  }
  

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
      <h1 className="text-4xl">{quote}</h1>

      <button onClick={handleFetch}>Generate Quote</button>
    </div>
  )
}