import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

import './room-card.scss';


export const RoomCard = ({ room }) => {
  const [ likeChecked, setlikeChecked ] = useState(false);
  const title = room.title;
  const sliceTitle = title.length > 30 ? title.slice(0, 30) + '…' : title;

  const likedClicked = () => {
    setlikeChecked(!likeChecked)
  }
  
  return (
    <li className='col-md-3' style={{ position: "relative" }}>
        <Link to={`room-detail/${room._id}`}>
            <div className='thumb-nail' style={{backgroundImage: `url(${room.imgUrl.img1 ? room.imgUrl.img1: process.env.PUBLIC_URL + '/images/default-img.png'})`}}></div>
            <p>{room.roomSize}</p>
            <h3>{sliceTitle}</h3>
            <p>${room.price}</p>
        </Link>
        <button className={"likebutton" + (likeChecked ? ' clicked': '')}
          onClick={likedClicked}>
          {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
        </button>
    </li>
  )
}

