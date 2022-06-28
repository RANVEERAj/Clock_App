import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function WeatherScreen2() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return (
    <View>
      <Text>WeatherScreen2</Text>
    </View>
  );
}
