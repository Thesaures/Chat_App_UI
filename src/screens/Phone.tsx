import { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Modal, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Phone = () => {
  const personOne = require('../assets/images/p3.png');
  type messages = { message: string; time: string };
  const [message, setMessage] = useState<messages[]>([]);
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState(false);
  const currentTime = new Date();

  const [text, setText] = useState('');
  const showMessage = () => {
    if (text) {
      let hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      let meridiem = 'AM';
      if (hours > 12) {
        hours -= 12;
        meridiem = 'PM';
      } else if (hours === 0) {
        hours = 12;
      }
      const newMessage = {
        message: text,
        time: hours + ':' + minutes + ' ' + meridiem,
      };
      setMessage([...message, newMessage]);
      setText('');
    }
  };
  const [selectedImage, setSelectedImage] = useState('');
  // Gallery
  const openImagePicker = () => {
    setOption(false);
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  // Cameraa
  const openCamera = async () => {
    setOption(false);
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    try {
      const result = await launchCamera(options); // Await the result
      console.log('Entered the function one', result);
      handleResponse(result); // Handle the response
    } catch (error) {
      console.error('Error while opening camera:', error);
    }
  };
  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      showImage(imageUri);
    }
  };
  const showImage = (imageUri: string) => {
    if (imageUri) {
      let hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      let meridiem = 'AM';
      if (hours > 12) {
        hours -= 12;
        meridiem = 'PM';
      } else if (hours === 0) {
        hours = 12;
      }
      const newMessage = {
        message: imageUri,
        time: hours + ':' + minutes + ' ' + meridiem,
      };
      setMessage([...message, newMessage]);
      setText('');
    }
  };
  console.log('this is image', message);
  const callModal = (imageUri: string) => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
    setSelectedImage(imageUri);
  };
  return (
    <>
      <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#FAFAFA' }}>
        <Modal visible={option} transparent={true} onRequestClose={() => setOption(false)}>
          <View style={styles.optionModal}>
            <TouchableOpacity style={styles.button} onPress={openCamera}>
              <Text style={{ color: 'white', fontWeight: '600' }}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openImagePicker}>
              <Text style={{ color: 'white', fontWeight: '600' }}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.card}>
          <View>
            <Icon name={'keyboard-backspace'} size={30} />
          </View>
          <View style={styles.profile}>
            <Image source={personOne} style={styles.image} />
            <View style={styles.active}>
              <View style={{ ...styles.activeInside, backgroundColor: 'green' }} />
            </View>
          </View>
          <View style={styles.nameMessage}>
            <Text style={styles.name}>Sebastian Rudrigger</Text>
            <View style={styles.message}>
              <Text style={{ color: 'green' }}>Online</Text>
            </View>
          </View>
          <View style={styles.time}>
            <Icon name={'video-call'} size={30} />
          </View>
          <View>
            <Icon name={'phone'} size={30} />
          </View>
        </View>
        <View style={styles.body}>
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.textBoxLeft}>Hello everyone i am here</Text>
              <Text style={{ marginLeft: 10 }}>9:22 PM</Text>
              <Text style={styles.textBoxRight}>Hello Sebastian</Text>
              <View style={styles.link}>
                <Image source={personOne} style={styles.linkImage} />
                <Text style={styles.linkText}>this is link</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 75,
                  marginLeft: 40,
                }}
              >
                <Text>9:45 pm</Text>
                <Icon name={'done-all'} size={20} color={'blue'} />
              </View>
              <FlatList
                data={message}
                renderItem={({ item }) => (
                  <>
                    <View style={styles.textTime}>
                      {item.message.startsWith('file:///') ? (
                        <>
                          <Modal
                            style={styles.modal}
                            visible={modal}
                            onRequestClose={() => setModal(false)}
                          >
                            <Image
                              style={{ height: 850, width: 420 }}
                              source={{
                                uri: selectedImage,
                              }}
                            ></Image>
                          </Modal>
                          <TouchableOpacity onPress={() => callModal(item.message)}>
                            <Image
                              style={{ height: 150, width: 100 }}
                              source={{
                                uri: item.message,
                              }}
                            ></Image>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <Text style={styles.textBoxRight}>{item.message}</Text>
                      )}
                      <Text style={{ marginLeft: 10 }}>{item.time}</Text>
                    </View>
                  </>
                )}
              />
            </ScrollView>
          </>
        </View>
        <View style={styles.bottom}>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Type here....."
              style={styles.text}
              value={text}
              onChangeText={setText}
              onSubmitEditing={showMessage}
            ></TextInput>
            <View
              style={{
                flexDirection: 'row',
                borderColor: 'grey',
                backgroundColor: '#FAFAFA',
                alignItems: 'center',

                justifyContent: 'space-evenly',
                borderLeftWidth: 2,
              }}
            >
              <Icon
                name={'circle'}
                size={30}
                onPress={openImagePicker}
                style={{ marginLeft: 10 }}
              />
              <Icon
                name={'camera-alt'}
                size={30}
                onPress={() => setOption(true)}
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'column',
  // },
  // header: {
  //   flex: 1,
  //   backgroundColor: 'red',
  // },
  body: {
    flex: 7,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  modal: {
    // backgroundColor: 'red',

    flex: 1,
  },
  link: {
    flexDirection: 'column',
    marginBottom: 10,
    backgroundColor: '#703EFF',
    padding: 12,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'flex-end',
    color: 'white',
  },
  linkImage: {
    height: 200,
    width: 310,
    borderRadius: 40,
  },
  optionModal: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: 170,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 350,
    marginHorizontal: 140,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#703EFF',
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'row',
    borderRadius: 90,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-evenly',
    width: 350,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  text: {
    backgroundColor: '#FAFAFA',
    alignSelf: 'flex-start',
    width: 200,
    borderRadius: 20,

    padding: 8,
  },
  image: {
    height: 65,
    width: 65,
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
    marginLeft: 50,
    marginTop: 45,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  linkText: {
    color: 'white',
    marginTop: 10,
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
    // justifyContent: 'space-evenly',
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
  textBoxLeft: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'flex-start',
    color: 'black',
    marginTop: 10,
  },
  textBoxRight: {
    // height: 20,
    // width: 20,
    backgroundColor: '#703EFF',
    padding: 12,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'flex-end',
    color: 'white',
    marginBottom: 10,
  },
  textTime: {
    marginBottom: 10,
    backgroundColor: '#FAFAFA',
    // padding: 12,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'flex-end',
    color: 'white',
  },
});
export default Phone;
