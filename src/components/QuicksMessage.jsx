import React, { useState } from 'react';
import SidebarQuicks from './SidebarQuicks';

const QuicksMessage = () => {
  const [isIconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked(!isIconClicked);
  };

  return (
    <div className='flex-container'>
      <SidebarQuicks />
        <div className='search'>
            <input></input>
            <div className='icons-container'>
            <a href='#' onClick={handleIconClick} className='icon1'>
            {isIconClicked ? (
                <img src='src\assets\icons4.svg' alt='Icon 1' className='icon1' />
            ) : (
                <img src='src\assets\icons1.svg' alt='Icon 1' className='icon1'/>
            )}
            </a>
            {isIconClicked && (
            <>
            <div className='icon2'>
                <h4>Inbox</h4>
                <a href='#' onClick={handleIconClick}>
                <img src='src\assets\icons2.svg' alt='Icon 2' />
                </a>
            </div>
            <div className='icon3'>
                <h4>Task</h4>
                <a href='#' onClick={handleIconClick}>
                <img src='src\assets\icons3.svg' alt='Icon 3' />
                </a>
            </div>
            </>
            )}
            </div>
        </div>
    </div>
  );
};

export default QuicksMessage;