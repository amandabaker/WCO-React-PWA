import React from 'react';
import ProfileButton from './ProfileButton'
import './Titlebar.css';
import './base.css';

function Titlebar() {
  return (
    <div className="Titlebar">
      <div className="leftContainer draggable">
        <span className="draggable">Window Controls Overlay App</span>
        <input className="nonDraggable" type="text" placeholder="Search"></input>
        <ProfileButton></ProfileButton>
      </div>
    </div>
  );
}

export default Titlebar;
