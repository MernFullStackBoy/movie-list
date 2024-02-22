import { useState } from "react"
import date from "../date/date"
import MoviesAddForm from "../MovieAddForm/MoviesAddForm"
import "./MovieList.css"

function MovieList() {

    const [fav, setFav] = useState(false)

    const [like, setLike] = useState(false)

    const [items, setItems] = useState(date)

    function handleFav(id, prop) {
        setFav(items.filter(item => {
            if (item.id === id) {
                item.fav = !prop
            }
        }))
    }

    function handleLike(id, prop) {
        setLike(items.filter(item => {
            if (item.id === id) {
                item.like = !prop
            }
        }))
    }

    function handleDelete(id) {
        setItems(prev => prev.filter(item => {
            return item.id !== id
        }))
    }

    function eventList(event) {
        setItems(prev => {
            return [...prev, event]
        })
    }

    return (
        <div id="list" className=" flex flex-col items-center ">
            <h1 id="text" className=" text-center text-[40px] font-bold mt-10 ">Movies List items</h1>
            <MoviesAddForm eventList={eventList} />
            <div className=" w-[70%] min-h-[500px] ">
                {items.length === 0 && <h2 className=" font-bold text-center text-[30px] text-orange-700 mt-[30px]  ">No movies other</h2>}
                {
                    items.map(item => (
                        <ul id="ul" className=" flex justify-between mx-auto border-2 mt-2 border-blue-700 border-l-0 border-r-0 p-3 ">
                            <div className=" w-[220px] ">
                                <li className={` ${item.fav && "text-orange-600"} text-[20px]`} key={item.id}>{item.name}</li>
                            </div>
                            <div className=" w-[100px] ">
                                <li className={` ${item.fav && "text-orange-600"} text-[20px]`} key={item.id}>{item.year} year</li>
                            </div>
                            <div className=" w-[150px] ">
                                <li className={` ${item.fav && "text-orange-600"} text-end text-[20px]`} key={item.id}>{item.views} view</li>
                            </div>
                            <div id="btns" className=" w-[90px] flex justify-between ">
                                <button onClick={() => handleDelete(item.id)} className="fas fa-trash text-orange-600 "></button>
                                <button onClick={() => handleLike(item.id, item.like)} className={` ${item.like && "text-red-600"} fas fa-heart`}></button>
                                <button onClick={() => handleFav(item.id, item.fav)} className="fas fa-star text-yellow-500 "></button>
                            </div>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList