import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Slide from '@material-ui/core/Slide';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "50px"
  },
  grow: {
    flexGrow: 1,
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
  },
  nav: {
    backgroundColor: "#FFF",
    margin: "0px",
    flexGrow: 1
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" alignitems="center" className={classes.nav}>
        <Toolbar>
            <Hidden only={['sm', 'xs']}>
            <Slide in={true} direction="down" timeout={250}>
            <img alt="modernsyntax" src="/images/modernsyntax.png" className={classes.img} / >
            </Slide>
            </Hidden>
            <Hidden only={['lg', 'xl', "md"]}>
            <Slide in={true} direction="down">
            <img alt="modernsyntax" src="/images/logo.png" className={classes.logo} / >
            </Slide>
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