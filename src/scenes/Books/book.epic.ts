import {mergeMap, withLatestFrom} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import BookActionTypes from '@scenes/Books/book.action-type';
import * as bookAction from '@scenes/Books/book.action';

export const addBookEpic = (action$: any, store$: any) =>
  action$.pipe(
    ofType(BookActionTypes.ADD_BOOK),
    withLatestFrom(store$),
    mergeMap((data: any) => {
      const [action, store] = data;
      console.log('action------->', action);
      console.log('store', store);
      return of(bookAction.noop());
    }),
  );
