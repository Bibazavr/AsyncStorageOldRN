/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';


import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? console.log(JSON.parse(jsonValue)) : null;
  } catch(e) {
    // error reading value
  }
}


const App = () => {
  storeData('AsyncStorage works with RN 0.60.6 :)').then(() => getData())
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Look into debug console</Text>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
