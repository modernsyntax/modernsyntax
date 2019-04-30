import React, { useContext } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContext } from '../globalState'

const Snack = (props) => {
    const { snackbar, setSnackbar, snackbarMessage } = useContext(SnackbarContext);

    const handleSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar(false);
    }

    return (
        <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbar}
                autoHideDuration={6000}
                onClose={e => handleSnackbar()}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{snackbarMessage}</span>}

            />
    )
}

export default Snack;