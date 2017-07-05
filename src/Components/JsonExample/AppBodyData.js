import React, {Component} from 'react';
import {Text} from 'react-native';
import { Content, Card, CardItem, Body, Left} from 'native-base';
export default class AppBodyData extends Component {

    render() {
        let articles = this.props.data.map(function (description, id) {
                return (
                  <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                {}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                )
            });

        return (
            <Content>
                {articles}
            </Content>

        );

    }
}
module.export = AppBodyData;