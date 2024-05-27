import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
type card = {
  image: ImageSourcePropType | undefined;
  name: string;
  message: string;
  numberOfMessage: number;
  time: string;
  status: string;
  messageStatus: string;
};
const Card = (props: card) => {
  const { image, name, message, numberOfMessage, time, status, messageStatus } = props;
  const personOne = require('../assets/images/photo.jpg');
  return (
    <>
      <View style={styles.card}>
        <View style={styles.profile}>
          <Image source={image} style={styles.image} />
          <View style={styles.active}>
            <View style={{ ...styles.activeInside, backgroundColor: status }} />
          </View>
        </View>
        <View style={styles.nameMessage}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.message}>
            <Icon name={'done-all'} size={20} />
            <Text style={{ marginLeft: 10 }}>{message}</Text>
          </View>
        </View>
        <View style={styles.time}>
          <Text>{time}</Text>
          <View style={styles.count}>
            <Text style={styles.countText}>{numberOfMessage}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    height: 95,
    width: 365,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    position: 'relative',
  },
  message: {
    flexDirection: 'row',
  },
  profile: {
    flexDirection: 'column',
  },
  active: {
    height: 19,
    width: 19,
    borderRadius: 20,
    position: 'absolute',
    marginLeft: 56,
    marginTop: 55,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  activeInside: {
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  name: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  nameMessage: {
    height: 75,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  time: {
    height: 75,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  count: {
    height: 30,
    width: 30,
    backgroundColor: '#703EFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: 'white',
    fontWeight: '400',
  },
});
export default Card;
