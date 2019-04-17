import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

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
        width: "100%",
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
    }
})

const Portfolio = (props) => {
    const { classes } = props;
    return (
        <>
            <Grid container spacing={8} className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center" className={classes.headline}>
                        Companies We Designed
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image="/images/brownsales.jpg"
                            title="Contemplative Reptile"
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
            </Grid>
        </>
    )
}

export default withStyles(styles)(Portfolio);