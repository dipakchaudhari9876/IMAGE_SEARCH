import React, { useContext } from 'react'
import './display.css'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { AppContext } from '../../App';

const Display = ({ small, id, alt_description,book}) => {
    const {dispatch} = useContext(AppContext)

    const onClickIcon =(url,id)=>{
        dispatch({
            type:'Add',
            task:{id,small:url}
        })
    }
    return (
        <div className="display">
            <img src={small} alt={alt_description} />
            {book && <div className="display_icon">
                <div className="icon" onClick={()=>{onClickIcon(small,id)}}>
                    <BookmarkAddIcon style={{ fontSize: "35px", color: "gray" }}></BookmarkAddIcon>

                </div>
            </div>}
        </div>
    )
}

export default Display