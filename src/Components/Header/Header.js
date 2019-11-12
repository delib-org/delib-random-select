import React from 'react';
import './Header.css';

function Header(props) {
  return (
   <div className='header'>
       <div className='header_title'>{props.title}</div>
        {props.src?
            <img src={props.src} />
            :
            <div />
        }
   </div>
  );
}

export default Header;