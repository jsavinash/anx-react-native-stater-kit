// external dependencies
import {createEntityAdapter, createReducer} from '@reduxjs/toolkit';
import BookActionTypes, {IBookReducer} from '@scenes/Books/book.action-type';
import {IBook, IBookState} from '@scenes/Books/book.model';

/**
 * A noop action. There are situations where we have to perform side-effect without
 * returning further actions. A noop action comes handy in those cases.
 */

const bookEntityAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.id,
});

const jobInitialState = bookEntityAdapter.getInitialState({
  count: 10,
});
export const bookReducers: IBookReducer | {} = {};

/**
 * Reducer to set state if video uploaded.
 * @param {Object} state The job state.
 */
(bookReducers as IBookReducer)[BookActionTypes.ADD_BOOK] = function (
  state: IBookState<IBook>,
  action: any,
) {
  let books = action.payload;
  return bookEntityAdapter.addMany(state, books);
};

(bookReducers as IBookReducer)[BookActionTypes.RESET_BOOKS] = function (
  state: IBookState<IBook>,
) {
  return bookEntityAdapter.removeAll(state);
};

/**
 * State Selector to expose to components.
 */
export const {selectAll: selectAllBooks} = bookEntityAdapter.getSelectors(
  (state: IBookState<IBook>) => state,
);

export default createReducer(jobInitialState, bookReducers);
