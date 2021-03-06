import React from 'react';
import {PageHeader} from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app-header'>
        <img className='logo' src='/logo.png' alt='TwitchLite logo' title='Twitchlite logo' />
      </div>
    );
  }
}

export default Header;
