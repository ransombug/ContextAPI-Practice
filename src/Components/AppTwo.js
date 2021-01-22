import React, {useContext} from 'react'

import {Module} from '../ContextAPI/Context'

const AppTwo = () => {
    const mood = useContext(Module);
    return (
        <div>
             <h2>{mood}</h2>
        </div>
    )
}

export default AppTwo;
