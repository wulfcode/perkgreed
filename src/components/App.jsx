import React from 'react';
import Navigation from './Navigation/Navigation.jsx';
import WeaponRow from './WeaponRow/WeaponRow.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className='perkgreed'>
        <Navigation />
        <WeaponRow />
      </div>
    )
  }
}
