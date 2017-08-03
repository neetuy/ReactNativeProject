import React, { Component } from 'react';
import {
  
  Text,
  View
} from 'react-native';
import { Input, Icon, Picker,Radio, Button, ListItem, Right, CheckBox, Body, InputGroup,Header, Title} from 'native-base';
   const Item = Picker.Item

export default class FormExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            radio1: false,
            radio2: false,
            checkbox1: false,
            checkbox2: false,
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }

    toggleRadio1 = () =>{
    this.setState({
      radio1: true,
      radio2: false,
      
    });
}
    toggleRadio2 = () =>{
    this.setState({
      radio1: false,
      radio2: true,
    });
  }
  toggleSwitch1 = () =>{
    this.setState({
      checkbox1: !this.state.checkbox1,
    });
  }

  toggleSwitch2 = ()=> {
    this.setState({
      checkbox2: !this.state.checkbox2,
    });
  }
  onValueChange = ( value: string) =>{
        this.setState({
            selected1 : value
        });
    }

    render() {
        return (
            <View style={{flex:1}}>    
                <Title>
                Form
                </Title>
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-person' />
                        <Input placeholder='Email' />
                    </InputGroup>
                </ListItem>
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-unlock' />
                        <Input placeholder='Password' secureTextEntry={true}/>
                    </InputGroup>
                </ListItem>
                <ListItem>
                    <InputGroup>
                        <Input inlineLabel label='NAME' placeholder='Name' />
                    </InputGroup>
                </ListItem>
                <ListItem>
                <Text style={{marginRight:20,MarginLeft:20}}>Gender</Text>
                    <Radio
                        style={{marginRight:10}}
                        selected={this.state.radio1}
                        onPress={() => this.toggleRadio1()}
                    />
                    <Text style={{marginRight:20,MarginLeft:20}}>Male</Text>
                    <Radio
                        style={{marginRight:10}}
                        selected={this.state.radio2}
                        onPress={() => this.toggleRadio2()}
                        />
                        <Text style={{marginRight:20,MarginLeft:20}}>Female</Text>    
                </ListItem>
                <ListItem>
                <Text style={{marginRight:20,MarginLeft:20}}>Qualification</Text>
                    <CheckBox style={{marginRight:20}} checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
                        <Text style={{marginRight:20,MarginLeft:20}}>B.Tech</Text>
                    <CheckBox style={{marginRight:20}} checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
                        <Text style={{marginRight:20,MarginLeft:20}}>M.Tech</Text>
                </ListItem>
                <ListItem>
                    <InputGroup >
                        <Input inlineLabel label='NAME' placeholder='Address' />
                    </InputGroup>
                </ListItem>
                <Picker
                        Header="Options"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange}>
                        <Item label="1" value="key0" />
                        <Item label="2" value="key1" />
                        <Item label="3" value="key2" />
                        <Item label="4" value="key3" />
                   </Picker>
            <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
               <Text> Submit</Text>
            </Button>
            </View>
        )
    }
}


