import React from 'react'
import { StyleSheet, View } from 'react-native'
import { 
  Container, 
  Button, 
  Text,
  Content,
  Form,
  Item,
  Label,
  Input
} from 'native-base'
import { createStackNavigator } from 'react-navigation'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <View style={{ height: 300 }}>
        </View>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button>
              <Text>Sign In</Text>  
            </Button>
            >
          </Form>
        </Content>
      </Container>
    )
  }
}
