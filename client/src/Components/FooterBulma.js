import React from 'react';
import { Footer, Container, Content } from 'react-bulma-components/full';

export default function FooterBulma() {
  return (
    <div>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>MealCompass</strong>
            </p>
            <p>
              <strong>Created</strong> by <a href="http://unca.edu">Justin Sharpe</a> 
            </p>

          </Content>
        </Container>
      </Footer>
    </div>
  )
}
