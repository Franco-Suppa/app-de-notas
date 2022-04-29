import React from 'react'
import { MdDarkMode } from 'react-icons/md'


function Header( {handleToggleDarkMode} ) {
  return (
    <div className="header">
      <h1>Notas</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Cambiar modo <MdDarkMode />
      </button>
    </div>
  );
}

export default Header