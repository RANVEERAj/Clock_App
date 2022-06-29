import { Alert, Text, View} from "react-native";
import React, { Component } from "react";
import {TimeInput} from "react-time-input"
export default class Alarm extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alarmTime: "00:00",
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }
  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmTime(), 1000);
  }
  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }
  checkAlarmTime() {
    if (this.state.alarmTime === "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "please set an alarm";
    } else {
      this.alarmMessage = "your alarm is set for" + this.state.alarmTime;
    }
    if (this.state.currentTime === this.state.alarmTime) {
      Alert.alert("It is time to get up.");
    }
  }
  setAlarmTime(event) {
    event.preventDefault();
    inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  render() {
    console.log(this.state.currentTime);
    if (this.state.currentTime !== "") {
      return (
        <View>
          <Text>It is {this.state.currentTime}</Text>
          <TimeInput
            name="example"
            initTime="00:00"
            mountFocus="true"
            onTimeChange={val=>{this.setState({alarmTime:val})}}
            
          />
        </View>
      );
    } else {
      return <Text>Loading!</Text>;
    }
  }
}
