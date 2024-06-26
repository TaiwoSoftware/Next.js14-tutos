'use client'
import { useEffect } from "react"

export default function error({error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later,</h1>
      <button className="hover:text-white-600 hover:bg-transparent hover:border-2 border-amber-500 mt-4 rounded-lg bg-amber-600 px-10 py-2" onClick={() => reset()}>Try again</button>
    </div>
  )
}
