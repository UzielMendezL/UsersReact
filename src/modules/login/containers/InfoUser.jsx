import * as React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Card, CardItem, Text, Body, Button, Thumbnail } from 'native-base';

export default class InfoUser extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    const { navigation } = this.props;

    return (
      
      <Container style={{ paddingTop: 50 }}>
        <Thumbnail style={{ left: 135 }} large source={{ uri: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' }} />
        <Content padder>
          <Card>
            <CardItem bordered>
              <Body>
                <Text>Name:</Text>
                <Item rounded>
                  <Input disabled placeholder={navigation.getParam('firstName')} />
                </Item>
                <Text>LastName:</Text>
                <Item rounded>
                  <Input disabled placeholder={navigation.getParam('lastName')} />
                </Item>
                <Text>Age:</Text>
                <Item rounded>
                  <Input disabled placeholder={navigation.getParam('age')} />
                </Item>
                <Text>Email:</Text>
                <Item rounded>
                  <Input disabled placeholder={navigation.getParam('email')} />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  colorText:
  {
    textAlign: 'center',
    width: '100%'
  },
  JustifyAllCenter:
  {
    flex: 1,
    justifyContent: 'center'
  }
});




