import React from 'react'
import { StyleSheet, View } from 'react-native'
import { 
  Header, 
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

export default class ConversationsScreen extends React.Component {
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
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Button>
          <Text>
            This is Profile Screen
          </Text>
        </Button>
      </Container>
    )
  }
}
