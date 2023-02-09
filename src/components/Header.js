import React from 'react';

function Header({isDarkMode, onClickDarkMode}) {
    return (
        <header>
            <h1>To Doer</h1>
            <button onClick={onClickDarkMode}>
                {isDarkMode ? 'Dark' : 'Light' } Mode
            </button>
        </header>
    );
}

export default Header;