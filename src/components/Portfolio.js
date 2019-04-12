import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
        color: "#656565"
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
        marginTop: "30px;"
    },
    button: {
        color: "#118DCD",
        fontWeight: "bold"
    }
})

const Portfolio = (props) => {
    const { classes } = props;
    return (
        <>
            <Grid container spacing={40} className={classes.container}>
                <Grid item xs={12}>
                    <Typography variant="headline" align="center">
                        Companies We Designed
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                    <CardHeader title="Brown Sales Inc" />
                        <CardContent className={classes.cardContent}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="paragraph">
                                    We created a stunning site for this Arizona local business. They deal in
                                    multi-family flooring
                                    installations.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="space-between" alignItems="flex-end">
                                <Grid item xs={6}>
                                    <img alt="Brown Sales Inc" src="images/brown-sales-logo.png" className={classes.portImg}/>
                                </Grid>
                                <Grid item >
                                    <Button href="https://brownsalesflooring.com" target="_blank" className={classes.button}>Visit</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles)(Portfolio);