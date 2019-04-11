import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
    root: {
        flexGrow: 1,
        color: "#656565"
    },
    container: {
        marginTop: "50px;"
    },
    cardContent: {
        height: "150px"
    },
    avatar: {
        margin: "10px",
        width: "100px",
        height: "100px"
    },
    paper: {
        padding: "10px",
        minHeight: "200px"
    }
})

const Team = (props) => {
    const { classes } = props;
    return (
        <>
            <Grid container spacing={40} className={classes.container}>
            <Grid item xs={12}>
                    <Typography variant="headline" align="center">
                        Our Team
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={16} align="center">
                            <Grid item xs={12} md={4}>
                                <Avatar alt="Andrew Vasquez" src="/images/andrew.jpg" className={classes.avatar} />
                                <Typography variant="title">Andrew Vasquez</Typography>
                                <Typography variant="subtitle">Director of Web Services</Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="paragraph" align="left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={16} align="center">
                            <Grid item xs={12} md={4}>
                                <Avatar alt="Andrew Vasquez" src="/images/brion.jpg" className={classes.avatar} />
                                <Typography variant="title">Brion Lund</Typography>
                                <Typography variant="subtitle">Director of Design</Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="paragraph" align="left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles)(Team);