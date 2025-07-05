import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import WeatherApp from "./WeatherApp.jsx";
function App() {
  let handleClick=()=>{
    console.log("button was clicked!");
                      };

  return (
    <>
    {/* <h1>Material UI Demo</h1>
    <Button variant="contained" color="success" size="small" onClick={handleClick}  startIcon={<DeleteIcon />}>Clcik Me!</Button>
    <Button variant="contained" color="error" size="large" onClick={handleClick} >Clcik Me!</Button>
    <Alert severity="error">This is an error Alert.</Alert> */}
    <WeatherApp/>
    </>
         )
              }

export default App
