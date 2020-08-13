import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Books from '../scenes/Books/Book';
import BookDetail from '../scenes/BookDetail/BookDetail';
import AddBook from '../scenes/AddBook/AddBook';
import DeleteBook from '../scenes/DeleteBook/DeleteBook';
import UpdateBook from '@scenes/UpdateBook/UpdateBook';
import {navigationParams} from '../common/navigation';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Book">
        <Stack.Screen
          name={navigationParams.book.name}
          component={Books}
          options={{title: navigationParams.book.title}}
        />
        <Stack.Screen
          name={navigationParams.bookDetail.name}
          component={BookDetail}
          options={{title: navigationParams.bookDetail.title}}
        />
        <Stack.Screen
          name={navigationParams.addBook.name}
          component={AddBook}
          options={{title: navigationParams.addBook.title}}
        />
        <Stack.Screen
          name={navigationParams.updateBook.name}
          component={UpdateBook}
          options={{title: navigationParams.updateBook.title}}
        />
        <Stack.Screen
          name={navigationParams.deleteBook.name}
          component={DeleteBook}
          options={{title: navigationParams.deleteBook.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
