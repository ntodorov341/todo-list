/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Task from './components/task/Task';
import { SafeAreaView, ScrollView } from 'react-native';

const task = {
  description: 'Code the appsdasgfasfsafdasfsfasfsfasadasdsas',
  date: new Date(Date.now()).toDateString(),
  completed: false,
};

const App = () => (
  <NavigationContainer>
    <SafeAreaView>
      <ScrollView>
        <Task task={task} />
      </ScrollView>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
