import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(
  state = initialState.valuesToEdit,
  action
) {
  switch (action.type) {
    case types.ACTION_TO_EDIT:
      return [...state, { ...action.valuesToEdit }];
    default:
      return state;
  }
}
