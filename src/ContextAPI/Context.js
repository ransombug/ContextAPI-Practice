import {createContext} from 'react';

const moods = {
    moodone : 'Happy',
    moodtwo : 'Sad'
  };
  
  export const Module = createContext(moods);