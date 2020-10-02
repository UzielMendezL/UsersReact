// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { Container, Content, Card, CardItem, Body, Button, Form, Item, Label, Input,Text } from "native-base";
// //Debe ser clase el smart component 
// import IndexAdd from './Untitled folder/Login/containers/Index';

// // class HomeScreen extends React.Component {
// //   render() {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Home Screen</Text>

// //         <Button
// //           title="Envio de vista"
// //           onPress={() => this.props.navigation.navigate('Login')}></Button>
// //             <Button
// //           title="Envio a la otra  vista"
// //           onPress={() => this.props.navigation.navigate('IndexA')}></Button>
// //       </View>
// //     );
// //   }
// // }

// // class LoginLayout extends React.Component {
// //   render() {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Details Screen</Text>
// //       </View>
// //     );
// //   }
// // }
// class LoginLayout extends React.Component {
//   render() {
//     return (
//       <Button style = {styles.orders} rounded info>
//               <Text style={ styles.colorText}>Crear</Text>
//             </Button>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   colorText:
//   {
//     textAlign: 'center',
//     width: '100%'
//   }
// });


// const AppNavigator = createStackNavigator(
//   {
//     // Home: {
//     //   screen: HomeScreen,
//     //   navigationOptions:({
//     //     //titulo del header 
//     //     title: 'Homes'

//     //   })
//     // },
//     IndexA:
//     {
//       screen: IndexAdd
//     }
//     // Login: 
//     // {
//     //   screen: LoginLayout
//     // }
//   },
//    //Mostramos el header o no 
//   {
//     headerLayoutPreset: 'center'
//   },
//   {
//     initialRouteName: 'IndexA',
//   }
 
//   );

// export default createAppContainer(AppNavigator);

 //import React, {Component} from 'react';

 //import { Button,Text } from "native-base";
 //Debe ser clase el smart component 
 //import CreateUser from './login';
 
// export default class Index extends Component {
//     render() {
//       return (
//         <Button style = {styles.orders} rounded info>
//                 <Text style={ styles.colorText}>Crear</Text>
//               </Button>
//       );
//     }
//   }