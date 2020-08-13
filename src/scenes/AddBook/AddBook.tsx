import * as React from 'react';
import {BookDetailSceneProps} from '@models/scenes-props/book-detail.props';
import {
  StyledView,
  StyledText,
  StyledButton,
} from '@scenes/AddBook/add-book-styles';

const AddBook = (props: BookDetailSceneProps) => {
  return (
    <StyledView>
      <StyledText>Details Screen</StyledText>
      <StyledButton
        title="Go to Login... again"
        onPress={() => props.navigation.navigate('Book')}
      />
    </StyledView>
  );
};
export default AddBook;
