import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Display from '../Display/Display'
import './bookmark.css'

const Bookmark = () => {
    const {bookmark} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHome = ()=>{
        navigate('/')
    }
  return (
    <div className="bookmark">
        <div className="bookmark_top">
            <button onClick={onClickHome}>Home</button>
        </div>
        <h1>Bookmark's</h1>
        <div className="bookmark_display">
            {
                bookmark && bookmark.map((data)=>{
                    return(
                        <Display key={data.id} {...data} book={false}/>
                    )
                })
            }
            
        </div>
        {!bookmark.length && <div className='error'>Nothing Bookmarked</div>}
    </div>
  )
}

export default Bookmark