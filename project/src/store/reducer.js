import { ActionType } from './action';
import { offers } from './../mocks/offers';

const DefaultValues = {
  CITY: 'Paris',
  SORTING: 'Popular',
};

const initialState = {
  city: DefaultValues.CITY,
  sortType: DefaultValues.SORTING,
  offers,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_SORTIG:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};
