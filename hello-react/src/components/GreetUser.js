import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';

const GreetUser = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("GreetUser component mounted");

        return () => {
            console.log('GreetUser component unmounted');
        }
    }, []); 

    const handleNameChange = (e) => {
        dispatch(updateUser(e.target.value));
    }

    return (
        <div>
            <p>Welcome, {user.name}!</p>
            <input 
                type='text'
                value={user.name}
                onChange={handleNameChange}
                placeholder='Enter your name'
            />
        </div>
    )
}

export default GreetUser;