import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import ToDoAll from '../containers/todo_all'


class  AllToDo extends React.Component{
    render(){
    return (
        <ToDoAll show_new_todo = { true } screen = "All" />
    );
    }
}


export default AllToDo;