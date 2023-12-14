import React, { useState } from 'react';

const FooterQuicks = () => {
  const [isIconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked(!isIconClicked);
  }

  return (
    <div>
      <a href='#' onClick={handleIconClick}>
        {isIconClicked ? (
          <img src='src\assets\icons1.svg' alt='Icon 1' />
        ) : (
          <img src='src\assets\icons1.svg' alt='Icon 1' />
        )}
      </a>
      {isIconClicked && (
        <>
          <img src='src\assets\icons2.svg' alt='Icon 2' />
          <img src='src\assets\icons3.svg' alt='Icon 3' />
        </>
      )}
    </div>
  )
}

export default FooterQuicks;
