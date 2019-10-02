import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Title, Body } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
            <Body>
                <Title>News App</Title>
            </Body>
        </Header>
        <Tabs>
          <Tab heading="General">
            <Tab1 />
          </Tab>
          <Tab heading="Business">
            <Tab2 />
          </Tab>
          <Tab heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}