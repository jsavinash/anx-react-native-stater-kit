import {IBookState, IBook} from '@scenes/Books/book.model';

export const getBookState = (): IBookState<IBook> => ({
  ids: ['1'],
  entities: {
    '1': {
      id: '',
      name: '',
      price: '',
      image: '',
    },
  },
});
