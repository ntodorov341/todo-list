import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

type Task = {
  description: string;
  date: string;
  completed: boolean;
};

export interface Props {
  task: Task;
}

const Task: React.FC<Props> = (props): JSX.Element => {
  const { task } = props;

  const [checked, setChecked] = React.useState(task.completed);

  return (
    <View style={styles.container}>
      <CheckBox
        size={35}
        checked={checked}
        onPress={() => setChecked(!checked)}
        style={styles.text}
      />
      <Text style={styles.text}>{task.description}</Text>
      <Text style={styles.text}>{task.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderWidth: 0.5,
  },
  text: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default Task;
