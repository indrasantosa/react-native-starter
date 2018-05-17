import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text } from 'native-base'
import { createStackNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>
            Home
          </Text>
        </Button>
      </Container>
    )
  }
}
