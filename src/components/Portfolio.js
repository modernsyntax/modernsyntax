import React from "react";

// import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Style from '@material-ui/icons/Style';
import Paper from '@material-ui/core/Paper';


import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
        color: "#656565",
        marginTop: "50px;",
    },
    container: {
        marginTop: "50px;",
        color: "#656565"
    },
    cardContent: {
        height: "150px"
    },
    portImg: {
        maxWidth: "100%",
        maxHeight: "30px"
        // marginTop: "30px;"
    },
    button: {
        color: "#118DCD",
        fontWeight: "bold"
    },
    headline: {
        color: "#3B3B3B",
        fontWeight: "bold"
    },
    media: {
        height: "200px"
    },
    icon: {
        color: "#222"
    },
    label: {
        minHeight: "253px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        marginLeft: "-100px"
    },
    labelSmall: {
        minHeight: "253px",
        textAlign: "center",
        display: "flex",
        alignItems: "center"
    }
})

const Portfolio = (props) => {
    const { classes } = props;
    // const theme = useTheme();
    const sm = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Grid container alignItems="center" spacing={40} className={classes.root}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    {/* <Card className={classes.label}> */}
                    <Paper className={sm ? classes.label : classes.labelSmall}>
                        <Grid container alignItems="center" >
                        <Grid item xs={sm ? 4 : 0}>
                            &nbsp;
                        </Grid>
                            <Grid item xs={sm ? 8 : 12}>
                    {/* <CardContent> */}
                                <Style className={classes.icon} fontSize="large" />
                                <Typography variant="h5" align="center" className={classes.headline}>
                                    What We Do
                                </Typography>
                    {/* </CardContent> */}
                            </Grid>
                        </Grid>
                        </Paper>
                    {/* </Card> */}
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image="/images/brownsales.jpg"
                            title="Brown Sales"
                        />
                        <CardActions>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item xs={8}>
                                    <img alt="Brown Sales Inc" src="images/brown-sales-logo.png" className={classes.portImg} />
                                </Grid>
                                <Button href="https://brownsalesflooring.com" target="_blank" className={classes.button}>Visit</Button>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image="/images/gid-background.jpg"
                            title="Get It Done Management"
                        />
                        <CardActions>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item xs={8}>
                                    <img alt="Get It Done Management" src="images/gid.png" className={classes.portImg} />
                                </Grid>
                                <Button href="https://gidmanagement.netlify.com/" target="_blank" className={classes.button}>Visit</Button>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles)(Portfolio);