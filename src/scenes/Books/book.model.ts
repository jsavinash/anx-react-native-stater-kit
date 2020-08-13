import {EntityId, Dictionary} from '@reduxjs/toolkit';

export interface IBookState<T> {
  ids: EntityId[];
  entities: Dictionary<T>;
}

export interface IBook {
  id: string;
  name: string;
  price: string;
  image: string;
}
