import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    // marginLeft: -12,
    // marginRight: 20,
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
    // width: "100%"
  }
};

function Nav(props) {
  const { classes } = props;
  // const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static" alignitems="center" className={classes.nav}>
        <Toolbar>
            {/* <img src="/images/modernsyntax.png" className={classes.img} / > */}
            <Hidden only={['sm', 'xs']}>
            <img alt="modernsyntax" src="/images/modernsyntax.png" className={classes.img} / >
            </Hidden>
            <Hidden only={['lg', 'xl', "md"]}>
            <img alt="modernsyntax" src="/images/logo.png" className={classes.logo} / >
            </Hidden>
            {/* <Hidden only={['sm', 'xs']}>
            <button className="main-button" onClick={() => setOpen(true)}>Get Started</button>
            </Hidden> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);