import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const styles = theme => ({
    root: {
        flexGrow: 1,
        color: "#656565"
    },
    mont: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: "25px",
        // marginLeft: "20px",
        padding: "20px",
        color: "#3B3B3B"
    },
    fab: {
        backgroundColor: "#118DCD",
        color: "#FFF"
    },
    price: {
        color: "#118DCD",
        fontFamily: "montserrat",
        fontWeight: "bold",
        fontSize: "25px"
    },
    cardContent: {
        height: "300px"
    }
})

const PriceCard = (props) => {
    const { classes } = props;
    return (
        <>
        <Grid container spacing={40} className={classes.container}>
        <Grid item xs>
        <Card>
            <CardHeader title="Starter" />
            <Divider />
            <CardContent className={classes.cardContent}>
            <List>
                        <ListItem>
                            Professional Responsive Site
                        </ListItem>
                        <ListItem>
                            Home page & $100/page
                        </ListItem>
                        <ListItem>
                            HTML5, CSS3
                        </ListItem>
                        <ListItem>
                            Free Hosting
                        </ListItem>
                    </List>
            </CardContent>
            <CardActions>
                <Grid container justify="space-between">
                <Grid item >
            <Typography className={classes.price}>
                $500
            </Typography>
                </Grid>
                <Grid item >
            <button className="main-button">Start</button>
                </Grid>
                </Grid>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs>
        <Card>
            <CardHeader title="Business" />
            <Divider />
            <CardContent className={classes.cardContent}>
            <List>
                        <ListItem>
                            Professional Responsive Site
                        </ListItem>
                        <ListItem>
                            10 Pages, Including Home Page
                        </ListItem>
                        <ListItem>
                            HTML5, CSS3 / WordPress / Etc.
                        </ListItem>
                        <ListItem>
                            Limited Site Support
                        </ListItem>
                    </List>
            </CardContent>
            <CardActions>
                <Grid container justify="space-between">
                <Grid item >
            <Typography className={classes.price}>
                $1000
            </Typography>
                </Grid>
                <Grid item >
            <button className="main-button">Start</button>
                </Grid>
                </Grid>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs>
        <Card>
            <CardHeader title="Business+" />
            <Divider />
            <CardContent className={classes.cardContent}>
            <List>
                        <ListItem>
                            Professional Responsive Site
                        </ListItem>
                        <ListItem>
                            Fully Custom Site With Servers
                        </ListItem>
                        <ListItem>
                            Choice Of Front End Framework
                        </ListItem>
                        <ListItem>
                            Choice Of Back End Framework
                        </ListItem>
                        <ListItem>
                            Choice Of Database
                        </ListItem>
                        <ListItem>
                            Continued Site Support
                        </ListItem>
                    </List>
            </CardContent>
            <CardActions>
                <Grid container justify="space-between">
                <Grid item >
            <Typography className={classes.price}>
                
            </Typography>
                </Grid>
                <Grid item >
            <button className="main-button">Start</button>
                </Grid>
                </Grid>
            </CardActions>
        </Card>
        </Grid>

            {/* <Grid item xs>
                <Paper>
                    <Typography className={classes.mont}>
                    Starter
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem>
                            Professional Responsive Site
                        </ListItem>
                        <ListItem>
                            Home page & $100/page
                        </ListItem>
                        <ListItem>
                            HTML5, CSS3
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper>
                    something 
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper>
                    something 
                </Paper>
            </Grid> */}
        </Grid>
        </>
    )
}

export default withStyles(styles)(PriceCard);