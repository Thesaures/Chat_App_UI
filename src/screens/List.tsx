import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavigation from '../Navigation/BottomNavigation';
import Card from '../components/Card';
const List = () => {
  const personOne = require('../assets/images/p3.png');
  const personTwo = require('../assets/images/p7.png');
  const personThree = require('../assets/images/p6.png');
  const personFour = require('../assets/images/p5.png');
  const personFive = require('../assets/images/p2.png');
  const personSix = require('../assets/images/p1.png');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <Icon name={'search'} size={35} style={{ marginLeft: 15 }} />
            <TextInput placeholder="Search message..."></TextInput>
          </View>
          <View style={styles.edit}>
            <Icon name={'search'} size={25} />
          </View>
        </View>

        <Card
          image={personOne}
          name={'Sebastian Rudiger'}
          message={'hello everyone'}
          numberOfMessage={3}
          time={'9:32 PM'}
          status={'green'}
          messageStatus={''}
        />
        <Card
          image={personTwo}
          name={'Caroline Varsah'}
          message={'hello everyone'}
          numberOfMessage={3}
          time={'9:32 PM'}
          status={'grey'}
          messageStatus={''}
        />
        <Card
          image={personThree}
          name={'Darshan Patelchi'}
          message={'hello everyone'}
          numberOfMessage={3}
          time={'9:32 PM'}
          status={'green'}
          messageStatus={''}
        />
        <Card
          image={personFour}
          name={'Mohammed Arnold'}
          message={'hello everyone'}
          numberOfMessage={3}
          time={'9:32 PM'}
          status={'grey'}
          messageStatus={''}
        />
        <Card
          image={personSix}
          name={'Tamara '}
          message={'hello everyone'}
          numberOfMessage={3}
          time={'9:32 PM'}
          status={'grey'}
          messageStatus={''}
        />
        <Card
          image={personFive}
          name={'Ariana Amberline'}
          message={'hello everyone'}
          numberOfMessage={3}
          time={'9:32 PM'}
          status={'green'}
          messageStatus={''}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    width: 300,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default List;
