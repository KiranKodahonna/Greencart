import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.getElementById("ki").style.color="red";
document.querySelector("#ki").style.color="blue";

// FIX HERE: Add [0] to select the first h1 element
document.querySelectorAll("h1")[0].style.color="purple"; 

// Now that line 8 doesn't crash, this line will finally run!
document.getElementsByClassName("aryan")[0].style.color = "red";