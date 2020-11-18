import React from 'react';
import { Hero } from "react-bulma-components/full";
import { Heading } from "react-bulma-components/full";

export default function Profile() {
    return (
        <div><section>
        <Hero color="light" size="small">
        <Hero.Body>
        < br />< br /> <br />
        <Heading className="title is-1" renderAs="p">
        {/* MealCompass */}
        <img src="./images/Image_B50x.png" alt="logo" />
        </Heading>
        <br />
        <br />

        {/* This is currently commented out because of my friend who graciously made a logo for MealCompass! */}
        {/* <Heading subtitle renderAs="p">
        Food for all, all for food.
        <br />
        
         </Heading> */}
         {/* <Heading className="title is-2" renderAs="p">
         <span role="img" aria-label="compass">🧭</span>
        </Heading> */}

        </Hero.Body>
        </Hero>
        </section></div>
    )
}
