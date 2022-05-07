import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, TextField } from '@mui/material';

export default function Addcar({addCar}){

const [open, setOpen] = React.useState(false);
const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    price: '',
    year: '',
})

const handleClose = () => {
    console.log("suljettiin ikkuna");
    addCar(car);
    setOpen(false);
}

const handleCancel = () => {
setOpen(false);
}

const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value})
    console.log("syotetta muutettu" + car.brand);

}

const handleClickOpen = () => {
    console.log("addcar painettu")
    setOpen(true);
}

    return(
        <div>
            <Button onClick={handleClickOpen} variant="outlined">
            Add Car
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Add Car</DialogTitle>
                <DialogContent>
                    <TextField 
                            name="brand"
                            value={car.brand}
                            label="Brand"
                            margin="dense"
                            fullWidth={true}
                            onChange={inputChanged}
                       />
                       <TextField 
                            name="model"
                            value={car.model}
                            label="Model"
                            margin="dense"
                            fullWidth={true}
                            onChange={inputChanged}
                       />
                       <TextField 
                            name="color"
                            value={car.color}
                            label="Color"
                            margin="dense"
                            fullWidth={true}
                            onChange={inputChanged}
                       />
                       <TextField 
                            name="fuel"
                            value={car.fuel}
                            label="Fuel"
                            margin="dense"
                            fullWidth={true}
                            onChange={inputChanged}
                       />
                       <TextField 
                            name="year"
                            value={car.year}
                            label="Year"
                            margin="dense"
                            fullWidth={true}
                            onChange={inputChanged}
                       />
                       <TextField 
                            name="price"
                            value={car.price}
                            label="Price"
                            margin="dense"
                            fullWidth={true}
                            onChange={inputChanged}
                       />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
