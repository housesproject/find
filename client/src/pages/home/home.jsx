import React from 'react';
import { Field, reduxForm } from 'redux-form'

import RoomList from '../../components/room-list/room-list.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './home.styles.scss';

const Home = props => {
    const { handleSubmit } = props;
    return (
        <>
        <div className='main-visual'>
            <div className='container'>
                <div className='contact-form'>
                <h2 className='mb-3'>Find Rooms</h2>
                <form onSubmit={handleSubmit}>
                    <ul className='mb-5'>
                        <li>
                            <Field name='rooms' component='input' type='radio' value='homestay' />{' '}
                            <label className='form-check-label'>
                                    Shear House
                            </label>
                            <Field className='ml-3' name='rooms' component='input' type='radio' value='homestay' />{' '}
                            <label>
                                Home Stay
                            </label>
                        </li>
                        <li className='form-group mt-3'>
                        <Field
                                name='vancouver'
                                component='input'
                                type='text'
                                placeholder='Vancouver...'
                                className='form-control serach-input'
                            />
                        </li>
                    </ul>
                    <CustomButton type='submit' className='btn btn-danger'>Serach</CustomButton>
                </form>
                </div>
            </div>
        </div>
        <RoomList />
        </>
    );
}

export default reduxForm({
    form: 'serchForm'
  })(Home);