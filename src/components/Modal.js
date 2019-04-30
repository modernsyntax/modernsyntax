import React, { useContext, useState } from 'react';
import  { ModalContext, SnackbarContext } from "../globalState";

import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            // showMask
            variant="outlined"
        />
    );
}

const Modal = (props) => {
    const { classes } = props;

    const { open, setOpen,
                choice, 
                name, setName, 
                email, setEmail, 
                company, setCompany, 
                message, setMessage
    } = useContext(ModalContext);

    const { setSnackbar, setSnackbarMessage
} = useContext(SnackbarContext);

    const [textmask, setTextmask] = useState('(  )    -    ');


    const handleClose = () => {
        if (open) {
            setOpen(false)
        }
    }
    
    const sendForm = () => {
        const webhook = "https://chat.googleapis.com/v1/spaces/AAAAbSt_Jtw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=BeZhQ3ZEndx8y4p24r7EIZoLmuZ37I24PekfAkqb0vk%3D"

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regexEmail.test(email)) {
            setSnackbarMessage("Email not valid");
            setSnackbar(true);
            return
        }

        const body = {
            cards: [
                {
                    sections: [
                        {
                            widgets: [
                                {
                                    textParagraph: {
                                        text: `
<b>Package:</b> ${choice}
<b>Name:</b> ${name.trim()}
<b>Email:</b> ${email.trim()}
<b>Number:</b> ${textmask}
<b>Company:</b> ${company.trim()}
<b>Message:</b> ${message.trim()}`
                                    }
                                },
                                {
                                    buttons: [
                                        {
                                            imageButton: {
                                                icon: "EMAIL",
                                                onClick: {
                                                    openLink: {
                                                        url: email
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        axios.post(webhook, body)
            .then(res => {
                setOpen(false);
                setSnackbarMessage("We have recieved your message, You will be contacted shortly")
                setSnackbar(true);
            })
            .catch(err => console.log(err));
    }


    return (
        <>
        <Dialog
                    open={open}
                    onClose={() => handleClose()}
                    scroll="body"
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Get Started</DialogTitle>
                    <DialogContent>
                        <form action="/" name="contact" method="POST" data-netlify="true">
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        autoFocus
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
                                        id="email"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        className={classes.textField}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* <TextField
                                        id="outlined-name"
                                        label="Number"
                                        fullWidth
                                        className={classes.textField}
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                    /> */}
                                    <InputLabel
                                        // ref={ref => {
                                        //     props.labelRef = ReactDOM.findDOMNode(ref);
                                        // }}
                                        htmlFor="number"
                                    >
                                        &nbsp;
                                    </InputLabel>
                                    <OutlinedInput
                                        id="number"
                                        value={textmask}
                                        placeholder={`Phone: (   )   -    `}
                                        onChange={e => setTextmask(e.target.value)}
                                        id="formatted-text-mask-input"
                                        inputComponent={TextMaskCustom}
                                        labelWidth={0}
                                        fullWidth
                                        notched
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="business"
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
                                        id="message"
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
        </>
    )
}

export default withStyles(styles)(Modal);