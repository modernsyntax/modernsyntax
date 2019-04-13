import React, { useState } from "react";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
        fontSize: "25px"
    },
    cardContent: {
        height: "300px"
    }
})

const PriceCard = (props) => {
    const { classes } = props;

    const [open, setOpen] = useState(false);
    const [choice, setChoice] = useState(null);

    const handleClose = () => {
        if (open) {
            setOpen(false)
        }
    }

    const handleChoice = event => {
        // this.setState({ value: event.target.value });
        // setChoice(event.target.value)
        console.log(event)
      };


    return (
        <>
            <Grid container spacing={40} className={classes.root}>
                <Grid item xs={12} sm={6} lg={4}>
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
                                    <button className="main-button" onClick={() => setOpen(true)}>Start</button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
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
                                    <button className="main-button"  onClick={() => setOpen(true)}>Start</button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
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
                                    <button className="main-button"  onClick={() => setOpen(true)}>Start</button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

                {/* <Grid item xs={12}> */}
                <Dialog
                    open={open}
                    onClose={() => handleClose()}
                    scroll="body"
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Get Started</DialogTitle>
                    <DialogContent>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend" color="primary">Choose Package</FormLabel>
                            <RadioGroup
                                aria-label="Package"
                                name="package1"
                                value={null}
                                onChange={e => setChoice(e.target.value)}
                                color="primary"
                            >
                                <FormControlLabel value="Starter" control={<Radio color="primary" /> } label="Starter" />
                                <FormControlLabel value="Business" control={<Radio color="primary" />} label="Business" />
                                <FormControlLabel value="Business+" control={<Radio color="primary" />} label="Business+" />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose()} color="primary">
                            Cancel
            </Button>
                        <Button onClick={() => handleClose()} color="primary">
                            Submit
            </Button>
                    </DialogActions>
                </Dialog>
                {/* </Grid> */}

            </Grid>


        </>
    )
}

export default withStyles(styles)(PriceCard);