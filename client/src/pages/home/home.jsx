import React, { useState, useEffect }  from 'react';
import { Field, reduxForm } from 'redux-form'
import { Route, withRouter } from 'react-router-dom';
import AreaCategoryList from '../../components/AreaCategoryList/AreaCategoryList'

import RoomList from '../../components/room-list/room-list.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './home.styles.scss';



const Home = props => {
    const [areaCategoryName, setAreaCategoryName] = useState('downtown')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(areaCategoryName)
        props.history.push(`/${areaCategoryName}`);
    }

    return (
        <>
        <div className='main-visual'>
            <div className='container'>
                <div className='contact-form'>
                <h2 className='mb-3'>Find Rooms</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Select Area</label>
                        <select 
                            name="select-area" 
                            className="form-control" 
                            id="exampleFormControlSelect1"
                            value={areaCategoryName} 
                            onChange={e => setAreaCategoryName(e.target.value) }
                           >
                            <option value="downtown">DOWNTOWN</option>
                            <option value="robson">ROBSON</option>
                            <option value="westend">WESTEND</option>
                        </select>
                    </div>
                    {/* <ul className='mb-5'>
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
                    </ul> */}
                    <CustomButton type='submit' className='btn btn-danger'>Serach</CustomButton>
                </form>
                </div>
            </div>
        </div>
        <Route exact path='/' component={RoomList} />
        <Route exact path={`/${areaCategoryName}`} component={AreaCategoryList} />
        </>
    );
}

// export default reduxForm({
//     form: 'serchForm'
//   })(Home);

export default Home;