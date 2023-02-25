import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
console.log(db["the"].chunks)
export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: '',
      displayText: '',
      chunks: []
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'monkey-chunky',
            style: { color: 'orange', fontSize: 30 },
          }}
        />
        <Image style={styles.imageIcon}
          source={{
            uri: require('https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png')
          }}
        />

        <TextInput style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text
            });
          }
          }
          value={this.state.text}
        />
        <TouchableOpacity style={styles.goButton}
          onPress={() => {
            this.setState({
              chunks: db[this.state.text].chunks
            })
          }}
        >
          <Text style={styles.buttonText}>
            go
          </Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map(item => {
            return (
              <TouchableOpacity style={styles.chunkButton}>
              <Text style={styles.displayText}>
                {item}
              </Text>
              </TouchableOpacity>
            )
          }

          )}

        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none'
  },

  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },

  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 75,
  },

  chunkButton: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'red',
  }
});
