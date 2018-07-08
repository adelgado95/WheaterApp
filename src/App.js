import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {Grid,Row,Col} from 'react-flexbox-grid'; 
import './App.css';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocationsList from './components/LocationsList';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const cities = [
  'Buenos Aires',
  'Washington',
  'Managua',
  'Madrid',
  'Santiago',
  'Lima',
  'León,ni'
];

class App extends Component {
  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Grid fluid>
        <Row xs={12}>
            <AppBar position='static' color="primary" styles={styles}>
              <Toolbar>
                <Typography variant="title" color="inherit">
                    Title
                </Typography>
              </Toolbar>
            </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <LocationsList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}></LocationsList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={23}>
              <div className='detail'>
              </div>
            </Paper>
          </Col>         
        </Row>
      </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
