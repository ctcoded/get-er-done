import React, {useState} from 'react';
import Header from './Header.js'
import List from './List.js'
import ListContainer from './ListContainer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div>
        <Header isDarkMode={isDarkMode} onClickDarkMode={handleDarkModeClick} />
        <List />
        <ListContainer />
    </div>
  
  );
}

export default App;
