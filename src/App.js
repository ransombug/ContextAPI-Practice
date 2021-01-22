import './App.css';
import AppOne from './Components/AppOne';
import AppTwo from './Components/AppTwo';

import {Module} from './ContextAPI/Context'

const App = ({moods}) => {
    return(
    <Module.Provider value={moods}>
        <AppOne />
        <AppTwo />
    </Module.Provider>
  )
}

export default App;
