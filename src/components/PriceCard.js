import React, { useState } from "react";
import axios from 'axios';

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
        fontSize: "16px"
    },
    cardContent: {
        height: "300px"
    }
})

const PriceCard = (props) => {
    const { classes } = props;

    const [open, setOpen] = useState(false);
    const [choice, setChoice] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [number, setNumber] = useState(undefined);
    const [company, setCompany] = useState(undefined);
    const [message, setMessage] = useState(undefined);

    const webhook = "https://chat.googleapis.com/v1/spaces/AAAAbSt_Jtw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=BeZhQ3ZEndx8y4p24r7EIZoLmuZ37I24PekfAkqb0vk%3D"

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

    const sendForm = () => {

        const body = {
            text: `
            *Name:* ${name}
            *Email:* ${email}
            *Number:* ${number}
            *Company:* ${company}
            *Message:* ${message}`
        }
        axios.post(webhook, body)
            .then(res => {
                setOpen(false)
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <Grid container spacing={40} className={classes.root}>
                <Grid item xs={12} sm={6} lg={4}>
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
                                    <Typography className={classes.price}>
                                        $800+
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
                                <ListItem>
                                    Mobile Website
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item >
                                    <Typography className={classes.price}>
                                        $1200+
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
                        <CardHeader title="Enterprise" />
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
                                <ListItem>
                                    Mobile Website
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
                                        Click Start to Get a Quote
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <button className="main-button" onClick={() => setOpen(true)}>Start</button>
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
                        {/* <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend" color="primary">Choose Package</FormLabel>
                            <RadioGroup
                                aria-label="Package"
                                name="package1"
                                value={null}
                                onChange={e => setChoice(e.target.value)}
                                color="primary"
                            >
                                <FormControlLabel value="Small Business" control={<Radio color="primary" /> } label="Small Business" />
                                <FormControlLabel value="Creative Professional" control={<Radio color="primary" />} label="Creative Professional" />
                                <FormControlLabel value="Enterprise" control={<Radio color="primary" />} label="Enterpirise" />
                            </RadioGroup>
                        </FormControl> */}
                        <form action="/" name="contact" method="POST" data-netlify="true">
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        fullWidth
                                        className={classes.textField}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-name"
                                        label="Email"
                                        fullWidth
                                        className={classes.textField}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-name"
                                        label="Number"
                                        fullWidth
                                        className={classes.textField}
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-name"
                                        label="Business name"
                                        fullWidth
                                        className={classes.textField}
                                        value={company}
                                        onChange={e => setCompany(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Additional Info"
                                        multiline
                                        fullWidth
                                        rows="4"
                                        defaultValue={message}
                                        onChange={e => setMessage(e.target.value)}
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose()} color="primary">
                            Cancel
            </Button>
                        <Button onClick={() => sendForm()} color="primary">
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