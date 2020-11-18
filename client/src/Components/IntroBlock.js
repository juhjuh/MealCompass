import React from 'react';
import { Columns, Heading } from 'react-bulma-components/full';

export default function IntroBlock() {




    return (
        <div><section>
            <Columns>
                <Columns.Column>
                    {/* <img src="./images/undraw_good_team_m7uu.png" alt="parkshare screenshot" style={{height: "60%"}} /> */}
                    <img src="./images/undraw_cooking_lyxy.png" style={{width: "50%"}} alt="cooking pic"  />
                    < br />
                    < br />
                    < br />

                </Columns.Column>
                <Columns.Column>
                    <div className="project-box-right">
                        <Heading size={8} renderAs="p">
                            What is MealCompass?
                        </Heading>
                        <Heading className="space-top" subtitle renderAs="p">
                        MealCompass is for everyone.  The common goal is to increase accessibility to food distribution, food banks, community meals, and opportunities for food that's free.
                        </Heading>
                        <Heading className="space-top" subtitle renderAs="p">
                            We're doing this by centralizing information and connecting community members - on this platform.
                        </Heading>
                        
                       
                    </div>
                </Columns.Column>
            </Columns>
        </section></div>
    )
}
