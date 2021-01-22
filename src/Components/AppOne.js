import React, {useContext} from 'react'

import {Module} from '../ContextAPI/Context'

const AppOne = () => {
    const mood = useContext(Module);
    return (
        <div>
             <h2>{mood.moodone}</h2>
        </div>
    )
}

export default AppOne;
