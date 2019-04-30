import React, { useState, useContext } from "react";

import Modal from './Modal';
import { ModalContext } from '../globalState';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
    root: {
        flexGrow: 1,
        color: "#656565"
    },
    container: {
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
        fontSize: "16px"
    },
    cardContent: {
        height: "300px"
    }
})

const PriceCard = (props) => {
    const { classes } = props;
    const {  setOpen, setChoice
    } = useContext(ModalContext);


    return (
        <>
            <Grid container spacing={40} className={classes.root}>
                <Grid item xs={12} sm={6} lg={4}>
                <Zoom in={true}>
                    <Card>
                        <CardHeader title="Small Business" />
                        <Divider />
                        <CardContent className={classes.cardContent}>
                            <List>
                                <ListItem>
                                    Graphic and Logo Design
                                </ListItem>
                                <ListItem>
                                    Static Web Pages
                                </ListItem>
                                <ListItem>
                                    SEO
                            </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item >
                                    <Typography>
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <button className="main-button" onClick={() => { setOpen(true); setChoice("Small Business") }}>Start</button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                    </Zoom>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                <Zoom in={true} style={{ transitionDelay: '250ms' }}>
                    <Card>
                        <CardHeader title="Creative Professional" />
                        <Divider />
                        <CardContent className={classes.cardContent}>
                            <List>
                                <ListItem>
                                    Graphic and Logo Design
                                </ListItem>
                                <ListItem>
                                    Static Web Pages
                                </ListItem>
                                <ListItem>
                                    SEO
                                </ListItem>
                                <ListItem>
                                    Content Management System
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item >
                                    <Typography className={classes.price}>
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <button className="main-button" onClick={() => { setOpen(true); setChoice("Creative Professional") }}>Start</button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                    </Zoom>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                    <Card>
                        <CardHeader title="Enterprise" />
                        <Divider />
                        <CardContent className={classes.cardContent}>
                            <List>
                                <ListItem>
                                    Graphic and Logo Design
                                </ListItem>
                                <ListItem>
                                    Dynamic Web Pages
                                </ListItem>
                                <ListItem>
                                    SEO
                                </ListItem>
                                <ListItem>
                                    Content Management System
                                </ListItem>
                                <ListItem>
                                    Application Development
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item >
                                    <Typography className={classes.price}>
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <button className="main-button" onClick={() => { setOpen(true); setChoice("Enterprise") }}>Start</button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                    </Zoom>
                </Grid>

                <Modal />

            </Grid>


        </>
    )
}

export default withStyles(styles)(PriceCard);