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
import { ThemeContextProvider } from './core/ThemeProvider';
import Task from './components/task/Task';
import { SafeAreaView, ScrollView } from 'react-native';
import theme from './theme/theme';

const task = {
    description: 'Code the application for todo',
    date: new Date(Date.now()).toLocaleTimeString(),
    completed: false,
};

const App = () => (
    <ThemeContextProvider theme={theme}>
        <NavigationContainer>
            <SafeAreaView>
                <ScrollView>
                    <Task task={task} />
                </ScrollView>
            </SafeAreaView>
        </NavigationContainer>
    </ThemeContextProvider>
);

export default App;
