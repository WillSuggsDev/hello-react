import React, { useState } from 'react';
import GreetUser from './GreetUser';

const HelloWorld = () => {
    const [showGreet, setShowGreet] = useState(true);

    const toogleGreet = () => {
        setShowGreet(!showGreet)
    };

    return (
        <div>
            <h1>Hello, React!</h1>
            <button onClick={toogleGreet}>
                {showGreet ? 'Hide GreetUser' : 'Show GreetUser'}
            </button>
            {showGreet && <GreetUser />}
        </div>
    )
}

export default HelloWorld;