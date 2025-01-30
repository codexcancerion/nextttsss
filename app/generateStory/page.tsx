"use client"
/* eslint-disable */

import { useEffect, useState } from "react"

export default function Page() {
  const [responseData, setResponseData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleFetch = async () => {
    try {
      setIsLoading(true)
      const result = await fetch('/api/generateStory')
      const data = await result.json()
      console.log(data)
      setResponseData(data.story.response)
    } catch (error) {
      setResponseData("There was an error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
      { isLoading ? <p>Loading</p> : <h1 className="text-4xl">{responseData}</h1>}
      

      <button onClick={handleFetch}>Fetch Api</button>
    </div>
  )
}