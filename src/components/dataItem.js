import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import TimeAge from './time';


export default class DataItem extends Component {

    constructor(props){
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
        const {url, title} = this.data;
        this.props.onPress({url, title});
    }
    
    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://dummyimage.com/300x300/ededed/000' }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={3}>{this.data.description}</Text>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{this.data.source.name}</Text>
                        <TimeAge time={this.data.publishedAt}></TimeAge>
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
  
}