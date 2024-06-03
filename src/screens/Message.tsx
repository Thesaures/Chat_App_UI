import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
import { useTaskDetails } from '../api/weatherApi';
const Message = () => {
  const handleMessage = async (event) => {
    console.log('entered the function');
    const data = JSON.parse(event.nativeEvent.data);
    if (data.latitude && data.longitude) {
      const { latitude, longitude } = data;
      Alert.alert('Clicked', `Latitude: ${latitude}, Longitude: ${longitude}`);
      const { detailsTask } = await useTaskDetails(longitude, latitude);
      console.log('this is temp', detailsTask);
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => openLink('https://yandex.com/maps?utm_medium=mapframe&utm_source=maps')}
      >
        <Text style={[styles.link, { top: 0 }]}>Yandex Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink(
            'https://yandex.com/maps/ll=76.402815%2C10.154646&utm_medium=mapframe&utm_source=maps&z=4'
          )
        }
      >
        <Text style={[styles.link, { top: 14 }]}>India — Yandex Maps</Text>
      </TouchableOpacity>
      <WebView
        source={
          Platform.OS === 'android'
            ? { uri: 'file:///android_asset/yandex-map.html' }
            : require('../assets/yandex-map.html')
        }
        style={styles.webview}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
        onMessage={handleMessage} // Handle messages from the WebView
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  link: {
    color: '#000', // Change text color for better visibility
    fontSize: 12,
    position: 'absolute',
  },
  webview: {
    flex: 1, // Use flex to make WebView take up all available space
    position: 'relative',
  },
});

export default Message;
