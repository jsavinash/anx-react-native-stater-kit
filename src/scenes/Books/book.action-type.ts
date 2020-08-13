import {EntityState} from '@reduxjs/toolkit';
import {IBook} from '@scenes/Books/book.model';
import * as bookActions from '@scenes/Books/book.action';

enum BookActionTypes {
  ADD_BOOK = '[BOOKS] Add Book',
  REMOVE_BOOK_BY_ID = '[BOOKS] Remove Book By Id',
  UPDATE_BOOK = '[BOOKS] Update Book',
  RESET_BOOKS = '[BOOKS] Reset Book',
  NOOP = '[NOOP]',
}

type BookActionType =
  | BookActionTypes.ADD_BOOK
  | BookActionTypes.REMOVE_BOOK_BY_ID
  | BookActionTypes.UPDATE_BOOK
  | BookActionTypes.RESET_BOOKS
  | BookActionTypes.NOOP;

type BookActionCreatorType = typeof bookActions;

export type IBookReducer = {
  [key in BookActionType]: (
    state: EntityState<IBook>,
    action: BookActionCreatorType,
  ) => EntityState<IBook>;
};

export default BookActionTypes;
