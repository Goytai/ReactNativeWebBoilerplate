/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
      <Button screen="ScreenTwo" params={{}}>
        Go to Screen Two
      </Button>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
      <Button screen="ScreenOne" params={{}}>
        Go to Screen One
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'ScreenOne',
  screens: {
    ScreenOne: ScreenOne,
    ScreenTwo: ScreenTwo,
  },
});

const Navigation = createStaticNavigation(RootStack);

const linking = {
  enabled: 'auto' as const,
  prefixes: [],
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation linking={linking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
