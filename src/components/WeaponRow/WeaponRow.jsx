import React from 'react';
import WeaponSet from '../WeaponSet/WeaponSet.jsx';

function WeaponRow(props) {
  return (
    <div className='weaponRow'>
      <div className='row'>
        <WeaponSet  title='Primary'/>
        <WeaponSet  title='Secondary'/>
        <WeaponSet  title='Equipment'/>
      </div>
    </div>
  )
}

export default WeaponRow;
