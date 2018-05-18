import React from 'react'
import { StyleSheet, View } from 'react-native'
import { 
  Header,
  Content,
  Container, 
  Button, 
  Text,
  Left,
  Right,
  Icon,
  Body,
  Title
} from 'native-base'
import { createStackNavigator } from 'react-navigation'

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Explore</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
      </Container>
    )
  }
}
