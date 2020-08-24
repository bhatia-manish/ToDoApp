import React from 'react';
import AllTodo from '../screens/all_todo'
import CompletedTodo from '../screens/completed_todo';
import ActiveTodo from '../screens/active_todo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';

export default class Navigation extends React.Component{
  render(){
    const Tab = createBottomTabNavigator();
    return(
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
          tabBarLabel: 'Completed',
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