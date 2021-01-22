import React, { useContext } from 'react'
import './App.css';
import AppOne from './Components/AppOne';
import AppTwo from './Components/AppTwo';

import {MyContextProvider} from './ContextAPI/Context'

const App = () => {
  
    return(
    <MyContextProvider>
        <AppOne />
        <AppTwo />
    </MyContextProvider>
  )
}

export default App;
