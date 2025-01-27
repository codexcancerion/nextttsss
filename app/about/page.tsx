"use client"
/* eslint-disable */

import { useEffect, useState } from "react"

export default function Page() {
    const [count, setCount] = useState(0)
    const [clicked, setClicked] = useState("")

    useEffect(() => {
        setCount(count + 1)
    }, [clicked])

    //make a side effect to print your name many times as the count, when count updates

    const handleCLick = () => {
        setCount(count + 1)
    }

    const handleHi = () => {
        setClicked("hello")
    }

    const handleHello = () => {
        setClicked("hi")
    }

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
            <h1 className="text-4xl">You clicked the button {count} times</h1>
            <button
                className="bg-gray-200 p-5 rounded-lg hover:bg-blue-500 transition"
                onClick={handleCLick}
            >Click Me</button>
            
            
            <h1 className="text-4xl">{clicked}</h1>
            <button
                className="bg-gray-200 p-5 rounded-lg hover:bg-blue-500 transition"
                onClick={handleHi}
            >Hi</button>
            <button
                className="bg-gray-200 p-5 rounded-lg hover:bg-blue-500 transition"
                onClick={handleHello}
            >Hello</button>
            
        </div>
    )
}

// task: make buttons hi and hello, if i click hi, display hello, if i click hello display hi