import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import "react-datepicker/dist/react-datepicker.css";

import './post.styles.scss';

const Post= ({onCancel}) => {
    const [postInfo, setPostInfo] = useState({
        roomName:'',
        address:'',
        city:'',
        postal:'',
        describe: '',
        amount: '',
        available: new Date(),
        roomSize: '',
        roomType: 'privateRoom',
        bath: 'share',
        availableSmoke: true,
        landry: '',
        parking: true
    });

    const postHandleSubmit = event => {
        event.preventDefault();
        console.log(postInfo);
    };
    
    const handleChange = event => {
        let { value, name } = event.target;
        console.log(event.target);
        if(value === 'true') {
            value = true;
        } else if(value === 'false') {
            value = false;
        }
        setPostInfo({...postInfo, [name]: value });
    };

    return (
        <div id="myModal" className="modal-form post-form">
            <div className="modal-content">
                <span className="close mb-5" onClick={onCancel}>&times;</span>
                <form onSubmit={postHandleSubmit}>
                    <ul className='mb-5 row'>
                        <li className='col-md-4'>
                            <label htmlFor="roomName">Room Name</label>
                            <FormInput
                                id='roomName'
                                name='roomName'
                                type='text'
                                handleChange={handleChange}
                                value={postInfo.roomName}
                                placeholder='Room name'
                                required
                            />
                        </li>
                        <li className='col-md-4'>
                            <label htmlFor="address">Address</label>
                            <FormInput
                                id='address'
                                name='address'
                                type='text'
                                handleChange={handleChange}
                                value={postInfo.address}
                                placeholder='Address'
                                required 
                            />
                        </li>
                        <li className='col-md-2'>
                            <label htmlFor="city">City</label>
                            <FormInput
                                id='city'
                                name='city'
                                type='text'
                                handleChange={handleChange}
                                value={postInfo.city}
                                placeholder='City'
                                required 
                            />
                        </li>
                        <li className='col-md-2'>
                            <label htmlFor="postal">Postal</label>
                            <FormInput
                                id='postal'
                                name='postal'
                                type='text'
                                handleChange={handleChange}
                                value={postInfo.postal}
                                placeholder='Postal'
                                required 
                            />
                        </li>
                    </ul>   
                    <div className='description-area'>
                        <label htmlFor="describe">Describe</label>
                        <textarea 
                            id='describe'
                            className='col-12 form-control' 
                            name='describe'
                            value={postInfo.describe}
                            onChange={handleChange}
                        />
                    </div> 
                    <ul className='row mt-5'>
                        <li className='col-md-3'>
                            <ul className='input-list'>
                                <li>
                                    <label htmlFor="amount">Amount</label>
                                    <FormInput
                                    id='amount'
                                    name='amount'
                                    type='text'
                                    handleChange={handleChange}
                                    value={postInfo.amount}
                                    placeholder='amount'
                                    required 
                                />
                                </li>
                                <li>
                                    <label htmlFor="roomSize">Room Size</label>
                                    <FormInput
                                        id='roomSize'
                                        name='roomSize'
                                        type='text'
                                        handleChange={handleChange}
                                        value={postInfo.roomSize}
                                        placeholder='Room Size'
                                        required 
                                    />
                                </li>
                                <li>
                                      <label htmlFor="available-date">Available Date</label>  
                                      <DatePicker
                                        id='available-date'
                                        name='available'
                                        selected={postInfo.available}
                                        onChange={date => setPostInfo({available: date})}
                                        required 
                                    />
                                </li>
                            </ul>
                        </li>
                        <li className='col-md-2'>
                            <ul className='input-list'>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'>Room type*</li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="roomType" id="privateRoom" value='privateRoom' checked={postInfo.roomType === 'privateRoom'} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="privateRoom">
                                                Private room
                                            </label>
                                        </li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="roomType" id="shareRoom" value='shareRoom' checked={postInfo.roomType === 'shareRoom'} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="shareRoom">
                                                Share room
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'>Bath*</li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="bath" id="share" value='share' checked={postInfo.bath === 'share'} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="share">
                                                Share
                                            </label>
                                        </li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="bath" id="private" value='private' checked={postInfo.bath === 'private'} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="private">
                                                Private
                                            </label>
                                        </li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="bath" id="others" value='others' checked={postInfo.bath === 'others'} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="others">
                                                Others
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'>Smoke</li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="availableSmoke" id="smoke" value='true' checked={postInfo.availableSmoke === true} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="smoke">
                                                Yes
                                            </label>
                                        </li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="availableSmoke" id="no-smoke" value='false' checked={postInfo.availableSmoke === false} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="no-smoke">
                                                No
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='col-md-2'>
                            <ul className='input-list'>
                                <li>
                                    <label htmlFor="landry">Landry*</label>
                                    <FormInput
                                        name='landry'
                                        type='text'
                                        handleChange={handleChange}
                                        value={postInfo.landry}
                                        placeholder='Landry'
                                        required 
                                    />
                                </li>
                                <li className='form-check'>
                                    <ul>
                                        <li className='radio-title'>Parking*</li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="parking" id="parking" value='true' checked={postInfo.parking === true} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="parking">
                                                Yes
                                            </label>
                                        </li>
                                        <li>
                                            <input className="form-check-input" type="radio" name="parking" id="no-parking" value='false' checked={postInfo.parking === false} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="no-parking">
                                                No
                                            </label>
                                        </li>
                                    </ul>
                                </li>   
                            </ul>
                        </li>
                        <li className='col-md-5'>
                            Option
                        </li>
                    </ul>
                    <CustomButton type="submit">Post</CustomButton> 
                </form>
            </div>
        </div>
    );
};

export default Post;