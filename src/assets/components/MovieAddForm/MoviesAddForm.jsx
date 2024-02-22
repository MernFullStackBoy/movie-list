import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import "./MovieAddForm.css"

function MoviesAddForm({ eventList }) {

    const [name, setName] = useState("")

    const [year, setYear] = useState()

    const [views, setView] = useState()

    function handleSubmit(e) {
        e.preventDefault()

        const event = {
            name: name,
            year: year,
            views: views,
            id: uuidv4()
        }

        eventList(event)

        console.log(event);

    }

    return (
        <form id='form' onSubmit={handleSubmit}>
            <input id='name' onChange={(e) => setName(e.target.value)} value={name} className=' w-[350px] h-[50px] m-[15px] p-[20px] text-[20px] ' placeholder='Enter movie name' type="text" />
            <input id='name' onChange={(e) => setYear(e.target.value)} value={year} className='w-[350px] h-[50px] m-[15px] p-[20px] text-[20px]' placeholder='Enter move make year' type="number" />
            <input id='name' onChange={(e) => setView(e.target.value)} value={views} className='w-[350px] h-[50px] m-[15px] p-[20px] text-[20px]' placeholder='Enter more views' type="number" />
            <br />
            <button id='button' className=' w-[1100px] ml-[18px] h-[50px] bg-black active:bg-slate-950 ' type='submit'>Add</button>
        </form>
    )
}

export default MoviesAddForm