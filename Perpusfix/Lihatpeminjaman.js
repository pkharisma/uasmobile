import React, { Component } from "react";
import {View,Text,StyleSheet, ImageBackground, TouchableHighlight,TextInput,ScrollView,Alert,image} from "react-native";
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from "./Header";

const axios = require('axios'); 
export default class Lihatpeminjaman extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: []
        };
    }
    componentDidMount(){
    axios.get('https://putukharisma.000webhostapp.com/sistemperpustakaan/getPeminjaman.php?kode_peminjaman=')
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
  
  render() {
      return (
        <ImageBackground resizeMode='cover'source={require("./foto/708613.jpg")} style={{width:'100%', height:'100%'}}>
        <View style={styles.containerMain}>

      <Header judul={"LIHAT ANGGOTA PERPUSTAKAAN"} />
      <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                            
                            <Text>Kode Peminjaman : {item.kode_peminjaman}</Text>
                            <Text>Kode Buku : {item.kode_buku}</Text>
                            <Text>Kode Anggota : {item.kode_anggota}</Text>
                            <Text>Nama Anggota : {item.nama_anggota}</Text>
                            <Text>Judul Buku : {item.judul_buku}</Text>
                            <Text>Tanggal Pinjam : {item.tanggal_pinjam}</Text>
                            <Text></Text>
                            </View>
                      )
                    }
                />
        </View>
      </ImageBackground>
        );
      }
  }
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
    },
    backgroundImage:{
      flex:1,
      justifyContent: "center"
    },
    vHeader: {
      flex: 10,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box1: {
      width: "120%",
      marginTop: 10,
      flex: 0.6,
      backgroundColor: '#F0F8FF',
      flexDirection: 'column',
      justifyContent : 'center',
    },
    teksinputteks:{
      flex : 1,
      flexDirection: 'row',
      marginHorizontal: '5%',
      marginBottom: 10,
      
  },
    txtBox1: {
      backgroundColor:'white',
      flex: 1, 
      marginVertical: 20 , 
      margin:20,
      padding: 10, 
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1, 
      width: '70%', 
      borderRadius: 5 
    },
    textBox1:{
      color: 'white',
      fontSize: 15,
    },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    },
    body4: {
      flex: 1,
      flexDirection: 'row'
    },
    box1:{
      flex:1,
      margin: 3,
    },
    tombol: {
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 15,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 20,
  },
  iteminput: {
    flex:2,
    margin:10,
    marginRight: 8,
  },
  labelinput: {
    flex:2,
    fontSize: 15,
    height: 25,
    marginLeft: 10,
    marginTop:5,
    color: 'white',
  },
  tekstombol: {
    fontSize:15,
    color:'white'
  }
});