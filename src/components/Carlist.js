import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Addcar from './Addcar';
import Editcar from './Editcar';


function Carlist () {

    const [cars, setCars] = useState([]);

    const fetchCars = () => {
        fetch('https://carrestapi.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars));
    }

    const updateCar = (updateCar, link) => {
        console.log("edit painettu");
        console.log("linkki: " + link);
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updateCar)
        })
        .then(response => {
            if(response.ok) {
                console.log("onnistui");
                fetchCars();
            }
            else{
                alert('Something went wrong.');
            }
        })
        .catch(err => console.error(err))
    }

    const deleteCar = (link) => {
        console.log('delete painettu');
        console.log(link);

        fetch(link, {method: 'DELETE'})
            .then(response => {
                if(response.ok){
                    fetchCars();
                }
                     
            })
    }

    const addCar = (car) => {
        console.log("carlistin addcar functio");
        fetch('https://carrestapi.herokuapp.com/cars', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok){
                fetchCars();
            }
            else{
                alert('Something went wrong when adding car');
            }
            })
            .catch(err => console.error(err))
      }

    React.useEffect( () => {
        fetchCars();
        }, [])

    const columns = [
        { field: 'brand', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'color', sortable: true, filter: true },
        { field: 'fuel', sortable: true, filter: true },
        { field: 'year', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true },
        { headerName: '', width: 100, field: '_links.self.href', 
        cellRenderer: params =>
            <Editcar updateCar={updateCar} params={params}/>
        },
        { headerName: '', width: 100, field: '_links.self.href', 
        cellRenderer: params =>
            <IconButton onClick={() => deleteCar(params.value)}>
                <DeleteIcon color="error"/>
            </IconButton>
        }
    ]


    return(
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
           <Addcar addCar={addCar} />
            <AgGridReact
            rowData={cars}
            paginationPageSize={10}
            pagination={true}
            columnDefs={columns}
            >
            </AgGridReact>
        </div>
    );
}
export default Carlist;