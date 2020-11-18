import React, { Component } from 'react';
import { Section } from "react-bulma-components/full";

import Navibar from './NavBar';
import Profile from './Profile';
import SearchText from './SearchText';
import IntroBlock from './IntroBlock';
// import ContactUs from './ContactUs';
import FooterBulma from './FooterBulma';
import SearchBar from './SearchBar';
import MapMaybe4 from './MapMaybe4';


import './App.css'; 

export default class AppOutline extends Component {

    render() {
        return (
            <div>

                <Navibar />
                <Profile />
                {/* <SearchText /> */}
                <Section title="About" id="aboutSection" /> 
                <IntroBlock />
                <MapMaybe4 />
                <SearchText />
                <Section title="Extra Space" id="aboutSection" />
                <SearchBar />
                <Section title="Extra space" id="aboutSection" />
                <Section title="Finder" id="findFoodSection" />
                <FooterBulma />


            </div>
        )
    }
}
