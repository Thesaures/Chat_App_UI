import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
const Home = () => {
  const localImage = require('../assets/images/photo.jpg');
  const personOne = require('../assets/images/p8.png');
  const personTwo = require('../assets/images/p7.png');
  const personThree = require('../assets/images/p6.png');
  const personFour = require('../assets/images/p5.png');
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={localImage} style={styles.backgroundImage}>
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  ...styles.frameOne,
                  marginLeft: 30,
                  marginTop: 70,
                }}
              />
              <Image
                source={personOne}
                style={{...styles.imageOne, marginTop: 20, marginLeft: 40}}
              />
              <View
                style={{
                  ...styles.frameTwo,
                  marginLeft: 10,
                  marginTop: 70,
                  backgroundColor: '#703EFF',
                }}></View>
              <Image
                source={personTwo}
                style={{...styles.imageTwo, marginTop: 20, marginLeft: 210}}
              />
            </View>
            <View
              style={{
                // display: 'flex',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  ...styles.frameTwo,
                  marginLeft: 30,
                  marginTop: 70,
                  backgroundColor: '#703EFF',
                }}></View>
              <Image
                source={personThree}
                style={{...styles.imageTwo, marginLeft: 20, marginTop: 20}}
              />
              <View
                style={{
                  ...styles.frameThree,
                  marginLeft: 30,
                  marginTop: 70,
                }}></View>
              <Image
                source={personFour}
                style={{...styles.imageThree, marginLeft: 180, marginTop: 20}}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.contentOne}>
            Enjoy the new experience of chatting with global friends
          </Text>
          <Text style={styles.contentTwo}>
            Connect peoplearound the world for free
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 20}}>Get Started</Text>
          </TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Text style={{color: 'black'}}>
              Powered by{' '}
              <Text style={{color: '#11075C', fontWeight: '600', fontSize: 18}}>
                ussage
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 3,
    height: 500,
    width: 409,
  },

  containerOne: {},
  content: {flex: 2, alignItems: 'center', justifyContent: 'center'},
  contentOne: {fontSize: 27, fontWeight: '800', color: 'black'},
  contentTwo: {marginTop: 10, fontSize: 17},
  button: {
    backgroundColor: '#703EFF',
    width: 340,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 40,
  },
  frameOne: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#0A0057',
    height: 170,
    width: 170,

    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomRightRadius: 90,
  },
  imageOne: {
    position: 'absolute',
    zIndex: 2,
    height: 220,
    width: 130,

    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 90,
  },
  frameTwo: {
    position: 'relative',
    zIndex: 1,
    height: 170,
    width: 170,

    borderRadius: 90,
  },
  imageTwo: {
    position: 'absolute',
    zIndex: 2,
    height: 220,
    width: 170,

    borderRadius: 90,
  },
  frameThree: {
    backgroundColor: '#0A0057',
    position: 'relative',
    zIndex: 1,
    height: 170,
    width: 170,

    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
  },
  imageThree: {
    position: 'absolute',
    zIndex: 2,
    height: 220,
    width: 210,
    borderTopLeftRadius: 90,
    // borderTopRightRadius: 90,
    borderBottomLeftRadius: 100,
  },
});
export default Home;
