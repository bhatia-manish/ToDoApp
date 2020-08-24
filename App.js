import React from 'react';
// import MyTabs from './navigation/main_navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AddToDo from './components/add_todo';
import AddToDoButton from './components/add_todo_button';


class AllTodo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        new_todo: false,
    };
  }

  saveToDoData = (todo) => {
    this.addNewToDo(show = false);
    console.log("Todo is: " + todo.title + " " + (todo.completed ? "completed!" : "not completed!"));
  }

  addNewToDo = (show) => {
    this.setState({
      new_todo: show
    });
  }  


  render(){
    const { new_todo } = this.state;
    return (
      <Container>
      <Header><Body><Title>All</Title></Body></Header>
      {new_todo && 
        <AddToDo 
          onPress = { this.saveToDoData }
          onCancel = { this.addNewToDo }
        />
      }          
      <AddToDoButton onAddNewToDo = { this.addNewToDo } />               
    </Container>
    );
  }
}

function  CompletedTodo(){
  return (
    <Container>
          <Header><Body><Title>Completed</Title></Body></Header>
          <Content><Text>Completed Section</Text></Content>
    </Container>
  );
}


function ActiveTodo() {
  return (
    <Container>
        <Header><Body><Title>Active</Title></Body></Header>
        <Content><Text>Active Section</Text></Content>    
      </Container>
  );
}



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  
  
  
  
  
  
  
  
  
  render(){
  const Tab = createBottomTabNavigator();
  if (!this.state.isReady) {
    return <AppLoading />;
  }
  return (
  <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
   
        <Tab.Screen 
        name="AllTodo" 
        component={AllTodo}
        options={{
          tabBarLabel: 'AllTodo',
          tabBarIcon: ({ color, size }) => (
            <Icon name= { 'list' } color = { 'red' } active = { true } />
          ),
        }}
        />
        
        <Tab.Screen
         name="ActiveTodo" 
         component={ActiveTodo}
         options={{
          tabBarLabel: 'ActiveTodo',
          tabBarIcon: ({ color, size }) => (
            <Icon name= { 'unlock' } color = { 'red' }/>
          ),
        }}
         
         />
        
        
        <Tab.Screen
        name = "Completed"
        component={CompletedTodo}
        options={{
          tabBarLabel: 'ActiveTodo',
          tabBarIcon: ({ color, size }) => (
            <Icon name= { 'checkmark' } color = { 'red' }/>
          ),
        }}
          
          />
        
      </Tab.Navigator>
  </NavigationContainer>
  );
  }
}