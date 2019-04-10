import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "50px"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  img: {
    maxWidth: "200px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logo: {
    maxWidth: "70px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="#FFF" alignitems="center">
        <Toolbar justifyItems="center">
            {/* <img src="/images/modernsyntax.png" className={classes.img} / > */}
            <Hidden only={['sm', 'xs']}>
            <img src="/images/modernsyntax.png" className={classes.img} / >
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
            <img src="/images/logo.png" className={classes.logo} / >
            </Hidden>
            <Hidden only={['sm', 'xs']}>
            <button className="main-button">Get Started</button>
            </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);