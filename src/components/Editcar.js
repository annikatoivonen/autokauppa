import React from 'react';
import IconButton from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

export default function Editcar({updateCar, params}) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color:'',
        fuel:'',
        price:'',
        year:''
    })
    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleClickOpen = () => {
        setOpen(true);
        setCar({
            brand: params.data.brand,
            model: params.data.model,
            color: params.data.color,
            fuel: params.data.fuel,
            price: params.data.price,
            year: params.data.year
        })
    }

    const handleSave = () => {
        console.log("käsitellään tallennus");
        console.log(params.value);
        updateCar(car, params.value);
        setOpen(false);
    }

    const handleClickClose = () => {
        setOpen(false);
    }
return(
    <div>
        <IconButton onClick={handleClickOpen}>
            <EditIcon/>
        </IconButton>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>Edit Car</DialogTitle>
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
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
        </Dialog>
    </div>
);

}