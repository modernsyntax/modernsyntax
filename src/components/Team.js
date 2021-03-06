import React from "react";

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Email from '@material-ui/icons/EmailOutlined';
import People from '@material-ui/icons/People';



const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: "50px;",
        color: "#656565"
    },
    container: {
        color: "#656565"
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
    },
    headline: {
        color: "#3B3B3B",
        fontWeight: "bold"
    },
    price: {
        color: "#118DCD",
        fontFamily: "montserrat",
        fontWeight: "bold",
        fontSize: "16px"
    },
    email: {
        textAlign: "right"
    },
    button: {
        fontWeight: "bold"
    },
    icon: {
        color: "#222"
    },
    label: {
        minHeight: "236px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        marginLeft: "-100px"
    },
    labelSmall: {
        minHeight: "225px",
        textAlign: "center",
        display: "flex",
        alignItems: "center"
    }
    
})

const Team = (props) => {
    const { classes } = props;
    const sm = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Grid container spacing={40} className={classes.root}>
                {/* <Grid item xs={12}>
                    <Typography variant="h5" align="center" className={classes.headline}>
                        Our Team
                    </Typography>
                    <People fontSize="large" className={classes.icon}/>
                </Grid> */}
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    {/* <Card className={classes.label}> */}
                    <Paper className={sm ? classes.label : classes.labelSmall}>
                        <Grid container alignItems="center" >
                        <Grid item xs={sm ? 4 : 0}>
                            &nbsp;
                        </Grid>
                            <Grid item xs={sm ? 8 : 12}>
                    {/* <CardContent> */}
                    <People fontSize="large" className={classes.icon}/>
                                <Typography variant="h5" align="center" className={classes.headline}>
                                    Our Team
                                </Typography>
                    {/* </CardContent> */}
                            </Grid>
                        </Grid>
                        </Paper>
                    {/* </Card> */}
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} align="center">
                    <Paper className={classes.paper}>
                        <Avatar alt="Andrew Vasquez" src="/images/andrew.jpg" className={classes.avatar} />
                        <Typography variant="h6">Andrew Vasquez</Typography>
                        <Typography variant="subtitle1">Web Director</Typography>
                        <Grid container justify="center" alignitems="flex-end">
                            <Grid item xs>
                                <Button href="https://www.fullstackandrew.com" color="primary" className={classes.button}>Portfolio</Button>
                            </Grid>
                            <Grid item xs>
                            <Button href="mailto:andrew@modernsyntax.io" color="primary" className={classes.email}><Email /></Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={2} align="center">
                    <Paper className={classes.paper}>
                        <Avatar alt="Andrew Vasquez" src="/images/brion.jpg" className={classes.avatar} />
                        <Typography variant="h6">Brion Lund</Typography>
                        <Typography variant="subtitle1">Design Director</Typography>
                        <Grid container justify="center" alignitems="flex-end">
                            <Grid item xs>
                                <Button color="primary" className={classes.button}>Portfolio</Button>
                            </Grid>
                            <Grid item xs>
                            <Button href="mailto:brion@modernsyntax.io" color="primary" className={classes.email}><Email /></Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles)(Team);