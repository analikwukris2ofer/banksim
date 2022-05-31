import { ActionType } from "../action-types";
import { Action } from "../actions";

//In redux we only update our state using actions.
//Inorder to do this we need action creators. They create actions.
//A reducer is a function that ultimately ends up updating the state.

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
