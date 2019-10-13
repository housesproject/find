import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRooms } from '../../redux/rooms/rooms.action';
import { RoomCard } from './room-card'

import './room-list.styles.scss';

const RoomList = (props) => {
    useEffect(()=> {
        props.fetchRooms();
    },[]);
    if(props.rooms.rooms) {
        if(props.category) {
            return props.rooms.rooms.filter((room) => props.category == room.area).filter((room, idx) => idx < 4).map(room => {
                return <RoomCard room={room} key={room._id}/>
                }
            )
        } else {
            if(props.areaCategoryName == 'all') {
                return props.rooms.rooms.map(room => {
                    return <RoomCard room={room} key={room._id} />
                    }
                )
            } else {
                return props.rooms.rooms.filter((room) => room.area.toLowerCase().includes(props.areaCategoryName)).map(room => {
                    return <RoomCard room={room} key={room._id} />
                    }
                )
            }
            
        }
    } else {
        return (
            <div className='col-12'>Loading</div>
        )
    }
}
const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
  }
  
export default connect(
    mapStateToProps,
    {
        fetchRooms
    }
)(RoomList);