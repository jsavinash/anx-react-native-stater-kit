import * as React from 'react';
import {BookSceneProps} from '@models/scenes-props/book.props';
import {FlatList} from 'react-native';
import {RootState} from '@app/reducer';
import {
  StyledView,
  StyledButton,
  StyledFlatListText,
} from '@scenes/Books/book-styles';
import * as bookAction from '@scenes/Books/book.action';
import * as bookReducer from '@scenes/Books/book.reducer';
import {books as booksData} from '@scenes/Books/data';
import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

const Books = (props: BookSceneProps) => {
  const books = useReduxSelector<TypedUseSelectorHook<RootState>>(
    bookReducer.selectAllBooks,
  );
  const dispatch = useDispatch();
  if (!books.length) {
    dispatch(bookAction.addBook(booksData));
  }
  return (
    <StyledView>
      <StyledButton
        title="Add Book"
        onPress={() => props.navigation.navigate('AddBook')}
      />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <StyledFlatListText
            onPress={() => props.navigation.navigate('BookDetail')}>
            {item.name}
          </StyledFlatListText>
        )}
      />
    </StyledView>
  );
};
export default Books;
