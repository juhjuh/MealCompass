import React from 'react';
import { Container, Heading } from 'react-bulma-components/full';

export default function SearchText() {
    return (
        <div><section>
        <Container>
          <div className="put-space">
          </div>
          <div className="project-title">
          <Heading size={10} renderAs="p">
          <br></br>   
          <br></br>
            Begin finding food near you <span role="img" aria-label="handshake">🤝</span>
          </Heading>
          <Heading size={6} renderAs="p">
          {/* <br></br>   
          <br></br> */}
            Updated as of November 16th <span role="img" aria-label="handshake"></span>
          </Heading>
          </div>
        </Container>
        </section></div>
    )
}
