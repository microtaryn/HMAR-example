import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Distress extends React.Component {
  render() {
    return (
      <Grid verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Header as="h1" color='white'>PLEASE CALL HMAR AT (888) 256-9840</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Distress;
