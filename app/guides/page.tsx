"use client"


import { useRouter } from "next/navigation"
import { useState } from "react"


function Guide() {
    const router = useRouter()
    const [location, setLocation] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        router.push(`/guides/${location}`)
    }
    return (
        <div className=" flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="space-x-4">
                <label htmlFor="location_name">Location</label>
                <input className="h-12 w-64 rounded-md px-4" placeholder="Enter Location.." type="text" name="location_name" id="location_name" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button className="bg-black p-2 text-white rounded-lg" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Guide
