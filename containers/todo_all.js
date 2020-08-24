import React from 'react';
import {Container,Header, Title,Content,Body} from 'native-base';
import ToDoItem from '../components/todo_item';
import {connect} from 'react-redux';
import {addTodo,deleteTodo,updateTodo} from '../store/reducers/todo_reducers';

class ToDoAll extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            new_todo: false,
        }
    }


    
}