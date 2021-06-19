import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// interface ILogInInfo {
//     name: string;
//     password: string;

// }
export default function LoginDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log(name);
        console.log(password);
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
        setOpen(false);

    };

    const handleTextFieldChange = (e) => {
        setName(e.target.value);
    };
    const handleTextFieldChangePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Вход
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Авторизируйтесь для входа в систему
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        value={name}
                        onChange={handleTextFieldChange}

                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleTextFieldChangePassword}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Войти
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


