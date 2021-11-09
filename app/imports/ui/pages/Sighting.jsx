import React from 'react';
import { Button, Grid, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Sighting extends React.Component {
  render() {
    return (
      <Menu className='sighting'>
        <div className='ui grid' container>
          <div className='two wide row'>
            <Button className='big button' ><Link to="/sealsighting">Seal</Link></Button>
          </div>
          <div className='two wide row'>
            <Button className='big button' ><Link to="/turtlesighting">Turtle</Link></Button>
          </div>
          <div className='two wide row'>
            <Button className='big button' ><Link to="/birdsighting">Bird</Link></Button>
          </div>
          <div className='two wide row'>
            <Button className='big button'><Link to="/other">Other</Link></Button>
          </div>
        </div>
      </Menu>
    );
  }
}
