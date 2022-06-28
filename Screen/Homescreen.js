import { Text, View,StyleSheet } from 'react-native';
import React, { Component } from 'react';
import moment from "moment"

export default class Homescreen extends Component {
  constructor(){
    super()
    this.state={
      time:moment().format("LTS"),
      date:moment().format("LL"),

    }
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({
      time:moment().format("LTS"),
      date:moment().format("LL"),
    })},1000)
  }
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.timeText}>{this.state.time}</Text>
       <Text style={styles.dateText}>{this.state.date}</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create(
  {
   container:{
     flex:1,
     alignItems:"center",
     justifyContent:"center",
   } ,
   timeText:{
     color:"green",
     fontSize:50
   },
   dateText:{
    color:"green",
    fontSize:40
  }
  }
)