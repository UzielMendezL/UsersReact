import React, { Component, useState } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Button, Form, Item, Label, Input } from "native-base";
import Toast, { DURATION } from 'react-native-easy-toast'

export default class UserAdd extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      name: '',
      lastName: '',
      email: '',
      age: '',
      validateInputName: false,
      validateInputLastName: false,
      validateInputAge: false,
      validateInputEmail: false,
      buttonDisabled: false
    }

  }

  AddUser = async () => {
    const requireValidation = this.ValidateSubmit();
    if (!requireValidation) {
      return false;
    }

    var InformationUser = [];
    var stateUser = this.state;

    InformationUser.splice(4, 0, stateUser.name, stateUser.lastName, stateUser.email, stateUser.age);
    //Set Random number
    const min = 1;
    const max = 1000;
    let rand = min + Math.random() * (max - min);
    let onlyInt = parseInt(rand);

    await AsyncStorage.setItem('Store-' + onlyInt, JSON.stringify(InformationUser));
    return this.props.navigation.navigate('Home');
  };

  Validate(event, type) {

    if (type == 'name') {
      this.setState({ name: event });
      this.state.validateInputName = false;
      this.state.buttonDisabled = false;
      if (event.length == 0) {
        this.state.validateInputName = true;
        this.state.buttonDisabled = true;
      }
    }
    if (type == 'lastName') {
      this.setState({ lastName: event });
      this.state.validateInputLastName = false;
      this.state.buttonDisabled = false;
      if (event.length == 0) {
        this.state.validateInputLastName = true;
        this.state.buttonDisabled = true;
      }
    }
    if (type == 'age') {
      this.setState({ age: event });
      this.state.validateInputAge = false;
      this.state.buttonDisabled = false;

      if (event.length == 0) {
        this.state.validateInputAge = true;
        this.state.buttonDisabled = true;

      }
    }
    if (type == 'email') {
      this.setState({ email: event });
      this.state.validateInputEmail = false;
      this.state.buttonDisabled = false;
      if (event.length == 0) {
        this.state.validateInputEmail = true;
        this.state.buttonDisabled = true;
      }
    }
  }
  ValidateSubmit() {
    if (this.state.name.length == 0) {
      //alert('El campo nombre esta vacío')
      this.refs.toast.show('El campo nombre esta vacío', DURATION.LENGTH_LONG);
      this.setState({ buttonDisabled: true, validateInputName: true });
      return false;
    }

    if (this.state.lastName.length == 0) {
      this.refs.toast.show('El campo apellido esta vacío', DURATION.LENGTH_LONG);
      this.setState({ buttonDisabled: true, validateInputLastName: true });
      return false;
    }

    if (this.state.age.length == 0) {
      this.refs.toast.show('El campo edad esta vacío', DURATION.LENGTH_LONG);
      this.setState({ buttonDisabled: true, validateInputAge: true });
      return false;
    }

    if (this.state.email.length == 0) {
      this.refs.toast.show('El campo email esta vacío', DURATION.LENGTH_LONG);
      this.setState({ buttonDisabled: true, validateInputEmail: true });
      return false;
    }
    return true;
  }

  render() {
    return (
      <Container>
        {/* USAR PALABRA RESERRVADA EN CONTENT PARA SUS ESTILOS */}
        <Content padder contentContainerStyle={styles.JustifyAllCenter} >
          <Card>
            <CardItem header bordered>
              <Text style={styles.colorText}>Crear usuario</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Form>
                  <Item error={this.state.validateInputName} floatingLabel>
                    <Label>Nombre</Label>
                    <Input onChangeText={(text) => this.Validate(text, 'name')} />
                  </Item>
                  <Item error={this.state.validateInputLastName} floatingLabel>
                    <Label>Apellido</Label>
                    <Input onChangeText={(text) => this.Validate(text, 'lastName')} />
                  </Item>
                  <Item error={this.state.validateInputEmail} floatingLabel>
                    <Label>Correo</Label>
                    <Input onChangeText={(text) => this.Validate(text, 'email')} />
                  </Item>
                  <Item error={this.state.validateInputAge} floatingLabel>
                    <Label>Edad</Label>
                    <Input maxLength={2} keyboardType='numeric' onChangeText={(text) => this.Validate(text, 'age')} />
                  </Item>
                  <Button disabled={this.state.buttonDisabled} style={this.state.buttonDisabled ? styles.disabled : styles.button} onPress={this.AddUser} rounded info>
                    <Text style={styles.colorText}>Crear</Text>
                  </Button>
                </Form>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Toast ref="toast" style={{ backgroundColor: 'red' }} />
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
  },
  validationInputs:
  {
    borderColor: 'red',
    borderWidth: 3
  },
  button:
  {
    marginTop: 50,
  },
  disabled:
  {
    marginTop: 50,
    backgroundColor: 'grey'
  }
});