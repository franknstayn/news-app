import React, { Component } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button, Text } from 'native-base';

const webViewHeight = Dimensions.get('window').height - 100;

class ModalComponent extends Component {
    constructor(props){
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared by faksolutions News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle: `Share ${title}`}
        )
    }

    render() {
        const {showModal, articleData} = this.props;
        const  { url } = articleData;

        if(url == 'undefined'){
            return null;
        }

        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}>
                <Container style={{ margin: 15, marginBottom: 0, backgroundColor: '#fff' }}>
                     <Header>
                        <Left>
                            <Button transparent onPress={this.handleClose}>
                            <Icon name='close' />
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{ color: '#fff'}}></Title>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare}>
                            <Icon name='share' />
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={webViewHeight}>
                        <WebView source={{ uri: url }}
                        style={{marginTop: 20, height: webViewHeight }} 
                        onError={this.handleClose} 
                        startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
    }
}


export default ModalComponent;