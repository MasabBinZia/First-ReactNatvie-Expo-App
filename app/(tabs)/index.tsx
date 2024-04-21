import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from '../../components/Header';
import TodoItem from '../../components/TodoItem';
import AddTodo from '../../components/AddTodo';
import Sandbox from '../../components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'watch Netflix - chill', key: '3' },
  ]);

  const handleDelete = (key: any) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text: any) => {
    if (text.length > 3) {
      setTodos((prevTodos: any) => {
        return [{ text: text, key: Math.random().toString }, ...prevTodos];
      });
    } else {
      Alert.alert('OOOPS!', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TodoItem item={item} pressHandler={handleDelete} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
