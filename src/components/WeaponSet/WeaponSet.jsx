import React from 'react';
import Header from '../Header/Header.jsx';
import Box from '../Box/Box.jsx';

function WeaponSet(props) {
  return (
    <div className='weaponSet col-xs'>
      <Header title={props.title} />
      <Box />
    </div>
  )
}

export default WeaponSet;
