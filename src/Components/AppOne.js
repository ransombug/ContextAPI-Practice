import React, { useContext } from 'react'

import { MyContext } from '../ContextAPI/Context'

const AppOne = () => {
    const mood = useContext(MyContext);
    return (
        <div>
            <h2>My name is : {mood.first}</h2>
            <button onClick={() => mood.updateFirst("Shaktiman")} >Click the button to reveal</button>
        </div>
    )
}

export default AppOne;
