import React, { Component } from 'react';

import './App.css';
import L from 'leaflet';

import greenPoint from './assets/currentLocationDark.png';
import * as foodbanks from './assets/foodbankData.json';


import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";


class MapMaybe4 extends Component {
  constructor() {
    super();

    this.state = {
      
      greenPoint: {
        lat: 32.585941,
        lng: -81.558479,
        icon: greenPoint
       },


      zoom: 13
    }
  }


  // testing --------
  // componentDidMount() {
  //   console.log(Data);
  // }


  clean = () => {
    this.setState(prevState => ({
      greenPoint: {
        ...prevState.greenPoint,
        icon: greenPoint 
      }
    }))
  }

  render() {




    let greenPoint = L.icon({
      iconUrl: this.state.greenPoint.icon,
      // shadowSize: [50, 64], 
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      shadowAnchor: [4, 62],  
      popupAnchor: [0, -41]
    });


    const positionGreen = [this.state.greenPoint.lat, this.state.greenPoint.lng];


    const defaultLocation = [35.5951, -82.5515];

    // const textSize = {
    //   font-size: 40px;
    // }


    return (

      <div className="App">
        <Map className="map" center={defaultLocation} zoom={this.state.zoom}>
          <TileLayer
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://api.mapbox.com/styles/v1/mealcompass/ckg41qhfj2adj19p1mqfze1bj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVhbGNvbXBhc3MiLCJhIjoiY2tnNDFzd3hoMGY5cDJzcXI5cm5uZmp0dSJ9.7tutW0G0zUvK9GZtm26AcQ"
            attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          />


          {foodbanks.features.map(bank => (
            <Marker
              key={bank.id}
              position={[
                bank.geometry.coordinates[0],
                bank.geometry.coordinates[1]
              ]}
              icon={greenPoint}
            >
              <Popup 
                key={bank.id}
                position={[
                  bank.geometry.coordinates[0],
                  bank.geometry.coordinates[1]
                ]}
                onClose={() => {
                  // setActiveBank(null);  // in docs, but found to not be needed currently.
                }}
                >
                
                <div>
                  <h1><b>{bank.properties.name}</b></h1>
                  <h1>{bank.properties.street}</h1>
                  <p>{bank.properties.city}, {bank.properties.zip}</p>
                  <p></p>
                  <p><b>Hours:</b> {bank.properties.hours}</p>
                  <p><b>Description</b> {bank.properties.description}</p>
                </div>
              </Popup>

            </Marker>
          ))
          }







        </Map>

      </div>
    );
  }
}

export default MapMaybe4;
