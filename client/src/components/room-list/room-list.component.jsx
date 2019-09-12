import React from 'react';
import { Link } from 'react-router-dom'; 

const RoomList = () => (
    <>
    <section className='mt-5 container'>
        <h2 className='mb-3'>Downtown</h2>
        <ul className='row mb-5'>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
                <p>$700</p>
                </Link>
            </li>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
                <p>$700</p>
                </Link>
            </li>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
                <p>$700</p>
                </Link>
            </li>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
           
           </Link>     <p>$700</p>
            </li>
        </ul>
        <button className='btn btn-danger'>View</button>
    </section>
    <section className='mt-5 container'>
    <h2 className='mb-3'>Downtown</h2>
    <ul className='row mb-5'>
        <li className='col-md-3'>
            <Link to=''>
            <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
            <p className='mt-2'>Private room Davy street</p>
            <h3 className='mt-2 mb-2'>Title</h3>
            <p>$700</p>
            </Link>
        </li>
        <li className='col-md-3'>
            <Link to=''>
            <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
            <p className='mt-2'>Private room Davy street</p>
            <h3 className='mt-2 mb-2'>Title</h3>
            <p>$700</p>
            </Link>
        </li>
        <li className='col-md-3'>
            <Link to=''>
            <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
            <p className='mt-2'>Private room Davy street</p>
            <h3 className='mt-2 mb-2'>Title</h3>
            <p>$700</p>
            </Link>
        </li>
        <li className='col-md-3'>
            <Link to=''>
            <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
            <p className='mt-2'>Private room Davy street</p>
            <h3 className='mt-2 mb-2'>Title</h3>
       
       </Link>     <p>$700</p>
        </li>
    </ul>
    <button className='btn btn-danger'>View</button>
</section>
<section className='mt-5 container'>
        <h2 className='mb-3'>Downtown</h2>
        <ul className='row mb-5'>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
                <p>$700</p>
                </Link>
            </li>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
                <p>$700</p>
                </Link>
            </li>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
                <p>$700</p>
                </Link>
            </li>
            <li className='col-md-3'>
                <Link to=''>
                <img src={`${process.env.PUBLIC_URL}/images/room-list-01.jpg`} alt=""/>
                <p className='mt-2'>Private room Davy street</p>
                <h3 className='mt-2 mb-2'>Title</h3>
           
           </Link>     <p>$700</p>
            </li>
        </ul>
        <button className='btn btn-danger'>View</button>
    </section>
    </>
)

export default RoomList;