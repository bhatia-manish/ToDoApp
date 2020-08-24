import React from 'react';
import {Container,Fab,Icon } from 'native-base';


class AddToDoButton extends React.Component{
    render(){
        const { onAddNewToDo } = this.props;
        return(
            <Container>
                <Fab 
                    style={{backgroundColor:'#5067FF'}}
                    position="bottomRight"
                    onPress={() => onAddNewToDo(true) } >          
                    <Icon name='md-add'/>                
                </Fab>
            </Container>
        );
    }
}

export default AddToDoButton;