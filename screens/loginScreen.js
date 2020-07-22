import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ionicons';

export default class LoginScreen extends React.Component {
  state = {
    name: '',
  };
  continue = () => {
    this.props.navigation.navigate('Chat', {name: this.state.name});
  };
  changeName = (text) => {
    this.setState({name: text});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <View style={{marginTop: 64}}>
            <Image
              source={require('../assets/msg1.png')}
              style={styles.image}
            />
          </View>
          <View style={{marginHorizontal: 32}}>
            <Text style={styles.header}>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.changeName}
              placeholder="Enter username"
              value={this.state.name}
            />
            <View style={{alignItems: 'flex-end', marginTop: 64}}>
              <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Icon android="md-arrow-round-forward" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  circle: {
    width: 400,
    height: 400,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -110,
    top: -40,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514e5a',
    marginTop: 32,
    left: 90,
  },
  input: {
    marginTop: 12,
    height: 50,
    borderColor: '#bab7c3',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514e5a',
    fontWeight: '600',
    left: 90,
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
    left: 80,
  },
});
