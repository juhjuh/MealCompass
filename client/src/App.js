import React, { useEffect, useState } from 'react';
import AppOutline from './Components/AppOutline'
import './App.css';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css'; 
import {connect} from 'react-redux';
import { setCurrentBank } from './redux/banks/bank.action';




function App({setCurrentBank}) {


useEffect(() => {
  setCurrentBank(JSON.parse(localStorage.getItem("bank")))
}, [])


  return (
    <div className="App">
      <AppOutline />
    </div>
  );
}

const mapDispatchToprops = (dispatch) => ({
  setCurrentBank : bank => dispatch(setCurrentBank(bank))
}) // to get data from localstorage (a string) 
// so we need to JSON.parse to make string into JSON
// setCurrentBank is key

export default connect(null, mapDispatchToprops)(App);
//connect is HOC from redux to connect mapDispatchToprops to our App  