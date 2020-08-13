import * as React from 'react';
import {BookDetailSceneProps} from '@models/scenes-props/book-detail.props';
import {
  StyledView,
  StyledText,
  StyledButton,
} from '@scenes/BookDetail/book-detail-styles';

const BookDetail = (props: BookDetailSceneProps) => {
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
export default BookDetail;
