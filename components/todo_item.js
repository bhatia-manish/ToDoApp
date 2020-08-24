import React from 'react';
import { ListItem,Text,CheckBox,Body,Button,Icon } from 'native-base';
import { updateTodo } from '../store/reducers/todo_reducers'


class ToDoItem extends React.Component{
    render(){
        const{ todo,deleteTodo,updateTodo} = this.props;

        return (
            <ListItem>
                <CheckBox
                    checked = {todo.completed}
                    onPress = {()=> updateTodo({
                        ...todo,
                        completed: !todo.completed
                    })}
                />

                <Body>
                <Text>{todo.title}</Text>
                </Body>

                <Button
                    transparent
                    onPress = {()=>deleteTodo(todo)}
                >
                    <Icon name = {'md.trash'}/>
                </Button>
         
           </ListItem>
        );


    }

}

export default ToDoItem;