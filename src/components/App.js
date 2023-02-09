import React, {useState} from 'react';
import Header from './Header.js'
import List from './List.js'
import ListCardContainer from './ListCardCardContainer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div>
        <Header isDarkMode={isDarkMode} onClickDarkMode={handleDarkModeClick} />
        <List />
        <ListCardContainer />
    </div>
  
  );
}

export default App;
