import React, { Component } from 'react';
import { Drawer, Container, Content, Tab, Tabs, Header, Picker } from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';
const Item = Picker.Item;
export default class PickerExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item label="Wallet" value="key0" />
                        <Item label="ATM Card" value="key1" />
                        <Item label="Credit Card" value="key2" />
                        <Item label="Debit Card" value="key3" />
                   </Picker>
                </Content>
            </Container>
        );
    }
}

