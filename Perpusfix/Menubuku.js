import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import Header from "./Header";


export default class Menubuku extends React.Component {
  render() {
    return (
      <ImageBackground resizeMode='cover'source={require("./foto/708613.jpg")} style={{width:'100%', height:'100%'}}>
    <View style={styles.containerMain}>
      <Header judul={"DATA Buku"} />
      <Image source = {require("./foto/book.png")} style = {{marginLeft:75,width: 200, height: 200}} />

      <View style={styles.vButton}></View>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Lihatbuku')}
            title="Lihat Buku"
            accessibilityLabel="Lihat Buku"
            />
    <View style={styles.vButton}></View>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('Editbuku')}
            title="Edit Buku"
            accessibilityLabel="Edit Buku"
            />
    <View style={styles.vButton}></View>
        <Button
            color="orange"
            onPress={() => this.props.navigation.navigate('HapusBuku')}
            title="Hapus Buku"
            accessibilityLabel="Hapus Buku"
            />
          </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage:{
    flex:1,
    justifyContent: "center"
  },
  box1: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "orange",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
  vButton:{
    margin:5,
    borderRadius: 40,
    justifyContent: 'center',
  },
});
