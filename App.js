import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View } from 'react-native';

export default class AppWeather1615051008 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //cari: '',
      city: '',
      forecast: {
      main: '',
      description: '',
      temp: ''
       }
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='
    + this.state.city +
    '&appid=3599c0f6e3f0e7072917fe14471b8404&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
     }
    );
  }

  render() {
  return (

        <View style={styles.containerMain}>
        <View style={styles.box1}>
            <Text style={{ padding: 30, fontSize: 20, color: 'black', textAlign: 'center' }} >
            Prakiraan Cuaca</Text>
        </View>

        <View style={styles.box2}>
        <Text style={{ fontSize: 18 }}>Masukkan Nama Kota</Text>
        <TextInput
          style={{
            height: 50,
            width: 200,
            textAlign: 'center',
            backgroundColor: 'white',
            margin: 20 }}
            onChangeText={(city) => this.setState({ city })}
            keyboardType='ascii-capable'
        />
            <Button
            onPress={() => this.getWeather({})}
              title="Lihat"
              accessibilityLabel="Lihat"
            />
        </View>

        <View style={styles.box3}>
        <Text style={{ padding: 20, fontSize: 20 }} >
            City = {this.state.city} {'\n'}
            Suhu = {this.state.forecast.temp} {'\n'}
            Cuaca = {this.state.forecast.main} {'\n'}
            Deskripsi = {this.state.forecast.description} {'\n'}
        </Text>
        </View>

        <View style={styles.box4}>
             <Text style={{ padding: 20, fontSize: 15, color: 'black', textAlign: 'center' }} >
              copyright@indasundhari </Text>
        </View>
      </View>
     );
   }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B3E5FC',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.6,
    backgroundColor: 'green',
  },
  box2: {
    flex: 1.5,
    backgroundColor: 'green',
    margin: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 2,
    backgroundColor: '#40E0D0',
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    //alignItems: 'center'
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#F8BBD0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box4: {
    flex: 0.5,
    backgroundColor: 'green',
    marginTop: 5,
    margin: 0,
  },
  text: {
    fontSize: 25
  },
});
AppRegistry.registerComponent('AppForm2', () => AppWeather1615051008);
