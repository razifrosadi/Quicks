import React, { useState, useEffect } from 'react';
import InboxQuicks from './InboxQuicks';
import SidebarQuicks from './SidebarQuicks';
import ChatRoom from './ChatRoom'; // Import komponen ChatRoom
import { inbox } from '../utils';

const Quicks = () => {
  const [isIconClicked, setIconClicked] = useState(false);
  const [isIcon2Clicked, setIcon2Clicked] = useState(false);
  const [isIcon4Clicked, setIcon4Clicked] = useState(false);
  const [isIcon1Hidden, setIcon1Hidden] = useState(false);
  const [isBoxVisible, setBoxVisible] = useState(false);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null); // State untuk menyimpan ID chat room yang dipilih

  const handleIconClick = () => {
    setIconClicked(!isIconClicked);
    setIcon2Clicked(false);
    setIcon4Clicked(false);
    setSelectedRoom(null); // Reset chat room saat ikon lainnya diklik
  };

  const handleIcon2Click = () => {
    setIcon2Clicked(true);
    setIconClicked(false);
    setIcon1Hidden(true);
    setBoxVisible(true);
  };

  const handleIcon4Click = () => {
    setIcon4Clicked(true);
    setIcon2Clicked(false);
    setIconClicked(false);
    setIcon1Hidden(false);
    setSelectedRoom(null); // Reset chat room saat ikon lainnya diklik
  };

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
  };

  useEffect(() => {
    const fetchData = () => {
      // Simulasi pengambilan data
      setTimeout(() => {
        // Setelah data selesai dimuat, atur isDataLoaded menjadi true
        setDataLoaded(true);
      }, 2000);
    };

    // Panggil fetchData saat icon2 diklik
    if (isIcon2Clicked) {
      fetchData();
    }
  }, [isIcon2Clicked]);

  return (
    <div className='flex-container'>
      <SidebarQuicks />
      <div className='search'>
        <input />
        <div className='icons-container'>
          <a href='#' onClick={handleIconClick} className='icon1' style={{ display: isIcon1Hidden ? 'none' : 'block' }}>
            {isIconClicked ? (
              <img src='src\assets\icons1.png' alt='Icon 1' className='icon1' />
            ) : (
              <img src='src\assets\icons1.png' alt='Icon 1' className='icon1' />
            )}
          </a>
          {isIconClicked && (
            <>
              <div className='icon2'>
                <h4>Inbox</h4>
                <a href='#' onClick={handleIcon2Click}>
                  <img src='src\assets\icons2.png' alt='Icon 2' />
                </a>
              </div>
              <div className='icon3'>
                <h4>Task</h4>
                <a href='#' onClick={handleIconClick}>
                  <img src='src\assets\icons3.png' alt='Icon 3' />
                </a>
              </div>
            </>
          )}
          {isIcon2Clicked && (
            <>
              <div className='icon4'>
                <h4></h4>
                <a href='#' onClick={handleIcon4Click}>
                  <img src='src\assets\icons4.png' alt='Icon 4' />
                </a>
              </div>
              <div className='icon3-clone'>
                <a href='#' onClick={handleIcon4Click}>
                  <img src='src\assets\icons3.png' alt='Icon 3' />
                </a>
              </div>
            </>
          )}

          {isIcon2Clicked && isBoxVisible && !selectedRoom && (
            <div className='white-box'>
              <div className='search-container'>
                <input placeholder='Search'></input>
              </div>
              {isDataLoaded ? (
                <InboxQuicks onRoomClick={handleRoomClick} /> // Tambahkan prop untuk meng-handle klik room
              ) : (
                <div className='loading'>Loading Chats ...</div>
              )}
            </div>
          )}

            {isIcon2Clicked && isBoxVisible && selectedRoom && (
              <ChatRoom selectedRoom={selectedRoom} onClose={() => setSelectedRoom(null)} inboxData={inbox} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Quicks;
