import React from 'react';
import Button from '@material-ui/core/Button';
import SignUp from './SignUp';
import Dialog from '@material-ui/core/Dialog';



export default function SignUpDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className="SignUp" variant="outlined" color="primary" onClick={handleClickOpen}>
                Регистрация
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <SignUp />
            </Dialog>
        </div>
    );
}
