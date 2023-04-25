import React, { useContext, useState } from 'react'
import './home.css'
import axios from 'axios'
import Display from '../Display/Display'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
const url = process.env.REACT_APP_URL

const Home = () => {
    const [search,setSearch] = useState("")
    const [splash,setSplash] = useState([])
    const navigate = useNavigate()
    const onClickBookmark =()=>{
        navigate('/bookmark')
    }

    const onClickSearch = async()=>{
        const imgData = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${url}&per_page=12`)
        setSplash([...imgData.data.results])
    }
  return (
    <div className="home">
        <div className="home_top">
            <div className="home_top_head">
                <h1>React Photo Search</h1>
                <button onClick={onClickBookmark}>Bookmarks</button>
            </div>
            <div className="home_top_search">
                <input type="text" placeholder='Search free high resolution images' onChange={(e)=>{
                    setSearch(e.target.value)
                }}
                    value={search}
                />
                <button onClick={onClickSearch}>Search</button>
            </div>
        </div>
        <div className="home_bottom">
            {splash && splash.map((data)=>{
                return(
                    <Display key={data.id} {...data} {...data.urls} book={true}/>
                )
            })}
        </div>
    </div>
  )
}

export default Home