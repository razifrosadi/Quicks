// ChatRoom.jsx
import React from 'react';

const ChatRoom = ({ selectedRoom, onClose, inboxData }) => {
  // Temukan data berdasarkan ID yang dipilih
  const selectedRoomData = inboxData.find((room) => room.id === selectedRoom);

  return (
    <div className='white-box'>
      {selectedRoomData && (
        <>
          <div className='header-chatroom'>
            <div className='arrow-icon'>
                <a href='#' onClick={onClose}>
                    <img src="./public/images/arrow_back_24px.svg" alt="arrow" />
                </a>
          </div>
            <h2>{selectedRoomData.name}</h2>
            <p>3 Participants</p>
          </div>
          <div className='input-bottom'>
                <input placeholder='Type a new message'></input>
                <button type='submit'>Send</button>
            </div>
        </>
      )}
    </div>
  );
};

export default ChatRoom;
