import React, { Component } from 'react';
import {  Alert} from 'react-native';
import { Container, Content, List } from 'native-base';
import { ActivityIndicator, View  } from 'react-native';
import {getArticles} from '../../service/news';
import DataItem from '../../components/dataItem';
import Modal from '../../components/modal';

class Tab2 extends Component {

    constructor(props){
        super(props);
        this.state = { 
          isLoading: true,
		  dataSource : null,
		  setModalVisible: false,
		  modalArticleData: {}
        }
	}
	
	handleItemDateOnPress = (articleData) => {
		this.setState({
			setModalVisible : true,
			modalArticleData: articleData
		});
	}

	handleIModalClose = () => {
		this.setState({
			setModalVisible : false,
			modalArticleData: {}
		});
	}

    componentDidMount(){
        getArticles('business').then(data => {
            this.setState({
                isLoading: false,
                dataSource: data,
            });
        }, error => {
          Alert.alert('Error',  'Something went wrong!' + error);
        })
    }

  render() {

    if(this.state.isLoading){
      return(
          <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
          </View>
      )
    }

    return (
      <Container>
        <Content>
          <List 
            dataArray={this.state.dataSource}
            renderRow={(item) => {
              return (
              <DataItem onPress={this.handleItemDateOnPress} data={item} />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
		<Modal 
			showModal={this.state.setModalVisible}
			articleData={this.state.modalArticleData}
			onClose={this.handleIModalClose}
		/>
      </Container>
    );
  }
}

export default Tab2;