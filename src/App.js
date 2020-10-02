
import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, FlatList, RefreshControl, YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Content, Card, CardItem, Body, Text, Header, List, ListItem, Left, Right, Thumbnail, Item, Button } from "native-base";
//Toast
import Toast, { DURATION } from 'react-native-easy-toast'

//Layouts
import UserAdd from './modules/login/containers/UserAdd';
import UserInformation from './modules/login/containers/InfoUser';
//Icons
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

class Indexx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      style: {},
      refreshing: false,
      useNativeDriver: false
    }
    // Podemos inicializar una funcion creando la variable en el constructor
    this.CheckUsers();

    YellowBox.ignoreWarnings([
      'Animated: `useNativeDriver` was not specified.',
    ]);
  }


  CheckUsers = async () => {
    this.setState({ refreshing: true });
    var keys = await AsyncStorage.getAllKeys();
    this.containerUsers = [];
    await AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        let value = store[i][1];
        let trasformText = JSON.parse(value);
        this.containerUsers.push(trasformText);
      });
    });
    this.setState({
      users: this.containerUsers,
      refreshing: false
    });
  }

  ListOfUsers = ({ item }) => {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' }} />
        </Left>
        <Body>
          <Text> {item[0]}  </Text>
          <Text note numberOfLines={1}>{item[2]}</Text>
        </Body>
        <Right>
          <Button transparent info
            onPress={() => {
              this.props.navigation.navigate('InformationUser', {
                firstName: item[0],
                lastName: item[1],
                age: item[2],
                email: item[3]
              });
            }}
          >
            <Text>View</Text>
          </Button>

        </Right>
      </ListItem>
    );
  }

  ShowMessage = async (text, duration) => {
    var keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
    this.refs.toast.show(text, duration);

  }

  ClearData(text, duration) {
    return (
      <Container style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button style={{ position: 'absolute', left: 0, padding: 5 }} onPress={() => this.props.navigation.navigate('Form')} rounded info>
          <Entypo name="plus" size={40} color="white" />
        </Button>
        {this.ButtonSize}
        {
          this.state.users.length > 0
            ?
            <Button rounded danger style={{ padding: 5 }} onPress={() => this.ShowMessage(text, duration)}>
              <MaterialCommunityIcons name="delete" size={40} color="white" />
            </Button>
            :
            <Button rounded danger style={{ display: 'none', padding: 10 }}>
              <MaterialCommunityIcons name="delete" size={40} color="white" />
            </Button>
        }
      </Container>
    );
  }

  render() {

    return (
      <Container>
        <View>
          <Toast ref="toast" style={{ backgroundColor: '#00DF9C' }} />
        </View>
        <Content>
          <List>
            <FlatList
              data={this.state.users}
              renderItem={this.ListOfUsers}
              ListEmptyComponent=
              {
                <View style={{ alignItems: 'center' }} >
                  <Text style={{ textAlign: 'center' }}>No hay usuarios</Text>
                </View>
              }
              refreshControl={

                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.CheckUsers} />
              }
            />
          </List>
          <View style={{ alignItems: 'center' }} >
            <Feather style={{ padding: 5 }} name="arrow-down" size={24} color="black" />
            <Text style={{ paddingTop: 10, textAlign: 'center' }}>Desliza para actualizar</Text>
          </View>
        </Content>
        {this.ClearData('Se ha borrado correctamente', DURATION.LENGTH_SHORT)}
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
});

const AppNavigator = createStackNavigator(
  {
    Home:
    {
      screen: Indexx,
      path: 'index',
      // navigationOptions:({
      //        //titulo del header
      //        title: 'Index',

      //      })
    },
    Form:
    {
      screen: UserAdd,
      path: 'createUser',
    },
    InformationUser:
    {
      screen: UserInformation,
      path: 'info',
      navigationOptions: ({
        title: 'User Information'
      })
    }
  },
  //Show that header o no
  {
    headerLayoutPreset: 'center'
  },
  {
    initialRouteName: "Home"
  }

);

export default createAppContainer(AppNavigator);






