// InboxQuicks.jsx
import React from 'react';
import { inbox } from '../utils';

const InboxQuicks = ({ onRoomClick }) => {
  return (
    <>
      {inbox.map((message) => (
        <div className='inbox-container' key={message.id}>
          <div className='icon-profile'>
            <img src={message.img1} className='icon-profile1' alt='Profile 1' />
            <img src={message.img2} className='icon-profile2' alt='Profile 2' />
          </div>
          <div className='inbox-content'>
            <div className='name-date-container'>
              <a href='#' className='inbox-link' onClick={() => onRoomClick(message.id)}>
                <h5>{message.name}</h5>
              </a>
              <p className='sender'>{message.paraghrap1}</p>
              <p className='message'>{message.paraghrap2}</p>
            </div>
            <h6>{message.date}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default InboxQuicks;
